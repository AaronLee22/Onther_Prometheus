FROM node:latest
COPY . /app
WORKDIR /app

RUN npm i

CMD ["./node_modules/.bin/nodemon", "server"]
EXPOSE 8080