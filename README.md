# UniGo - Plataforma de Caronas Universitárias

UniGo é uma plataforma web desenvolvida para conectar estudantes universitários que desejam compartilhar caronas, tornando o transporte mais acessível, seguro e econômico.

## Tecnologias Utilizadas

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/unigo.git
cd unigo
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse `http://localhost:3000` no seu navegador.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa a verificação de linting

## Estrutura do Projeto

```
unigo/
├── app/
│   ├── components/    # Componentes reutilizáveis
│   ├── login/        # Página de login
│   ├── register/     # Página de registro
│   ├── layout.tsx    # Layout principal
│   ├── page.tsx      # Página inicial
│   └── globals.css   # Estilos globais
├── public/           # Arquivos estáticos
└── package.json      # Dependências e scripts
```

## Deploy

Este projeto está configurado para deploy na Vercel. Para fazer o deploy:

1. Crie uma conta na [Vercel](https://vercel.com)
2. Conecte seu repositório
3. Clique em "Import Project"
4. Siga as instruções de deploy

## Licença

MIT
