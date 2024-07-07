const express = require('express');
const { readSongs } = require('./data/songs');  
const router = express.Router();

router.get('/songs/:id', (req, res) => {
    try {
        const songs = readSongs();
        const song = songs.find(s => s.id === parseInt(req.params.id));
        if (song) {
            res.json(song);
        } else {
            res.status(404).send('Song not found');
        }
    } catch (error) {
        res.status(500).send('Error reading song data');
    }
});

module.exports = router;