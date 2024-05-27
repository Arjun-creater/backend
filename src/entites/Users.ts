import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { IsEmail } from "class-validator";

@Entity({ name: "users" })
@Unique(["email", "username",])
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    username: string;

    @Column({ type: "text" })
    @IsEmail()
    email: string;

    @Column({ type: "text" })
    password: string

    @Column({ type: "text", nullable: true })
    mobile: string

    @Column({ type: "timestamp", nullable: true })
    added_on: Date;

    @Column({ nullable: true })
    added_by: number;

    @Column({ type: "timestamp", nullable: true })
    updated_on: Date;

    @Column({ nullable: true })
    updated_by: number;

    @Column({ type: "timestamp", nullable: true })
    deleted_on: Date;

    @Column({ nullable: true })
    deleted_by: number;

}
