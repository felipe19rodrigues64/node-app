FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install
RUN npm install nodemon -g --save
RUN npm install mongoose --save

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]