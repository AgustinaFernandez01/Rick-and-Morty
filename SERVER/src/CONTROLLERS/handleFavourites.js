let myFavorites = [];

const postFav = (req, res) => {
    const {character} = req.body;

    myFavorites.push(character);
    res.status(200).json(myFavorites)
}

const deletefav = (req, res) => {
    const {id} = req.params;

    const filtered = myFavorites.filter(character => character.id !== Number(id))

    myFavorites = filtered;

    res.status(200).json(filtered)
}

module.exports = {
    postFav, 
    deletefav
}