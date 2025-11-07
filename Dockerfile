# 1. 'alpine' es una versión de Linux muy pequeña
FROM node:20-alpine

# 2. Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar los archivos de dependencias
COPY package*.json ./

# 4. Instalar todas las dependencias
RUN npm install

# 5. Copiar el resto del código fuente
COPY . .

# 6. Exponer el puerto que usa tu aplicación
# Hono/Node-server suele usar el puerto 3000 por defecto.
EXPOSE 3000

# 7. Iniciar la app en modo 'dev'
CMD [ "npm", "run", "dev" ]
