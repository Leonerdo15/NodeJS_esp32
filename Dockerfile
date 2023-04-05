FROM node:19

WORKDIR /node/esp32-api

COPY package*.json ./

RUN npm install -g npm@9.3.0
RUN npm upgrade

RUN apt update && apt upgrade -y
RUN apt install -y apt-utils && apt install -y nano

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
