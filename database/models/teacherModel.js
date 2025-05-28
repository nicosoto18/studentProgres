import { DataTypes } from "sequelize";

export default (sequelize) =>{
    sequelize.define("teacher", {
        id_teacher: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
         password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

