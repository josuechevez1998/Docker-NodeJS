# Paso 1
Ejecutar: `cp example.env .en`

# Paso 2
Ejecutar: `docker compose build`

# Paso 3
Ejecutar: `docker compose up -d`

# Paso 4
Ejecutar: `docker ps` para listar los contenedores

# Paso 5
Ejecutar: `docker exec -it <nombre_contenedor> bash`

# Paso 6
Ejecutar: `ls -lia` dentro de tu contenedor para listar los directorios y
ficheros

## Notas
- Revisar package.json para ver las dependencias. 

- Si abres src encontraras un .sh para poder instalar dependencias al iniciar por primera ves tu proyecto (RECOMENDADO)