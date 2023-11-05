import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Tasks extends BaseEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column({ default: false })
    completed: boolean
}