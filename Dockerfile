FROM node:alpine

RUN apk update && apk add git

WORKDIR /app

COPY ./package.json ./package-lock.json* ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

CMD ["npm", "start"]
