# API Simples de CRUD de Livros

Esta é uma API Node simples de CRUD de livros desenvolvida em TypeScript, utilizando Express e banco de dados no-SQL (Firebase Realtime Database).
Desenvolvida com o objetivo de praticar aprendizados sobre construção e consumo de APIs, bancos de dados não relacionais, e programação em TypeScript

## Recursos

- Listar todos os livros
- Obter detalhes de um livro específico
- Adicionar um novo livro
- Atualizar as informações de um livro existente
- Remover um livro

## Pré-requisitos

Antes de executar a API, certifique-se de ter o seguinte configurado em sua máquina:

- Node.js (https://nodejs.org)
- Conta no Firebase e projeto criado (https://firebase.google.com)

## Instalação

1. Clone o repositório: `git clone https://github.com/Raul-Araujo-Machado/API-simples.git`
2. Navegue até o diretório do projeto: `cd API-simples`
3. Instale as dependências: `npm install`

## Configuração do Firebase

1. Acesse o Console do Firebase (https://console.firebase.google.com) e crie um novo projeto.
2. Copie as credenciais do projeto Firebase (chave de API, ID do projeto etc.) necessárias para acessar o Firebase Realtime Database.
3. Cole as credenciais na variável `firebaseConfig` presente no arquivo `serviceBook.ts` na pasta `service`.

## Uso

1. Inicie o servidor local: `npx ts-node index.ts`
2. A API estará disponível em `http://localhost:3000`

## Rotas

- `GET /books`: Retorna todos os livros cadastrados.
- `GET /books/:id`: Retorna os detalhes de um livro específico com base no ID.
- `POST /books`: Adiciona um novo livro. Os dados devem ser enviados no corpo da requisição.
- `PUT /books/:id`: Atualiza as informações de um livro existente com base no ID. Os dados atualizados devem ser enviados no corpo da requisição.
- `DELETE /books/:id`: Remove um livro específico com base no ID.

## Contribuição

Se desejar contribuir para o projeto, siga estas etapas:

1. Faça um fork do projeto.
2. Crie uma branch para suas alterações: `git checkout -b minha-branch`.
3. Faça commit das alterações: `git commit -m 'Minha contribuição'`.
4. Faça push para o repositório remoto: `git push origin minha-branch`.
5. Abra um pull request descrevendo suas alterações.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Em caso de dúvidas ou problemas, você pode entrar em contato comigo (mailto:raularaujomachado@gmail.com).

Em caso de dúvidas ou problemas, você pode entrar em contato comigo por:

- LinkedIn: [/in/raularaujomachado/](https://www.linkedin.com/in/raularaujomachado/)
- Email: [raularaujomachado@gmail.com](mailto:raularaujomachado@gmail.com)
- Whatsapp: [Raul Araujo 😎](https://wa.me/qr/L3APR62N27ABC1 )
