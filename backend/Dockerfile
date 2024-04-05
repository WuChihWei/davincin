# FROM node:latest
##### light node.js
FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./

RUN npm install 
# RUN npm install -g pm2

COPY . .

EXPOSE 3000

#CMD ["pm2-runtime", "index.js"]
CMD ["node", "app.js"]