# URL Shortener API

This is a simple URL shortening service built with Node.js, Express, and MongoDB.

## Setup Instructions

1- Download Node.js
2- Download Insomnia for testing APIs
3- Install package for Node.js => npm init -y
4- Install package for Express => npm i express
5- create file .gitignore 
6- write express code in index.js and write "serve":    "node index.js" in scripts portion of package.json
7- npm run serve
8- Stop server using Ctrl+C
9- Install package nodemon => npm i nodemon -D
10- Go to package.json and write "dev": "nodemon     index.js"
11- Now run server again use => npm run dev
12- Set up MongoDb on atlas
13- Create Database here
14- username: , password: ,   
15- connect select drivers from node.js copy => npm     install mongodb and install package in vs code
16- install package => npm i mongoose 
17- connect mongoose by write code and paste connection     string from MongoDB in index.js
18- now DB is connected
19- create model folder and then create file     "short_url.model.js"  for     defining schema to our     DB
20- Install package => npm install shortid for The     shortid package is used to generate short, unique,     and non-sequential IDs (or codes) that are ideal for     creating short URLs. 
21- write schema in model file
22- write a post HTTP code and then create a folder in     Insomnia to test
