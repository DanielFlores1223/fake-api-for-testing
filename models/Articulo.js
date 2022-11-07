import { DataTypes } from 'sequelize';
import connection from '../db/connection.js';

const Articulo = connection.define('articulo', {
     nombre: DataTypes.STRING(20)
});

export default Articulo;