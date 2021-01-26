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

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
    })

    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                username: req.user.username,
                id: req.user.id
            });
        }
    });

};