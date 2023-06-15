
const http = require("http");
const {getCharById} = require('./CONTROLLERS/getCharById')



http.createServer((req, res) => {
    // const {url} = req
    // if(url.includes('/rickandmorty/character/')){

    //     let id = url.split('/').pop();
    //     let character = data.find((char) => char.id === parseInt(id));
        
    //  if(character){
    //     res.setHeader('Content-Type', 'application/json');
    //     return res.end(JSON.stringify(character)); 
    //   } 
    // }
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('rickandmorty/character/')){
      const id = req.url.split('/').pop();
      getCharById(res, parseInt(id));
    }
}).listen(3001, 'localhost')