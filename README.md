## Запуск проекта

```bash
git clone https://github.com/kikimorii/teachercard-next.git
cd teachercard-next
npm i
npm run build
npm start
```

## Общая структура входящего JSON-файла

```json
{
  "name": { ... },
  "organization": "string", // Организация
  "title": "string", // Должность
  "location": "string", // Аудитория
  "photo": "string (url)", // Фотография
  "url": "string (url)", // Ссылка на сайт
  "telephones": [ ... ], // номера телефонов
  "emails": [ ... ], // почты
  "socials": [ ... ] // социальные сети
}
```

## Описание полей

### `name` (object, обязательное)

Информация о ФИО.

```json
"name": {
  "lastname": "string", // фамилия
  "firstname": "string", // имя
  "additional": "string" // отчество (необязательное)
}
```

### `organization` (string, необязательное)

Название организации.

```json
"organization": "string"
```

### `title` (string, необязательное)

Должность сотрудника.

```json
"title": "string"
```

### `photo` (string URL, необязательное)

URL фотографии сотрудника, разрешенный домены [https://pro.guap.ru/\*\*](https://pro.guap.ru/) и [https://fs.guap.ru/\*\*](https://fs.guap.ru/)

```json
"photo": "string"
```

### `url` (string URL, необязательное)

Личный сайт, ссылка на ЛК.

```json
"url": "string"
```

### Контактные данные

#### `telephones` (array, необязательное)

Список телефонных номеров. Можно указывать любые типы, поддерживаемые форматом VCard (WORK, HOME, MOBILE и т.д.). Приоритетным в компоненте `ContactsLinks` под фотографией сотрудника всегда будет WORK, все остальные будут отображаться в .vcf файле как дополнительные

```json
"telephones": [
  {
    "type": "string", // указывать капсом в соответствии с форматом vcard
    "number": "string" // необходимо указывать номер полностью без пропуска кода
  }
]
```

#### `emails` (array, необязательное)

Список email-адресов. Можно указывать любые типы, поддерживаемые форматом VCard (WORK, HOME и т.д.). Приоритетным в компоненте `ContactsLinks` под фотографией сотрудника всегда будет WORK, все остальные будут отображаться в .vcf файле как дополнительные

```json
"emails": [
  {
    "type": "string", // указывать капсом в соответствии с форматом vcard
    "address": "string"
  }
]
```

### Социальные сети и мессенджеры

### `socials` (array, необязательное)

Список социальных сетей / мессенджеров. Данное поле реализовано собственноручно, поэтому имеет ограниченный функционал. Поддерживаются только: telegram, VK, Max и OK. В качестве type необходимо указать соцсеть в любом регистре, но строго в формате: `telegram`, `vk`, `max`, `ok`.

```json
"socials": [
  {
    "type": "string", // telegram, max, vk, ok
    "userID": "string"
  }
]
```

## Пример JSON файла

```json
{
	"name": {
		"lastname": "Иванов",
		"firstname": "Иван",
		"additional": "Иванович"
	},
	"organization": "ГУАП",
	"title": "Старший преподаватель",
	"location": "ауд. 314",
	"photo": "https://pro.guap.ru/images/staff/ivanov.jpg",
	"url": "https://pro.guap.ru/profile/ivanov",
	"telephones": [
		{
			"type": "WORK",
			"number": "+78125551234"
		},
		{
			"type": "MOBILE",
			"number": "+79215559876"
		}
	],
	"emails": [
		{
			"type": "WORK",
			"address": "ivanov@guap.ru"
		},
		{
			"type": "HOME",
			"address": "ivanov.home@mail.ru"
		}
	],
	"socials": [
		{
			"type": "telegram",
			"userID": "ivanov_telegram"
		},
		{
			"type": "vk",
			"userID": "ivanov_vk"
		}
	]
}
```
