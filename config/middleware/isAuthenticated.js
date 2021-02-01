module.exports = function (req, res, next) {
    console.log("middleware auth", req.user)
    if (req.user) {
        return next();
    }
    // return res.redirect("/login");
    return res.status(401).end()


};