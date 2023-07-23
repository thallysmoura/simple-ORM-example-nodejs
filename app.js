// app.js
const express               = require('express');
const bodyParser            = require('body-parser');
const sequelize             = require('./db');
const productRoutes         = require('./routes/products');

const app = express();
app.use(bodyParser.json());

// Sincroniza o modelo com o banco de dados e inicia o servidor
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});

// Rotas para as operações CRUD do produto
app.use('/api/products', productRoutes);

// Rota padrão para outras requisições
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});
