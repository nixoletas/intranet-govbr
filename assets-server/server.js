const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const axios = require('axios');
const schedule = require('node-schedule');
const moment = require('moment-timezone');
require('moment/locale/pt-br');

const openMeteoUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-20.4428&longitude=-54.6464&current=temperature_2m,relative_humidity_2m,precipitation,rain,wind_speed_10m&timezone=auto';
let cachedData = null;
moment.locale('pt-br');
require('dotenv').config();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// ============== ASSETS SERVER ========================
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// ============== SIMPLE LANDING PAGE ========================
app.get('/', (req, res) => {
  res.send(`
Servidor de Assets da Intranet do 9º B Com GE
`);
});

// ============== LIVRO DE VIAGEM =====================

app.post('/api/livro-viagem', async (req, res) => {
  const payload = req.body;

  // Substitua os 'entry.xxxxxxxx' pelos campos corretos do Google Forms
  const formData = {
    'entry.203316237': payload.pg,
    'entry.1357674605': payload.name,
    'entry.1301638427': payload.phone,
    'entry.1557140496': payload.destination,
    'entry.1816942798': payload.period,
    'entry.1946063329': payload.emergencydegree,
    'entry.178589889': payload.emergencyname,
    'entry.82221134': payload.emergencyphone,
    'entry.161526785': payload.reason
  };

  try {
    const googleFormUrl = `${process.env.GOOGLE_FORM_URL}`;
    
    // Envia o formulário usando uma requisição POST
    await axios.post(googleFormUrl, new URLSearchParams(formData));

    // Responde com sucesso
    res.status(200).send({ message: 'Formulário enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
    res.status(500).send({ message: 'Erro ao enviar o formulário' });
  }
});

// ============== TELEGRAM BOT ========================
app.post('/api/send-chamado', async (req, res) => {
  const BOT_ID = process.env.BOT_ID;
  const CHAT_ID = process.env.CHAT_ID;
  const { pg, name, description, phone, ramal } = req.body;

  const now = moment().tz('America/Cuiaba').format('DD/MM/YYYY (ddd) - HH:mm');

  const message = `
🚨 *Novo chamado*
🗓️ ${now}

🪖 *${pg} ${name}*

📞 *Celular*: ${phone}

☎️ *Ramal*: ${ramal ? ramal : 'não informado'}

🗣️ ${description}
`;

  try {
    await axios({
      method: 'post',
      url: `https://api.telegram.org/bot${BOT_ID}/sendMessage`,
      data: {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      }
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar mensagem para o Telegram', error);
    res.status(500).json({ success: false });
  }
});

// ============== TEMPERATURA DO SERVIDOR ========

app.post('/api/alerta-temperatura', async (req, res) => {
  const BOT_ID = process.env.BOT_ID;
  const CHAT_ID = process.env.CHAT_ID;
  const { message } = req.body;
  console.log(req.body)

  try {
      // Enviar a mensagem para o Telegram
      await axios.post(`https://api.telegram.org/bot${BOT_ID}/sendMessage`, {
          chat_id: CHAT_ID,
          text: message
      });

      res.status(200).json({ message: 'Alerta enviado com sucesso!' });
  } catch (error) {
      console.error('Erro ao enviar alerta para o Telegram:', error);
      res.status(500).json({ error: 'Erro ao enviar o alerta' });
  }
});


// ============== WEATHER ========================
async function fetchWeatherData() {
  try {
    const response = await axios.get(openMeteoUrl);
    cachedData = response.data;
    console.log('Dados do clima tempo atualizados com sucesso!');
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

schedule.scheduleJob('2 * * * *', fetchWeatherData);


app.get('/weather', async (req, res) => {
  if (cachedData) {
    res.json(cachedData);
  } else {
    try {
      const response = await axios.get(openMeteoUrl);
      cachedData = response.data;
      res.json(cachedData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      res.status(500).json({ error: 'Erro ao buscar dados' });
    }
  }
});

const PORT = process.env.PORT || 3000;
const SERVER_IP = process.env.SERVER_IP;

app.listen(PORT, () => {
  console.log(`Rodando na porta http://${SERVER_IP}:${PORT}`);
});
