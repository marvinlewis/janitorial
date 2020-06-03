const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./project-model');
const secret = require('../auth/secret');

router.post('/', (req, res) => {
    let { username, password } = req.body;
    db.findBy({ username })
    .then(item => {

        if(item && bcrypt.compareSync(password, item[0].password)){

           const token = generateToken(item);

            res.status(200).json({
                data : 'welcome', token
            })

        } else { 
            res.status(400).json({
                error : 'wrong login'
            })
        }
    })
    .catch(err => {
        res.status(400).json({
            error : "no luck"
        })
    })
})


router.get('/', (req, res) => {
    db.getAll()
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
})

router.post('/signup', (req, res) => {
    let user = req.body;
    // hash the user.password
    // update user to use the hash

    // rounds are 2 to the N times
    const rounds = process.env.HASH_ROUNDS || 8;
    const hash = bcrypt.hashSync(user.password, rounds)
    user.password = hash
    console.log( 'user',user)
    db.add(user)
        .then(saved => {
            console.log('saved',saved)
            res.status(201).json(saved)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error : 'Username already exists'
            })
        })
})

function generateToken (user) {
    console.log("USER", user)

    const payload = {
        userId : user.id,
        username : user.username,
    
    };

    const secrets = secret.jwtSecret;

    const options = {
        expiresIn : '1d'
    }

    return jwt.sign(payload, secrets, options)

};

module.exports = router;