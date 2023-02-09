import 'dotenv/config';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './controllers';
import AppError from './errors/app.error';
import dataSource from './databases/app.datasource';
import { host, password, port } from './config';

dataSource.initialize().then(() => {
    })
    .catch((err:any) => {      
        console.error("Data Source com erro:", err)
    })
    
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '..','public')));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Funcionando');
})

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) { 
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(PORT, () => {
    console.log("====================== Rodando - " + PORT + " ======================");
})
