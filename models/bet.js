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
        // createdAt: {
        //     type: DataType.DATE,
        //     get() {
        //         return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
        //     }
        // },
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
        notes: {
            type: DataTypes.TEXT
        },
        outcome: {
            type: DataTypes.STRING
        }
    });
    return Bet;
};