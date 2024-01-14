import { Column, PrimaryGeneratedColumn, Entity, AfterInsert, AfterUpdate, AfterRemove } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    FullName: string;

    @Column()
    DateBirth: string;

    @Column()
    DateSign: string;
    
    @Column()
    email: string;

    @Column()
    password: string;


    @AfterInsert()
    LogAfterInsert() {
        console.log('User insert id:', this.id);
    }

    @AfterUpdate()
    LogAfterUpdate() {
        console.log('User update id:', this.id);
    }

    @AfterRemove()
    LogAfterRemove() {
        console.log('User remove id:', this.id);
    }
}