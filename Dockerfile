# Use official Nginx image
FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files to the Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside
EXPOSE 80
