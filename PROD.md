# Subir para produção! 🚀

Para produção são necessários 3 servidores com seus IPs reservados, todos para serem usados na **porta 80**

Servidores dockerizados:
- Assets ✅
- Angular ✅
- Strapi ❌

Encontrei algumas dificuldades para dockerizar o Strapi mas não faz mal. Vamos ao que interessa!

Considerando que você já tenha docker instalado...

## Servidor de assets:

```
docker compose up -d
```

verifique se as portas estão corretas do docker-compose.yml

```yaml
services:
  server:
    container_name: assets
    build:
      context: .
    environment:
      NODE_ENV: production
    env_file:
      - .env
    ports:
      - 80:3000
```

## Servidor Angular

```yaml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    container_name: angular-intranet
    ports:
      - "80:80"
    volumes:
      - ./cripto:/usr/share/nginx/html/cripto
      - ./dist/teste/browser:/usr/share/nginx/html
      - ./nginx.conf:/etc/nginx/nginx.conf
    environment:
      - TZ=America/Campo_Grande
    restart: unless-stopped
```

altere o que for necessário e rode:

```bash
docker compose up -d
```

## Servidor Strapi

Apenas modifique no arquivo `.env` da porta **1337 para 80** e rode novamente o projeto:

```
npm run develop
```
