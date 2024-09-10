# Use uma imagem oficial do Node.js como imagem base
FROM node:18-alpine AS build

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos do projeto
COPY . /usr/src/app

# Instale as dependências
RUN npm install -g @angular/cli
RUN npm install

# Definir NODE_OPTIONS para usar o openssl-legacy-provider
ENV NODE_OPTIONS=--openssl-legacy-provider

# Instalar Chromium e outras dependências para testes
RUN apk add --no-cache \
    chromium \
    udev \
    font-noto \
    ttf-freefont \
    && npm install -g karma-cli

# Defina variáveis de ambiente para usar o Chrome Headless
ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/bin/chromium-browser

# Executar os testes
# RUN ng test --watch=false --browsers=ChromeHeadlessNoSandbox

# Exponha a porta 4200 para o servidor Angular
EXPOSE 4200

# Comando para rodar a aplicação Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
