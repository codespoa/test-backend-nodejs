# List The Products


### Tech

- [Node.js]
- [MongoDB]
- [Docker]
- [Express]
- [Jest]
- [Husky]
- [Commit-Lint]

### Installation

Install all dependencies

```sh
$ cd test-backend-nodejs
$ yarn || npm install
```

Start the application container


```sh
$ docker-compose up -d --build
```

don't forget to complete the environment variables in the .env file, have an .env.example file, uncomment and fill in the variables

with your container running, now go to <a href="http://localhost:3333" target="_blank">http://localhost:3333</a>


# Documentation

## Routes
### Create User

(POST) <a href="http://localhost:3333/user" target="_blank">/user</a>
###### Data in body

name - Required | String
email - Required | String
password - Required | String

{
"name": "jubileu",
"email": "jubileu@teste.com",
"password": "123456"
}

### Login User

(POST) <a href="http://localhost:3333/session" target="_blank">/session</a>

###### Data in body

name - Required | String
password - Required | String

{
"email": "jubileu@teste.com",
"password": "123456"
}
return user and user token
### Create Product

(POST) <a href="http://localhost:3333/product" target="_blank">/product</a>
###### Data in body
title    			- Required | String
description  	- Required | String
price   			- Required | Number
category			- Required | String
status 				-  String (default: active) - (options: active, inactive, lacking)
code 					- Required | String

{
	"title": "Goku",
	"description": "E mais de 8000 mil",
	"price": 10000,
	"category": "O melhor",
	"code": "casaKame"
}
### List all Product

(GET) <a href="http://localhost:3333/product" target="_blank">/product</a>
return array of products
### List a product by code

(GET) <a href="http://localhost:3333/product/:code" target="_blank">/product/:code</a>
return one product
### List Products by search

(GET) <a href="http://localhost:3333/product/search" target="_blank">/product/search</a>
###### Data in query params

title 		| String
category 	| String
code 		 	| String

return array of products

### Delete Product

(DELETE) <a href="http://localhost:3333/product/:code" target="_blank">/product/:code</a>

