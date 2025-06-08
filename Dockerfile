# Prosty Dockerfile do wdrożenia aplikacji
FROM node:20

WORKDIR /app

COPY server ./server
COPY web ./web
COPY package.json ./
COPY package*.json ./



RUN cd server && npm install
RUN cd ../web && npm install && npm run build

EXPOSE 3000

CMD ["node", "server/index.js"]
