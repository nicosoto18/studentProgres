import { DataTypes } from "sequelize";

export default (sequelize) =>{
    sequelize.define("student", {
        id_student: {
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
    });
};

