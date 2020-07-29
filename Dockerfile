FROM node:10-alpine

#create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#install web dependency
COPY package.json .

RUN npm install


#Bundle app source
COPY . .

EXPOSE 5000

CMD ["node","server.js"]