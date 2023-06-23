const {Router} = require('express')
const getCharById = require('../CONTROLLERS/getCharById')
const login = require('../CONTROLLERS/login')
const postFav = require('../CONTROLLERS/handleFavourites')
const deleteFav = require('../CONTROLLERS/handleFavourites')

const router = Router();

router.get('/character/:id', () => {getCharById})
router.get('/login', login)
router.post('/fav', () => {postFav})
router.delete('/fav/:id', () => {deleteFav})

module.exports = router;