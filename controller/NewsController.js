const News = require('../model/News');

const home = async (req,res) => {
    try {
        // const NewsId = await News.findOne({_id: req.params.id});
        const NewsList = await News.find();
        res.render('home', {NewsList});
    } catch (err) {
        res.status(500).send({ error: err.message });
      }
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

const not = async (req, res) => {
    try {
        const not = await News.findOne({_id: req.params.id});
        res.render('New', {not});
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

module.exports = {
    home,
    Create,
    Add,
    not

};