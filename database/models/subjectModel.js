import { DataTypes } from "sequelize";

export default (sequelize) =>{
    sequelize.define("subject", {
        id_subject: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        subject_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

