FROM node:22-alpine

WORKDIR /app

# Copy root package.json and lockfile
COPY package*.json ./

RUN npm install -g expo-cli && npm install

EXPOSE 19000 19001 19002

# Copy the rest of the application code
COPY . .

# Command to run the application in development mode
CMD ["npx", "expo", "start"]