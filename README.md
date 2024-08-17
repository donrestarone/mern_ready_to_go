# MERN stack ready to go

## install system dependencies
setup nodemon globally

``` bash
npm install -g nodemon
```

## environment variables
ensure your mongoDB connection information is set in your server environment 

``` bash
export MONGODB_USER_NAME="foo"
export MONGODB_USER_PASSWORD="bar"
export MONGODB_DATABASE_ENDPOINT="foo.mongodb.net"
export MONGODB_DATABASE_NAME="foo-bar"
```
ensure your server endpoint is set in your client environment

``` bash
export VITE_SERVER_ENDPOINT="http://localhost:3333"
```

## Quickstart
``` bash
cd mern_ready_to_go
npm install 
npm start
```

### Server setup
install server dependencies 

``` bash
cd server
npm install
```

### Client setup
install client dependencies
``` bash
  cd client
  npm install
  
```

## start server (in development mode)

``` bash
cd server
npm run dev
```

## start client (in development mode)

``` bash
cd client
npm run dev
```

## ready? set? Go!

* visit http://localhost:3333/ to see the server in action
* visit http://localhost:3333/ to see the client in action

## included routes

* '/' => homepage
* '/users' => users resource

## useful scripts

add additional dependencies to the server/client 

``` bash
npm install express -w server
```

## research

* Setup mongo DB: https://cloud.mongodb.com/
* Initialize new node.js project: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#adding_dependencies
* Hot code reloading: https://stackoverflow.com/questions/1972242/how-to-auto-reload-files-in-node-js
* Setting up mongoose: https://medium.com/@akhilanand.ak01/setup-a-basic-node-js-server-using-expressjs-mongoose-65f2a6dbfd58
* Mongoose schemaless: https://stackoverflow.com/questions/30812961/saving-unstructured-data-in-mongoose
* MERN stack folder structure and organization: https://medium.com/@gecno/node-js-express-mongodb-and-mongoose-understanding-the-mvc-model-678952631ea3
* Packaging frontend and backend in a monorepo: https://www.dusanstam.com/posts/react-express-monorepo
