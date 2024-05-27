import { Request, Response } from 'express';
import { requestDataValidation, sendError, sendSuccess } from '../../utils/responseHanlder';
import { createAppointment, getAllAppointments, cancelAppointment, deleteAppointment } from './appointmentServices';

export const createAppointments = async (req: Request, res: Response) => {
    try {
        await requestDataValidation(req.body);
        const { patientName, mobile, date, time } = req.body;
        await createAppointment(patientName, mobile, date, time);
        sendSuccess(res, 'Appointment created successfully');
    } catch (error) {
        sendError(res, 'Error creating appointment', error);
    }
};

export const getAllAppointment = async (req: Request, res: Response) => {
    try {
        const appointments = await getAllAppointments();
        sendSuccess(res, 'Appointments fetched successfully', appointments);
    } catch (error) {
        sendError(res, 'Error fetching appointments', error);
    }
};

export const cancelAppointments = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const success = await cancelAppointment(id);
        if (success) {
            sendSuccess(res, 'Appointment canceled successfully');
        } else {
            sendError(res, 'Appointment not found');
        }
    } catch (error) {
        sendError(res, 'Error canceling appointment', error);
    }
};

export const deleteAppointments = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const success = await deleteAppointment(id);
        if (success) {
            sendSuccess(res, 'Appointment deleted successfully');
        } else {
            sendError(res, 'Appointment not found');
        }
    } catch (error) {
        sendError(res, 'Error deleting appointment', error);
    }
};
