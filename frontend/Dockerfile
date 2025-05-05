FROM node:22-alpine

# Create app directory
WORKDIR /app

# Install app dependencies (if needed, copy package.json first)
COPY . .

# Expose port
EXPOSE 5173

CMD [ "node", "index.js" ]

