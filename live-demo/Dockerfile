# Use the official NGINX image as the base image
FROM nginx:alpine as production

# Set working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Copy the built Angular app from the local directory to the container
COPY dist/teste/browser /usr/share/nginx/html

# Copy the built Angular app from the local directory to the container
COPY cripto /usr/share/nginx/html/cripto

# Copy the custom NGINX configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy custom MIME types if needed
COPY mime.types /etc/nginx/mime.types

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
