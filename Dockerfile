# Use uma imagem base com Node.js
FROM node:21.7.3

# Crie e defina o diretório de trabalho
WORKDIR /app

# Instale pnpm globalmente
RUN npm install -g pnpm@8.6.12

# Copie os arquivos de configuração do projeto e instale as dependências
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copie o restante do código-fonte
COPY . .

# Exponha a porta que o servidor do Single SPA vai usar
EXPOSE 9000

# Comando para iniciar o servidor Single SPA
CMD ["pnpm", "start"]
