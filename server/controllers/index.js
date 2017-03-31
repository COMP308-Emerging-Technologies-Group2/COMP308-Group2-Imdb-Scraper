// display Home page
module.exports.DisplayHome = function (req, res) {
    res.render('content/index', {
        title: 'Home',
        games: '',
        displayName: req.user ? req.user.displayName : ''
    });
};

// display Contact page
module.exports.DisplayContact = function (req, res) {
    res.render('content/contact', {
        title: 'Contact',
        games: '',
        displayName: req.user ? req.user.displayName : ''
    });
};