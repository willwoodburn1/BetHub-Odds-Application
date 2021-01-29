module.exports = function (sequelize, DataTypes) {
    const Note = sequelize.define("Note", {

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }

    });

    Note.associate = function (models) {
        Note.belongsTo(models.Bet, {
            foreignKey: {
                name: "betId",
                allowNull: false
            }
        });
    };

    return Note;
};

// notes: {
//     type: DataTypes.TEXT
// }