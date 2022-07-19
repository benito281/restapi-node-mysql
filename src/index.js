import express from "express";
import morgan from "morgan";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

//Inicialization
const app = express();
import employeesRoutes from './routes/employees.routes.js';
import { PORT } from './config.js';
const __dirname = dirname(fileURLToPath(import.meta.url)); //Obtiene el directorio donde se encuentra el archivo

//Settings

// Middlewares
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(morgan("dev"));


// Routes
app.use(employeesRoutes);

// Static Files
app.use(express.static(join(__dirname, 'public')));
// Starting the server
app.listen(PORT);
console.log('Server on port ', PORT);

