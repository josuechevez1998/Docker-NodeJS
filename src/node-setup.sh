#!/usr/bin/env bash

NODE_VERSION="18"

# Verifica si ya existe package.json
if [ -f package.json ]; then
  echo "✅ Ya existe package.json. Omitiendo npm init."
else
  echo "📦 Creando package.json..."
  sudo docker run --rm -it \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd)":/app \
    -w /app \
    node:${NODE_VERSION} \
    npm init -y
fi

echo "📦 Instalando dependencias: express, dotenv, mongoose..."

sudo docker run --rm -it \
  -u "$(id -u):$(id -g)" \
  -v "$(pwd)":/app \
  -w /app \
  node:${NODE_VERSION} \
  npm install express dotenv mongoose \
  npm install --save-dev nodemon

echo "✅ Proyecto Node.js listo con dependencias instaladas."
