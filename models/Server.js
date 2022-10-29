import express from 'express';
import cors from 'cors';

class Server {

     constructor() {
          this.app = express();
          this.PORT = process.env.PORT || 3000;

          this.dbConnection();
          this.routes();
          this.middlewares;
     }

     async dbConnection() {

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