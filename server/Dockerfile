FROM mhart/alpine-node:12.18.0

WORKDIR /server

COPY package*.json . ./

RUN npm install

RUN npm test

COPY . /server/

EXPOSE 3001

CMD ["npm", "start"]