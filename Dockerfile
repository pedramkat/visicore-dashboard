# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /app

COPY package*.json .

# Install dependencies (this will use the package.json from the project)
RUN npm install

# Copy all project files
COPY . .

# Expose port 3000 (React default port)
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev"]
