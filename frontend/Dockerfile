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

# Expose port 3000 for the React dev server
EXPOSE 3000

# Run the development server
CMD ["npm", "start"]
