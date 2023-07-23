=> src/controllers/: Nesta pasta, são definidos os controladores que recebem as requisições HTTP e, em seguida, interagem com os serviços adequados para manipular as regras de negócio. Os controladores podem ser vistos como uma camada intermediária entre as rotas e as regras de negócio, facilitando o tratamento dos dados recebidos e enviados pelas rotas.

=> src/services/: Nesta pasta, você encontra os serviços que contêm a lógica de negócio da aplicação. É aqui que as regras de negócio são definidas e implementadas. Os serviços são responsáveis por executar operações mais complexas, como manipular dados, aplicar regras de validação e acionar o ORM para interagir com o banco de dados.

=> src/models/: Essa pasta abriga as definições dos modelos do banco de dados usando o ORM. Cada modelo representa uma tabela do banco de dados e é mapeado para uma classe ou objeto em JavaScript.

=> src/routes/: As rotas da API são definidas nesta pasta. As rotas mapeiam as URLs recebidas para os controladores correspondentes, onde as regras de negócio são invocadas.