# 1. 'alpine' is a very small Linux version
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the dependency files
COPY package*.json ./

# 4. Install all dependencies
RUN npm install

# 5. Copy the rest of the source code
COPY . .

# 6. Expose the port your application uses
# Hono/Node-server usually defaults to port 3000.
EXPOSE 3000

# 7. Start the app in 'dev' mode
CMD [ "npm", "run", "dev" ]
