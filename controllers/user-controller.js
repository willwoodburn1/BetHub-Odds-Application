const db = require("../models");

module.exports = function (app) {

    app.get("api/user/:id", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data)
        })
    });

    app.post("/api/signup", function (req, res) {
        db.User.create({
            username: req.body.username,
            password: req.body.password
        })
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });
};