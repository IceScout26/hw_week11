FROM node

WORKDIR /app

# aligned to context path
COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]