FROM node:18-alpine

WORKDIR /servidor

COPY package*.json 

RUN npm run install

COPY . .

EXPOSE 4000

CMD ["npm" "start"]