# Use a imagem oficial do Node.js na versão 18.16.0
FROM node:18.16.0-alpine

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta 8080
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["npm", "start"]
