FROM node:18-slim as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ENV PORT=8080

ENV ENVIRONMENT=${ENVIRONMENT}

COPY . ./

RUN npm run build

FROM node:18-slim as runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/.env* ./
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/node_modules ./node_modules

RUN npm install -g dotenv-cli

ENV PORT=8080

ENV ENVIRONMENT=${ENVIRONMENT}

EXPOSE 8080

CMD ["sh", "-c", "npm run start$BUILD_TYPE"]
