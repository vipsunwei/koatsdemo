#!/bin/bash

echo '🔨 hello'

docker compose up --build -d

# docker images | grep none | xargs docker rmi

docker images

docker compose ps

echo '✅ bye!'