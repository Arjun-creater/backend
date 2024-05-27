import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "diet_plans" })
export class DietPlans {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    code: string;

    @Column({ type: "text", nullable: true })
    diet_plan: string;

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
