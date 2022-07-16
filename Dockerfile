FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ENV PORT=80

COPY . ./

RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "start" ]
