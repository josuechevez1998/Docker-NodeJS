FROM node:18

WORKDIR /app

# Copiar solo package.json y package-lock.json para instalar dependencias primero
COPY ./package*.json ./

# Instalar TODAS las dependencias (no solo producción)
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto que usará Express
EXPOSE 3000

