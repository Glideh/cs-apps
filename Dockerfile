FROM node:8

WORKDIR /usr/src/app

COPY ./app/package*.json ./
RUN npm install

COPY ./app/* /usr/src/app/

CMD [ "npm", "start" ]
