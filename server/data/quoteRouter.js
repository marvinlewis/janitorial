const router = require('express').Router();
const db = require('./project-model');

router.get('/', (req, res) => {
    db.getQuote()
    .then(response => {
        res.status(200).json({
            here_Kell : response
        })
    })
    .catch(err => {
        res.status(400).json({
            error_kell : err
        })
    })
});

router.post('/', (req, res) => {
    const quote = req.body;
    console.log(quote);
    db.addQuote(quote)
    .then(response => {
        res.status(200).json({
            data : response
        })
    })
    .catch(err => {
        res.status(400).json({
            error : err
        })
    })
});

module.exports = router;