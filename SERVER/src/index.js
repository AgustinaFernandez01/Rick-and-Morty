
const http = require("http");
const data = require('./utils/data.js')



http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req
    if(url.includes('rickandmorty/character/')){

        let id = url.split('/').pop();
        let character = data.find((char) => char.id === parseInt(id));
        
     if(character){
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(character)); 
      } else {
        res.writeHead(404, {'content-Type':'application/json'});
        return res.end(JSON.stringify({error: 'Character not found'}))
      }
    }
}).listen(3001, 'localhost')