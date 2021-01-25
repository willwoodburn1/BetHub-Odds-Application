const db = require("../models");
const passport = require("../config/passport")

module.exports = function (app) {

    // app.get("api/user/:id", function (req, res) {
    //     db.User.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (data) {
    //         res.json(data)
    //     })
    // });

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    app.post("/api/signup", function (req, res) {
        db.User.create({
            username: req.body.username,
            password: req.body.password
        })
            .then(function (user) {
                res.json({
                    username: user.username
                });
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });
};