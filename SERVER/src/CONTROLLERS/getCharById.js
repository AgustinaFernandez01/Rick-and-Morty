

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({name, gender, species, origin, image, status}) => {
//         const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status
//     }
//     return res.writeHead(200, {'content-Type': 'application/json'})
//     .end(JSON.stringify(character))
//     })
//     .catch((error) => {
//         return res.writeHead(500, {'content-Type': 'text/plain'})
//         .end(error.message)
//     })
// }
const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const params = req.params;
    const {id} = params;

    axios
    .get(`${URL}/characters/${id}`)
    .then(({name, gender, species, origin, image, status}) => {
                const character = ({
                id,
                name,
                gender,
                species,
                origin,
                image,
                status})
    res.status(200).json(character)})
    .catch((error) => {
         res.status(500).json({error: error.message})
    }
    )
}

module.exports = {getCharById}