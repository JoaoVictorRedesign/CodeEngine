const express = require("express")
const axios = require("axios")


console.log("Ola mundo")
  // Importa o módulo express

// Cria uma instância do express
const app = express();

// Define uma rota básica
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Define a porta em que o servidor irá escutar
PORT = 8080;

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});

  
