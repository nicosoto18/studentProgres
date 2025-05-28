import { DataTypes } from "sequelize";

export default (sequelize) =>{
    sequelize.define("grade", {
        id_grade: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_grade: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        total_points: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        points_obtained: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
          timestamps: false
    });
};

