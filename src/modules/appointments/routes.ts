import { Router } from 'express';
import { createAppointments, getAllAppointment, cancelAppointments, deleteAppointments } from './appointment.controller';

const router = Router();

router.post('/add', createAppointments);
router.get('/', getAllAppointment);
router.put('/cancel/:id/', cancelAppointments);
router.delete('/delete/:id', deleteAppointments);

export default router;
