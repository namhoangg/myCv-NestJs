import {AfterInsert,AfterRemove,AfterUpdate, Entity,Column,PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;
    @AfterInsert()
    logInsert(){
        console.log('Inserted User with id', this.id);
        console.log(this.id,this.email,this.password);
    }
    @AfterUpdate()
    logUpdate(){
        console.log('Updated User with id', this.id);
    }
    @AfterRemove()
    logRemove(){
        console.log('Removed User with id', this.id);
    }
}