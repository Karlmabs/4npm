# Use official Node.js image as base
FROM node:latest

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Nest.js app runs on
EXPOSE 3001

# Start Nest.js app
CMD ["npm", "run", "start:dev"]
