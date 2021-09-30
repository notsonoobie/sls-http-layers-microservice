# Serverless - Microservices

-   #### Auth Service
    -   #### Registration API [POST]
    -   #### Login API [POST]
    -   #### View Profile API [GET]
-   #### Todo Service
    -   #### Get Todo By ID API [GET]
    -   #### Get Todos API [POST]
    -   #### Create Todo API [POST]
    -   #### Update Todo API [POST]
    -   #### Delete Todo API [DELETE]

---

#### Requirements

-   **Node.JS (12+)**
-   **NPM**
-   **AWS CLI**
-   **Serverless**
-   **make**
-   **Mongo DB Server**

---

#### Scripts

1. Base Project Setup

```sh
npm run setup
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

5. Dev Lamdas Deployment

```sh
npm run deploy:lamdas:dev
```

6. Production Lamdas Deployment

```sh
npm run deploy:lamdas:prod
```

7. Dev Layers Deployment

```sh
npm run deploy:layers:dev
```

8. Production Layers Deployment

```sh
npm run deploy:layers:prod
```

9. Build Swagger.JSON

```sh
npm run build:swagger
```

10. Start Swagger UI (Port - 3000 HTTP)

```sh
npm run start:swagger
```

---

**_After Deployment_**

1. STACK (dev + prod) -

![image](https://user-images.githubusercontent.com/54475009/134966211-8e26e83e-b024-4125-b8f9-e84381eb976b.png)

2. FUNCTIONS (dev + prod) -

![image](https://user-images.githubusercontent.com/54475009/134966379-1dab85ad-193a-48ce-bbfd-181e80749a87.png)

![image](https://user-images.githubusercontent.com/54475009/134966980-7fc79181-bbea-4d1e-ba7b-08fb2fc3cfac.png)

3. Layer -

![image](https://user-images.githubusercontent.com/54475009/134966587-91c4ae41-8076-4cff-bcb6-3468ecb6cda3.png)

---
