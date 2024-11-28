## servidor de assets da intranet

- font-awesome (ícones da tag < i >)
- markdown (usados na aba institucional, ramais e sti)
- pics (fotos e logos)
- rawline (fonte usada no modelo gov)

### como rodar

instalar dependências do projeto
``` bash
npm i
```

renomear "example.env" pra ".env". Essas são as variáveis de ambiente, IP e porta da máquina que está rodando e BOT de chamados STI
``` env
PORT=80
BOT_ID="7290038263:AAGZrpgeSumJ970MaiJ7w3sx6UhkWTTBrYg"
CHAT_ID=-1002170411548
SERVER_IP=10.56.19.152
```


**Você tem 2 opções para rodar o projeto**

Opção Nr 1 - rodar direto no servidor (isso irá ocupar o terminal)
```
node server.js
```

Opção Nr 2 - rodar usando docker (recomendado)
```
docker compose up -d --build
```

A opção com docker te permite não ocupar o terminal e ainda ter os logs facilmente acessíveis quando necessário
```
docker compose logs -f
```