import { DataTypes } from "sequelize";

export default (sequelize) =>{
    sequelize.define("student_subject", {
        id_student: {
            type: DataTypes.UUID,
            primaryKey: true,
            references: {
                model: 'student',
                key: 'id_student',
            },
        },
        id_subject: {
            type: DataTypes.UUID,
            primaryKey: true,
            references: {
                model: 'subjects',
                key: 'id_subject',
            },
        },
        prom_student: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
    },{
        timeStamps: false
    });
};

