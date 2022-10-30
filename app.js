import dotenv from 'dotenv';
import Server from "./models/Server.js";

dotenv.config({
     path: '.env'
});
const server = new Server();
server.listen();