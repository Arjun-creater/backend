import { AppDataSource } from '../../AppDataSource';
import { Appointment } from "../../entites/Appointments";

export const createAppointment = async (patientName: string, mobile: string, date: Date, time: string): Promise<void> => {
    const appointmentRepository = AppDataSource.getRepository(Appointment);
    const appointment = new Appointment();
    appointment.patientName = patientName;
    appointment.mobile = mobile;
    appointment.date = date;
    appointment.time = time;
    await appointmentRepository.save(appointment);
};

export const getAllAppointments = async (): Promise<Appointment[]> => {
    const appointmentRepository = AppDataSource.getRepository(Appointment);
    return await appointmentRepository.find();
};

export const cancelAppointment = async (id: number): Promise<boolean> => {
    const appointmentRepository = AppDataSource.getRepository(Appointment);
    const appointment = await appointmentRepository.findOne({where: {id: id}});
    if (!appointment) {
        return false;
    }
    appointment.cancelled = true;
    await appointmentRepository.save(appointment);
    return true;
};

export const deleteAppointment = async (id: number): Promise<boolean> => {
    const appointmentRepository = AppDataSource.getRepository(Appointment);
    const result = await appointmentRepository.delete(id);
    return result.affected !== 0;
};
