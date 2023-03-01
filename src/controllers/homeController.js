let getHomePage = (req, res) => {
    // return res.send('Hello world from controller');
    return res.render('homepage.ejs');
}
getAboutme
let getAboutme = (req, res) => {
    // return res.send('Hello world from controller');
    return res.render('test/aboutme.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutme: getAboutme
}