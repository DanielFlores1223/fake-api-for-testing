import Main from './Main.js';
import Articulo from './Articulo.js';

Articulo.hasMany( Main, {
     foreignKey: 'articuloId',
} )

Main.belongsTo( Articulo, {
     foreignKey: 'articuloId',
} )

export {
     Main,
     Articulo
}