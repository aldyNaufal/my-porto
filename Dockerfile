# Multi-stage build untuk optimasi ukuran image
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build aplikasi untuk production
RUN npm run build

# Production stage dengan Nginx
FROM nginx:alpine

# Copy built files ke Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config (opsional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]