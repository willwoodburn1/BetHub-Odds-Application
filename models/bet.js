module.exports = function (sequelize, DataTypes) {
    const Bet = sequelize.define("Bet", {
        selection: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        opponent: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        league: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        winnings: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        betType: {
            type: DataTypes.STRING
        },
        bookMaker: {
            type: DataTypes.STRING
        },
        // notes: {
        //     type: DataTypes.TEXT
        // },
        outcome: {
            type: DataTypes.STRING
        }
    });

    Bet.associate = function (models) {
        Bet.hasMany(models.Note, {
            onDelete: "cascade"
        });
    };

    return Bet;
};