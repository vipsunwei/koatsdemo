FROM node:19

WORKDIR /app

COPY ./package.json .
COPY ./pnpm-lock.yaml .

RUN corepack enable
RUN npm i @antfu/ni -g
RUN ni

COPY . .

EXPOSE 9000

CMD [ "nr", "start"]