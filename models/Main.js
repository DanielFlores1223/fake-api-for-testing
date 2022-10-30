import { DataTypes } from 'sequelize';
import connection from '../db/connection.js';

const Main = connection.define('main', {
     folio: DataTypes.INTEGER,
     placas: DataTypes.STRING(50),
     cruces: DataTypes.TEXT,
     articulo: DataTypes.INTEGER,
     municipios: DataTypes.STRING,
});

export default Main;