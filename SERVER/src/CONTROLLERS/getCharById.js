const axios = require('axios')

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(({name, gender, species, origin, image, status}) => {
        const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status
    }
    return res.writeHead(200, {'content-Type': 'application/json'})
    .end(JSON.stringify(character))
    })
    .catch((error) => {
        return res.writeHead(500, {'content-Type': 'text/plain'})
        .end(error.message)
    })
}



module.exports = {getCharById}