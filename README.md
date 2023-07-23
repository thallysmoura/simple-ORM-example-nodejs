
#  👉🏻 Exemplo simples de uso de ORM sequelize com nodejs




## Estrutura de pastas

**src/controllers/:** Nesta pasta, os controladores recebem requisições HTTP e interagem com os serviços para manipular as regras de negócio, agindo como uma camada intermediária entre rotas e regras de negócio, facilitando o tratamento de dados.

**src/services/:** Nesta pasta, os serviços contêm a lógica de negócio da aplicação, onde as regras são definidas e implementadas. Eles são responsáveis por operações complexas, como manipular dados, aplicar validações e interagir com o banco de dados através do ORM.

**src/models/:** Essa pasta abriga as definições dos modelos do banco de dados usando o ORM. Cada modelo representa uma tabela do banco de dados e é mapeado para uma classe ou objeto em JavaScript.

**src/routes/:** As rotas da API são definidas nesta pasta. As rotas mapeiam as URLs recebidas para os controladores correspondentes, onde as regras de negócio são invocadas.


## Referência

 - [Sequelize](https://sequelize.org/docs/v6/core-concepts/model-basics/)

## Funcionalidades

A API criada anteriormente é um exemplo simples de uma aplicação Node.js que utiliza o MySQL como banco de dados e o ORM Sequelize para interagir com o banco de dados. A funcionalidade principal da API é permitir a criação e busca de usuários.

A seguir, uma explicação detalhada da funcionalidade da API:

1. **Criação de Usuário**:
   - Endpoint: `POST /users`
   - Descrição: Este endpoint permite a criação de um novo usuário na aplicação.
   - Funcionamento: O cliente (frontend ou outra API) faz uma requisição HTTP POST para o endpoint `/users` com os dados do novo usuário (nome e email) no corpo da requisição em formato JSON.
   - Ação: O controlador `userController.js` recebe a requisição e chama o serviço `userService.js` para criar o novo usuário no banco de dados.
   - Lógica de negócio: O serviço `userService.js` recebe os dados do usuário, aplica as regras de negócio necessárias (por exemplo, validação de campos obrigatórios) e usa o modelo `User` do Sequelize para criar um novo registro na tabela `Users` do banco de dados.
   - Resposta: Após a criação bem-sucedida, o usuário recém-criado é retornado como resposta da API no corpo da resposta em formato JSON.

2. **Busca de Usuário pelo ID**:
   - Endpoint: `GET /users/:id`
   - Descrição: Este endpoint permite buscar um usuário específico pelo seu ID.
   - Funcionamento: O cliente faz uma requisição HTTP GET para o endpoint `/users/:id`, onde `:id` é o ID do usuário que se deseja buscar.
   - Ação: O controlador `userController.js` recebe a requisição e chama o serviço `userService.js` para buscar o usuário pelo ID no banco de dados.
   - Lógica de negócio: O serviço `userService.js` recebe o ID do usuário, usa o modelo `User` do Sequelize para fazer a busca na tabela `Users` do banco de dados e retorna o usuário encontrado.
   - Resposta: Se o usuário com o ID fornecido for encontrado, ele é retornado como resposta da API no corpo da resposta em formato JSON. Caso contrário, a API retorna um código de status 404 e uma mensagem indicando que o usuário não foi encontrado.



