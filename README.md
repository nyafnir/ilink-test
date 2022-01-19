## Описание

Тестовое задание от I-Link

## Учебная задача

Нужно сделать на [Nest.js](https://github.com/nestjs/nest) простейший круд.

Попробовать две бд: MongoDB и PostgreSQL, можно любые сущности. 

Единственное усложнение: надо, чтобы у них была связь - многие ко многим. 
Например, у нас есть две сущности: user и group.
У пользователя может быть много групп, и у групп может быть много пользователей. 
Также у пользователей должно быть поле friends, в котором содержатся объекты user.

Нужно сначала сделать REST, а потом перенести тоже самое на GraphQL.

## Установка

```bash
$ npm ci
```

## Запуск приложения

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Тестирование

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
