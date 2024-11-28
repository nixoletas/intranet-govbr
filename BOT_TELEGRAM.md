# Como criar o bot telegram

Precisamos de dois recursos do telegram:

- [@GetChatID_IL_BOT](@GetChatID_IL_BOT)
- [@BotFather](@BotFather)

## Passos

1. Criar grupo onde o Bot será usado

2. Obter o ID do grupo com o **@GetChatID_IL_BOT**

3. Criar bot no **@Botfather**

4. Obter ID do bot

### Pronto! ✅ Você já tem os dados necessários para usar o bot de chamados!

```
- ID do grupo
- ID do bot
```

### Insira esses 2 dados no `.env` do **assets-server**
```env
PORT=3000
BOT_ID="7900241164:AAGwwpPhI6exampleiW4u-lsBaRb6qzXfFLg"
CHAT_ID=-100245example
SERVER_IP=127.0.0.1
```
