const db = require('./dbConfig.js');

module.exports = {
    addQuote,
    getQuote,
    findBy,
    getAll,
    add
};

function addQuote(item) {
    return db('quotes').insert(item)
};

function getQuote() {
    return db('quotes')
};

function findBy (item) {
    return db('login').where(item)
}

function getAll () {
    return db('login')
}

function add(item) {
    return db('login').insert(item)
}