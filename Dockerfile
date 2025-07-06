FROM node:18

WORKDIR /app

# Copiar solo package.json y package-lock.json para instalar dependencias primero
COPY ./src/package*.json ./

# Instalar TODAS las dependencias (no solo producción)
RUN npm install

# Copiar el resto del código
COPY ./src .

# Exponer el puerto que usará Express
EXPOSE 3000

# Iniciar en modo desarrollo
CMD ["sleep", "infinity"]

