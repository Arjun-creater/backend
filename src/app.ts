import "reflect-metadata"
import express from 'express'
import { AppDataSource } from "./AppDataSource";
const app = express();

import configureRoutes from "./routes";


import cors from 'cors'
app.use(cors())
app.use(express.json());


const port = process.env.APP_PORT;
AppDataSource.initialize()
    .then(() => {
        configureRoutes(app)
        
        app.listen(port, () => {
            console.log(`App working on ${port}`)
        })

    })
    .catch((err) => {
        console.log('db not connected', err)
    })
