FROM node:15.14.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3001

CMD [ "node", "server.js" ]