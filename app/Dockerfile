# STAGE: DEVELOPMENT
FROM node:alpine AS dev

# создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./
RUN npm install --only=dev

# копируем исходный код
COPY . .

# компилируем
RUN npm run build

# STAGE: PRODUCTION
FROM node:alpine AS prod

ARG NODE_ENV=prod
ENV NODE_ENV=${NODE_ENV}

# создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./
RUN npm ci --only=prod

# копируем исходный код
COPY . .

# копируем компилированный код
COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]