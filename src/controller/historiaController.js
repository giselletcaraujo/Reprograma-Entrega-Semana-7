const historia = require('../model/historiaArte.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(historia);
};

module.exports = { getAll }