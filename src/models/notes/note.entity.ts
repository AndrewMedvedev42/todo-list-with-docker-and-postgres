import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NoteEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text_content: string;

    @Column('boolean', {default: false})
    isCompleted: boolean;
}