FROM node:12 as base

WORKDIR /usr/src/app
COPY package*.json ./
EXPOSE 8080

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . .

CMD [ "node", "server.js" ]
