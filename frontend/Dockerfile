FROM node:18.20.4-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env ./

RUN npm run build

EXPOSE 3000
