# MAST — Site institucional

Site estático (HTML + CSS + um JS de 1 KB), sem framework e sem build. Pesa poucos KB
e roda tranquilo na mesma VPS dos bots (nginx consome ~5 MB de RAM).

## Estrutura

```
public/            ← tudo que vai para o servidor
  index.html
  assets/style.css
  assets/main.js   ← número do WhatsApp fica aqui
  assets/logo.svg
deploy/nginx.conf  ← config do nginx (instalação direta)
Dockerfile / docker-compose.yml  ← alternativa via Docker
```

## Configurar o WhatsApp

Edite `public/assets/main.js` e troque `WHATSAPP_NUMBER` (só dígitos, com 55 + DDD).
Cada botão do site envia uma mensagem pronta diferente (atributo `data-wa` no HTML).

Também revise no `index.html`: e-mail (`contato@mast.com.br`) e link do Instagram.

## Ver localmente

```bash
cd public && python3 -m http.server 8000
```

## Deploy na VPS (Vertracloud)

### Opção A — nginx direto

```bash
sudo mkdir -p /var/www/mast && sudo git clone <URL_DO_REPO> /var/www/mast
sudo cp /var/www/mast/deploy/nginx.conf /etc/nginx/sites-available/mast
sudo ln -s /etc/nginx/sites-available/mast /etc/nginx/sites-enabled/mast
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d mast.com.br -d www.mast.com.br   # HTTPS grátis
```

Atualizar depois: `cd /var/www/mast && sudo git pull` (não precisa reiniciar nada).

### Opção B — Docker

```bash
git clone <URL_DO_REPO> mast-site && cd mast-site
docker compose up -d --build
```

O site sobe na porta 8080; aponte o proxy reverso (nginx/Caddy/Traefik) do domínio para ela.
