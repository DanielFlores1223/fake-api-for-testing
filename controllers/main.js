import { request, response } from 'express'; 
import { Op } from 'sequelize';  
import { Main } from '../models/index.js';  
import connection from '../db/connection.js';


const getByFolio = async ( req = request, res = response ) => {
     try {
          const { folio } = req.query;
          let result = [];
          console.log(folio)

          if(!folio || folio == '')
               result = await Main.findAll();
          else
               result = await Main.findAll( 
                    { 
                         where: {
                              folio
                         }
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