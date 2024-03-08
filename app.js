const express = require("express")
const axios = require("axios")


console.log("Hello World")
  // Importa o módulo express

// Cria uma instância do express
function main(args) {
  const body = {
    args,
    env: process.env,
  };

  console.log(`Return body: ${JSON.stringify(body, null, 2)}`);

  return {
    statusCode: 200,
    headers: { 
      'Content-Type': 'application/json', 
    },
    body,
  };
}
  
module.exports.main = main;


  
