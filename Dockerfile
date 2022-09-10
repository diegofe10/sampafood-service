FROM node:16-alpine

RUN mkdir -p /prod/service/app

WORKDIR /prod/service/app

COPY .  ./

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]