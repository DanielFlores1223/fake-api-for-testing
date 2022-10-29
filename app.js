import dotenv from 'dotenv';
import Server from "./models/Server.js";

dotenv.config();
const server = new Server();
server.listen();