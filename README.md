## Описание

Тестовое задание от I-Link:

- [x] Docker-изация с multi-stage (dev и prod)
- [x] CRUD: users и groups
- [x] ManyToMany: user имеют friends
- [x] ManyToMany: user имеют groups
- [x] PostgreSQL
- [x] PostgreSQL -> GraphQL
- [ ] MongoDB
- [ ] MongoDB -> GraphQL

## Учебная задача

Нужно сделать на [Nest.js](https://github.com/nestjs/nest) простейший круд.

Попробовать две бд: MongoDB и PostgreSQL, можно любые сущности.

Единственное усложнение: надо, чтобы у них была связь - многие ко многим.
Например, у нас есть две сущности: user и group.
У пользователя может быть много групп, и у групп может быть много пользователей.
Также у пользователей должно быть поле friends, в котором содержатся объекты user.

Нужно сначала сделать REST, а потом перенести тоже самое на GraphQL.

## Установка, запуск и тесты

Docker и Postman
