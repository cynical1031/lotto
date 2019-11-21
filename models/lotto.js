module.exports = (sequelize, DataTypes) => {
    return sequelize.define('lotto', {
        idx: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        first: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        win1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        second: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        win2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        third: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        win3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fouth: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        win4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fifth: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        win5: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        num1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        num2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        num3: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        num4: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        num5: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        num6: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bunusNum: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'lotto_tb'
    });
};