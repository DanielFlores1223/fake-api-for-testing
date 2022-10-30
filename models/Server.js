import express from 'express';
import cors from 'cors';
import connection from '../db/connection.js';

class Server {

     constructor() {
          this.app = express();
          this.PORT = process.env.PORT || 3000;

          this.dbConnection();
          this.routes();
          this.middlewares;
     }

     async dbConnection() {
          try {
               await connection.authenticate();
               await connection.sync()
               console.log('Connecticon has been established successfully')
          } catch (error) {
               console.log('Unable to connect to the database: ', error)
          }
     }

     routes() {
          this.app.use( cors() );
          this.app.use( express.json() );
     }

     middlewares() {

     }

     listen() {
          this.app.listen( this.PORT, () => {
               console.log(`Server is running correctly in localhost:${this.PORT}`);
          });
     }
}


export default Server;