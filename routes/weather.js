const express = require('express');
const router = express.Router();

/*get list of cities (mostly useful for GUI)*/
router.get('/', (req, res) => {
    res.send('Geneva, Tokyo, New York, London...');
});

/*get one city (useful for GUI as well as general search functionality)*/
router.get('/:city', (req, res) => {
    res.send(`${req.params.city}'s weather data`);
});

/*add a city (most likely used to add cities to a user's list)*/
router.post('/', (req, res) => {
    console.log('body', req.body);
    res.send('Post');
})

/*delete a city (useful when a user wishes to delete a city)*/
router.delete('/:city', (req, res) => {
    res.send(`${req.params.city} has been deleted from your list`);
});

module.exports = router;