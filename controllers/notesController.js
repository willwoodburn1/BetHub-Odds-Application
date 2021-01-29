const db = require("../models");

module.exports = function (app) {

    // GET route for retriving all the notes
    app.get("/api/notes", function (req, res) {
        let query = {};
        if (req.body.bet_id) {
            query.betId = req.query.bet_id;
        }
        db.Note.findAll({
            where: query
        }).then(function (dbBet) {
            res.json(dbBet);
        });
    });

    // GET route for retrieving a single note
    app.get("/api/note/:id", function (req, res) {
        db.Note.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbBet) {
            res.json(dbBet)
        });
    });

    app.get("/api/notes/:id", function (req, res) {
        db.Note.findAll({
            where: {
                betId: req.params.id
            }
        }).then(function (notes) {
            res.json(notes)
        });
    });

    // POST route for saving a new post
    // app.post("/api/notes", function (req, res) {
    //     db.Note.create(req.body)
    //         .then(function (dbBet) {
    //             res.json(dbBet);
    //         });
    // });

    app.post("/api/notes", function (req, res) {
        db.Note.create({
            betId: req.body.betId,
            title: req.body.title,
            content: req.body.content
        })
            .then(function (dbNote) {
                res.json(dbNote);
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            });
    });

    // DELETE route for deleting posts
    app.delete("/api/notes/:id", function (req, res) {
        db.Note.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbNote) {
            res.json(dbNote);
        });
    });

    // PUT route for updating posts
    app.put("/api/notes", function (req, res) {
        db.Note.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbNote) {
                res.json(dbNote);
            });
    });
};

