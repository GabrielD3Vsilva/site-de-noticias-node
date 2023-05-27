const News = require('../model/News');

const home = (req,res) => {
    res.render('home');
};

const Add = (req, res) => {
    res.render('Add');
}

const Create = async (req, res) => {
    try {
        await News.create(req.body);
        res.redirect('/')
    } catch (err) {
        res.status(500).send({ error: err.message });
      }
};

module.exports = {
    home,
    Create,
    Add
};