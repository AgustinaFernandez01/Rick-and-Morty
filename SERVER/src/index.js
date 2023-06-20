
// const http = require("http");
// const {getCharById} = require('./CONTROLLERS/getCharById')

// http.createServer((req, res) => {
    // const {url} = req
    // if(url.includes('/rickandmorty/character/')){

    //     let id = url.split('/').pop();
    //     let character = data.find((char) => char.id === parseInt(id));
        
    //  if(character){
    //     res.setHeader('Content-Type', 'application/json');
    //     return res.end(JSON.stringify(character)); 
    //   } 
    // }
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes('rickandmorty/character/')){
//       const id = req.url.split('/').pop();
//       getCharById(res, parseInt(id));
//     }
// }).listen(3001, 'localhost')


const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./ROUTES/index')

server.listen(PORT, () =>{
  console.log(`server raised in port: ${PORT}`)
})

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json())
server.use('/rickandmorty',router);