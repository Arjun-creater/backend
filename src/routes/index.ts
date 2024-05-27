import { Application } from "express";

import userAuthRoutes from '../modules/auth-user/routes';
import appointmentRouter from "../modules/appointments/routes";
import dietRoutes from '../modules/diet-plans/routes';


export default function configureRoutes(app: Application) {
    app.use('/user/auth', userAuthRoutes)
    app.use('/diet', dietRoutes)
    app.use('/appointments', appointmentRouter);

}