FROM node:19 AS builder

# LABEL stage=webbuilder

WORKDIR /build

COPY ./package.json .
COPY ./pnpm-lock.yaml .

RUN corepack enable
RUN npm i @antfu/ni -g
RUN ni

COPY . .

RUN nr build
# 打包后的产物在dist目录里

# FROM scratch
FROM nginx:latest

WORKDIR /app

COPY --from=builder /build/dist /usr/share/nginx/html/
COPY --from=builder /build/default.conf /etc/nginx/conf.d/

EXPOSE 80