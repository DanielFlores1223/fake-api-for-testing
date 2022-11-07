import { DataTypes } from 'sequelize';
import connection from '../db/connection.js';

const Main = connection.define('main', {
     folio: DataTypes.INTEGER,
     placas: DataTypes.STRING(50),
     cruces: DataTypes.TEXT,
     municipios: DataTypes.STRING,
});

export default Main;