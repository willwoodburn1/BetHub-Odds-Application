const db = require("../models");

module.exports = function (app) {

    // GET route for retrieving all bets placed
    app.get("/api/bets", function (req, res) {
        db.Bet.findAll({}).then(function (dbBet) {
            res.json(dbBet);
        });
    });

    // POST route for saving a new bet
    app.post("/api/bets", function (req, res) {
        db.Bet.create({
            selection: req.body.selection,
            opponent: req.body.opponent,
            winnings: req.body.winnings,
            betType: req.body.betType,
            bookMaker: req.body.bookMaker,
            notes: req.body.notes
        }).then(function (dbBet) {
            console.log(dbBet);
            res.json(dbBet);

        })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            });
    });

    // DELETE route for deleting a previously placed bet
    app.delete("/api/bets/:id", function (req, res) {
        db.Bet.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBet) {
            res.json(dbBet);
        });
    });

    // PUT route for updating the notes section of past bets
    app.put("/api/bets", function (req, res) {
        db.Bet.update({
            notes: req.body.notes
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbBet) {
            res.json(dbBet);
        })
            .catch(function (err) {
                res.json(err);
            });
    });

};