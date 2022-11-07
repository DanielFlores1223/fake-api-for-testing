import { exit } from 'node:process';
import connection from '../db/connection.js';
import { Main, Articulo } from '../models/index.js';
import main from './main.data.js';
import articulos from './articulo.data.js';


const importData = async () => {
     try {
          await connection.authenticate();
          await connection.sync();
          await Articulo.bulkCreate( articulos )
          //await Main.bulkCreate( main );
          console.log('Data was added correctly on database');
          exit();
     } catch (error) {
          console.log(error);
          exit(1)
     }
}

const deleteData = async () => {
     try {
          await connection.sync({force: true});
          console.log('Data was deleted correctly on database');
          exit();
     } catch (error) {
          console.log(error);
          exit(1)
     }
}

// commands to execute the functions
if( process.argv[2] == '-i' ) importData();
if( process.argv[2] == '-d' ) deleteData();