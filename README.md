<div align=center>
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=250&section=header&text=💬Chat%20API%20서버💬&fontSize=45" />
</br>
<b id=content>사용자에게 채팅 서비스를 제공합니다</b>
</br></br>
<h3>📚 STACKS</h3>
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/TypeORM-262627?style=for-the-badge&logo=TypeORM&logoColor=white">
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white">
<img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white">
</div>

## 설치환경

- Ubuntu 22.04.1 LTS
- MySQL v8.0.30
- Node.js v16.17.1 (lts version)
- npm v8.15.0

## 설치

```bash
## 서버 설치
$ npm install

## MySQL 데이터베이스 생성
$ create database [사용할 데이터베이스 이름]
```

## 환경 변수 설정

```bash
## .env 안에 들어갈 내용
MYSQL_PASSWORD= MySQL 비밀번호
MYSQL_NAME= MySQL 데이터베이스 이름

GOOGLE_CLIENT_ID= 구글 클라이언트 ID
GOOGLE_CLIENT_PASSWORD= 구글 클라이언트 비밀번호
```

## 앱 실행

```bash
# development
$ npm run start
```

## 테스트

```bash
# Unit tests
$ npm run test
```

### Unit TEST

**테스트 커버리지**

Users Controller

- 구글 소셜 로그인 컨트롤러 확인
- 컨트롤러의 함수 확인
- 소셜 로그인 서비스의 함수(login) 호출 확인
- 로그인 기능 확인

<img src="https://user-images.githubusercontent.com/92367032/197419386-5ac9098a-bf57-4352-bab0-b568e1ff3b0b.png"/>

Users Service

- 구글 소셜 로그인 서비스 확인
- 서비스의 함수 확인
- 레포지토리의 함수(create) 호출 확인
- 로그인 기능 확인

<img src="https://user-images.githubusercontent.com/92367032/197419572-a8f50ff9-449f-4b66-8913-63148cf4ea1f.png"/>

Users Repository

- 구글 소셜 로그인 레포지토리 확인
- 레포지토리의 함수 확인
- 유저 생성 기능 확인

<img src="https://user-images.githubusercontent.com/92367032/197419555-5548f8cb-fa57-48bf-aa9e-bf04dc37a36d.png"/>

## 요구사항

### A. 유저관리

**구글 소셜 로그인**

```
➡️ 이메일을 ID로 사용합니다.
```

## DB 모델링

<img src="https://user-images.githubusercontent.com/92367032/197419964-2cb41465-075a-4794-9053-7ea3ea63cf81.png"/>

## API 문서

### 구글 소셜 로그인

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

- init : 초기화
- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
- refactor : 코드 리팩터링
- test : 테스트 코드, 리팩터링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋
