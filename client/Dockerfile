FROM mhart/alpine-node:12.18.0

WORKDIR /client

COPY package.json . ./

RUN npm install

COPY . /client/

EXPOSE 3000

CMD ["npm", "start"]