import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "appointments" })
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    patientName: string;

    @Column()
    mobile: string;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column({ default: false })
    cancelled: boolean;
}
