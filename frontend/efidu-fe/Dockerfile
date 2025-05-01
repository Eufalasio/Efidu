FROM node:22-alpine

# Copy root package.json and lockfile
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application in development mode
CMD ["npx", "expo", "start"]