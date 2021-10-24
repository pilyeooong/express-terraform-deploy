FROM node:14.16.1

WORKDIR /usr/src/express-terraform-tutorial
COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ['node', 'index.js']
