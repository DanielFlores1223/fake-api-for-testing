import { request, response } from 'express'; 
import { Op } from 'sequelize';  
import { Main, Articulo } from '../models/index.js';  
import connection from '../db/connection.js';


const getByFolio = async ( req = request, res = response ) => {
     try {
          const { folio } = req.query;
          let result = [];
          console.log(folio)

          if(!folio || folio == '')
               result = await Main.findAll({ include: [
                    { model: Articulo, as: 'articulo' }
               ] });
               /*result = await Articulo.findAll({ include: [
                    { model: Main }
               ] });*/
          else
               result = await Main.findAll( 
                    { 
                         where: {
                              folio
                         },
                         include: [
                              { model: Articulo, as: 'articuloJoin' }
                         ]
                    }
               );

          res.status(200).json( { ok: true, msg: 'Consulta ejecutada correctamente', result } );

     } catch (error) {
          console.log(error);
          res.status(500).json( { ok: true, error: 'Algo salio mal...' } );
     }
}


export {
     getByFolio,
}