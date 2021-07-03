FROM node:lts-alpine3.13
WORKDIR /usr/share/nginx/socket_server
COPY . .
RUN npm install
CMD ["npm", "start"]