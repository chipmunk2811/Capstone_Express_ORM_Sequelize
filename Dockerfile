FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn install
 
COPY . .

EXPOSE 8080

# Start the application, 'npm start' or 'node src/index.js'
CMD ["node", "src/index.js"]

# docker build . -t img-node

# Chạy trên VPS đổi lại host: localhost thành ID của VPS

