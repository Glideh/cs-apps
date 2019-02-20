FROM node:10.15.1-alpine

WORKDIR /usr/src/app

COPY ./app/package*.json ./
RUN npm install

COPY ./app/* ./

CMD [ "npm", "start" ]
