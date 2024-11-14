FROM node:18-alpine as build-image

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV PORT=80

CMD [ "npm", "start" ]