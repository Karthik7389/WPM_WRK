module.exports.index = function(req, res) {
    res.render('index', { title: 'Loc8r' });
};

module.exports.signin = function(req, res) {
    res.render('signin', { title: 'Signin' });
};
module.exports.review = function(req, res) {
    res.render('review', { title: 'Add Review' });
};