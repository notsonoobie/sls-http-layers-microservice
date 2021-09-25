# Serverless - Microservices

- #### Auth Service
  - #### Registration API [POST]
  - #### Login API [POST]
  - #### View Profile API [GET]
- #### Todo Service
  - #### Get Todo By ID API [GET]
  - #### Get Todos API [POST]
  - #### Create Todo API [POST]
  - #### Update Todo API [POST]
  - #### Delete Todo API [DELETE]

---

#### Requirements

- **Node.JS (12+)**
- **NPM**
- **AWS CLI**
- **Serverless**
- **make**
- **Mongo DB Server**

---

#### Scripts

1. Base Project Setup

```sh
npm run setup:dev
```

2. Start Microservice

```sh
npm run start:microservice
```

3. Start Todo Service

```sh
cd microservice/ && make runtodo
```

4. Start Auth Service

```sh
cd microservice/ && make runauth
```

5. Dev Deployment

```sh
npm run deploy:dev
```

6. Production Deployment

```sh
npm run deploy:prod
```

---

**_After Deployment_**

![image](https://user-images.githubusercontent.com/54475009/134776693-a188bc24-235e-482b-b593-5ab7ea001459.png)
