import { config } from "dotenv"; //Importa los valores del archivo .env y los guarda en variable global process de node.
config();


export const PORT = process.env.PORT || 3000;

//database environment variables
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_DATABASE = process.env.DB_DATABASE || "company"; 
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSW0RD = process.env.DB_PASSW0RD || "";
export const DB_PORT = process.env.DB_PORT || "3306";