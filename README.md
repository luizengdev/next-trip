<p align="center">
  <img alt="Next Trips logo" src="public/logo-github.png" width="220px"/>
</p>

## 🚀 Projeto

Aplicação web que permite que o usuário realize reservas para viagens.

## 🎥 Visão do Projeto
https://travel-next-trips.vercel.app/



## 💡 Funcionalidades

- Buscar viagens por localização, por data inicial, orçamento máximo.
- Ver detalhes de uma viangem, descrição da viagem, ver foto principal, destaques, preço por noite, data, hóspedes, diárias.
- Reservar uma viagem.
- Autenticação com o Google.
- Garantir que a data selecionada não foi reservada por outro usuário.
- Garantir que número máximo de hóspedes seja respeitado.
- Ver viagens reservadas.
- Fazer pagamento
- Modal de confimação para cancelar viagem reservada.
- Ao cancelar uma viagem, a data precisa ficar disponivel novamente.

## 🛠️ Stack utilizada

Next.js, React, TypeScript, Prisma, PostgreSQL, Next Auth, Tailwind CSS, React Hook Form, Stripe API, Google Maps API.

| <img src="https://img.icons8.com/color/48/000000/nextjs.png"/> | <img src="https://img.icons8.com/plasticine/48/000000/react.png"/> | <img src="https://img.icons8.com/color/48/000000/typescript.png"/> | <img src="https://img.icons8.com/color/48/000000/prisma-orm.png"/> | <img src="https://img.icons8.com/color/48/000000/postgreesql.png"/> |
|-----------------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------|
| <img src="https://next-auth.js.org/img/logo/logo-sm.png" width="32px"/> | <img src="https://img.icons8.com/color/48/000000/tailwindcss.png"/> | <img src="https://img.icons8.com/color/48/000000/react-native.png"/> | <img src="https://img.icons8.com/color/48/000000/stripe.png"/> | <img src="https://img.icons8.com/color/48/000000/google-maps.png"/> |


## ⚙️ Variáveis de Ambiente

Para rodar esse projeto localmente, é necessário adicionar as seguintes variáveis de ambiente no seu .env

```
DATABASE_URL = URL do seu banco de dados
```

```
HOST_URL = URL do ambiente (development ou production)
```

```
GOOGLE_CLIENT_ID = ID do cliente OAuth do Google
```

```
GOOGLE_CLIENT_SECRET = Secret do cliente OAuth do Google
```

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = Key da API do Google Maps
```

```
STRIPE_SECRET_KEY = Key secreta da API do Stripe
```

```
NEXT_PUBLIC_STRIPE_KEY = Key pública da API do Stripe
```

```
STRIPE_WEBHOOK_SECRET_KEY = Key secreta do webhook do Stripe
```

É necessário instalar o [Stripe CLI](https://stripe.com/docs/stripe-cli?locale=pt-BR), logar no Stripe, rodar o script `stripe:listen` para obter a key e ouvir por eventos do Stripe, e então está tudo pronto para realizar pagamentos.

Para realizar um pagamento de teste no Stripe é necessário utilizar um cartão de crédito de teste. Você pode encontrar os cartões de teste [aqui](https://stripe.com/docs/testing#cards).

```
NEXTAUTH_SECRET = Secret do Next Auth
```

Pode ser qualquer string aleatória, é necessário apenas em produção, para ambiente de desenvolvimento é opcional.

## 💻 Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/joao-vitor-felix/traveling.git
```

Entre no diretório do projeto

```bash
  cd next-trip
```

Instale as dependências

```bash
  npm ou yarn install
```

É possível povoar o banco utilizando o `seed.ts` script em `src/app/lib`, para isso rode o comando

```
npx prisma db seed
```

Inicie o servidor

```bash
  yarn dev
```

## ⌛ Deployment

Este repositório utiliza continuous deployment com a Vercel. Ou seja, toda vez que um commit é feito, o build para produção é feito automaticamente.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
