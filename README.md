
# Microservice NestJs Challenge

Project referring to a technical test where the objective was to create two applications, each with its own database that exchange data to share information in their respective databases, using a high performance javascript framework, NestJs, MongoDB for data storage and RabbitMQ for transporting this data and managing queues.




## Requirements

 - [Node.js (version >= 12, except for v13)](https://nodejs.org/en/)
 - [Docker](https://docs.docker.com/get-docker/)

## How to run the application?

#### First steps
In the preferred folder, clone the project with the command:

```http
  git clone https://github.com/guilhermeramos0603/nest-microservice.git
```
Go to the cloned folder:
```http
  cd .\nest-microservice\ 
``` 
After that, run the docker command to install the RabbitMQ image:
```http
  docker-compose up 
```
Open another terminal, each terminal must be in an API

### Terminal 1
```http
  cd .\api-a\ 
```
### Terminal 2
```http
  cd .\api-b\ 
```
Run the npm command to install all packages and dependencies for each api
```http
  npm install 
```
Create an .env file at the root of each api and configure its environment variables, which should contain:
```http
    MONGODB_CONNECTION_URL='CONFIGURE YOUR LOCAL MONGODB BANK HERE'
    QUEUE_NAME='CONFIGURE THE RABBIT QUEUE NAME HERE (REMEMBER IT MUST BE THE SAME FOR BOTH APIs)'
    AMQP_SERVER=amqp://dev:senhadev@localhost:5672(WE CONFIGURE THIS HOST IN DOCKER COMPOSE)
```
Run the applications together with the command:
```http
  npm run start:dev
```
If everything goes as planned, it will return in the log:

### API-A
```http
  Connected to RabbitMQ
```
### API-B
```http
Connected to Queue.
Product consumer started
```

Open the API Client of your choice and configure the route:

### API-A
The request will search the database and if not found, it will create a new product and create a connection with RabbitMQ, create a new Queue and insert the object in the Queue to transport it to the other API. API B has a consumer that is run initially, it will automatically find the new message in the queue carrying the object, it will set the acknowledgment to show the rabbit that that message has already been read, it will pass the object to a function that will look for it in the database and if so does not find the product, it will create a new one.
```http
  POST http://localhost:2000/products
```
It must contain a JSON body:
| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Required**. Product name|
| `description` | `string` | Product description|
| `value` | `number` | **Required**. Product value|

### API-B
The request will search the database for all products based on a name passed in the parameter and will return paged.
```http
  GET http://localhost:2001/products/:name
```
## 🚀 About me
Full-Stack developer, Software Engineer profecionally ambicious and seeking to delve into back end and its technologies.

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://guilhermesilvanoderamos.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guilherme-silvano-ramos/)

