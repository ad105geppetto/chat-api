<div align=center>
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=250&section=header&text=๐ฌChat%20API%20์๋ฒ๐ฌ&fontSize=45" />
</br>
<b id=content>์ฌ์ฉ์์๊ฒ ์ฑํ ์๋น์ค๋ฅผ ์ ๊ณตํฉ๋๋ค</b>
</br></br>
<h3>๐ STACKS</h3>
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/TypeORM-262627?style=for-the-badge&logo=TypeORM&logoColor=white">
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white">
<img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white">
</div>

## ์ค์นํ๊ฒฝ

- Ubuntu 22.04.1 LTS
- MySQL v8.0.30
- Node.js v16.17.1 (lts version)
- npm v8.15.0

## ์ค์น

```bash
## ์๋ฒ ์ค์น
$ npm install

## MySQL ๋ฐ์ดํฐ๋ฒ ์ด์ค ์์ฑ
$ create database [์ฌ์ฉํ  ๋ฐ์ดํฐ๋ฒ ์ด์ค ์ด๋ฆ]
```

## ํ๊ฒฝ ๋ณ์ ์ค์ 

```bash
## .env ์์ ๋ค์ด๊ฐ ๋ด์ฉ
MYSQL_PASSWORD= MySQL ๋น๋ฐ๋ฒํธ
MYSQL_NAME= MySQL ๋ฐ์ดํฐ๋ฒ ์ด์ค ์ด๋ฆ

GOOGLE_CLIENT_ID= ๊ตฌ๊ธ ํด๋ผ์ด์ธํธ ID
GOOGLE_CLIENT_PASSWORD= ๊ตฌ๊ธ ํด๋ผ์ด์ธํธ ๋น๋ฐ๋ฒํธ
```

## ์ฑ ์คํ

```bash
# development
$ npm run start
```

## ํ์คํธ

```bash
# Unit tests
$ npm run test
```

### Unit TEST

**ํ์คํธ ์ปค๋ฒ๋ฆฌ์ง**

Users Controller

- ๊ตฌ๊ธ ์์ ๋ก๊ทธ์ธ ์ปจํธ๋กค๋ฌ ํ์ธ
- ์ปจํธ๋กค๋ฌ์ ํจ์ ํ์ธ
- ์์ ๋ก๊ทธ์ธ ์๋น์ค์ ํจ์(login) ํธ์ถ ํ์ธ
- ๋ก๊ทธ์ธ ๊ธฐ๋ฅ ํ์ธ

<img src="https://user-images.githubusercontent.com/92367032/197419386-5ac9098a-bf57-4352-bab0-b568e1ff3b0b.png"/>

Users Service

- ๊ตฌ๊ธ ์์ ๋ก๊ทธ์ธ ์๋น์ค ํ์ธ
- ์๋น์ค์ ํจ์ ํ์ธ
- ๋ ํฌ์งํ ๋ฆฌ์ ํจ์(create) ํธ์ถ ํ์ธ
- ๋ก๊ทธ์ธ ๊ธฐ๋ฅ ํ์ธ

<img src="https://user-images.githubusercontent.com/92367032/197419572-a8f50ff9-449f-4b66-8913-63148cf4ea1f.png"/>

Users Repository

- ๊ตฌ๊ธ ์์ ๋ก๊ทธ์ธ ๋ ํฌ์งํ ๋ฆฌ ํ์ธ
- ๋ ํฌ์งํ ๋ฆฌ์ ํจ์ ํ์ธ
- ์ ์  ์์ฑ ๊ธฐ๋ฅ ํ์ธ

<img src="https://user-images.githubusercontent.com/92367032/197419555-5548f8cb-fa57-48bf-aa9e-bf04dc37a36d.png"/>

## ์๊ตฌ์ฌํญ

### A. ์ ์ ๊ด๋ฆฌ

**๊ตฌ๊ธ ์์ ๋ก๊ทธ์ธ**

```
โก๏ธ ์ด๋ฉ์ผ์ ID๋ก ์ฌ์ฉํฉ๋๋ค.
```

## DB ๋ชจ๋ธ๋ง

<img src="https://user-images.githubusercontent.com/92367032/197419964-2cb41465-075a-4794-9053-7ea3ea63cf81.png"/>

## API ๋ฌธ์

### ๊ตฌ๊ธ ์์ ๋ก๊ทธ์ธ

**request**

```http
POST /users  HTTP/1.1
Host: localhost:4000
Content-type: Application/JSON

{
   "authorizationCode": "authorizationCode",
}
```

**response**

```http
HTTP/1.1 201  Created
Content-type: Application/JSON

{
  email: "LeeCoding@gmail.com",
  accessToken: "accessToken"
}
```

## Commit Convention

- init : ์ด๊ธฐํ
- feat : ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ
- fix : ๋ฒ๊ทธ ์์ 
- docs : ๋ฌธ์ ์์ 
- style : ์ฝ๋ ํฌ๋งทํ, ์ธ๋ฏธ์ฝ๋ก  ๋๋ฝ, ์ฝ๋ ๋ณ๊ฒฝ์ด ์๋ ๊ฒฝ์ฐ, linting
- refactor : ์ฝ๋ ๋ฆฌํฉํฐ๋ง
- test : ํ์คํธ ์ฝ๋, ๋ฆฌํฉํฐ๋ง ํ์คํธ ์ฝ๋ ์ถ๊ฐ
- chore : ๋น๋ ์๋ฌด ์์ , ํจํค์ง ๋งค๋์  ์์ , ๊ทธ ์ธ ์์ํ ์์ ์ ๋ํ ์ปค๋ฐ
