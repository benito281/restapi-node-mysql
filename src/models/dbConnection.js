import { createPool } from "mysql2/promise";
import { DB_HOST,
   DB_DATABASE, 
   DB_PASSW0RD, 
   DB_USER, 
   DB_PORT } from '../config.js'

export const pool = createPool({
  host : DB_HOST,
  user : DB_USER,
  password : DB_PASSW0RD,
  database : DB_DATABASE,
  port : DB_PORT,
  multipleStatements: true
});

