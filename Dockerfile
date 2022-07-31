FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ENV PORT=8080

ENV ENVIRONMENT=${ENVIRONMENT}

COPY . ./

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "start" ]
