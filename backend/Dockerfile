# Use a Node.js image
FROM node:14

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the backend port
EXPOSE 3000

# Run the server
CMD ["node", "index.js"]
