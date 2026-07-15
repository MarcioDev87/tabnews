# tabnews

Implementação e treino do curso.dev.

## Arquitetura

- Next.js 16 executado em Cloudflare Workers por meio do OpenNext.
- PostgreSQL hospedado no Neon e acessado pelo Worker através do Cloudflare
  Hyperdrive.
- O Docker Compose permanece apenas como referência do ambiente local antigo.

## Desenvolvimento

Crie `.env.local` a partir de `.env.example`. Para fazer a API local buscar os
dados na hospedagem Cloudflare, defina `CLOUDFLARE_API_BASE_URL` com a URL do
Worker publicado e execute:

```bash
npm install
npm run dev
```

Para validar o bundle no runtime local da Cloudflare, copie
`.dev.vars.example` para `.dev.vars`, preencha `DATABASE_URL` e execute:

```bash
npm run preview
```

Os arquivos `.env*` e `.dev.vars*` com credenciais são ignorados pelo Git.

## Deploy na Cloudflare

Autentique o Wrangler, crie um Hyperdrive para o Neon e publique o Worker:

```bash
npx wrangler login
npx wrangler hyperdrive create tabnews-neon --connection-string="<NEON_DATABASE_URL_UNPOOLED>"
npm run deploy
```

Em Workers Builds, use `npm run deploy` como comando de deploy. O Worker é
configurado em `wrangler.jsonc`. A credencial Neon fica armazenada no
Hyperdrive e não é exposta ao Worker nem ao navegador; pushes futuros também podem ser publicados
automaticamente conectando este repositório no painel da Cloudflare.
