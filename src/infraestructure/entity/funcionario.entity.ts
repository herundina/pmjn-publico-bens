import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Funcionario{

    @PrimaryGeneratedColumn({type: 'integer'})
    id: number;

    @Column({type: 'varchar', nullable: false})
    nome: string;

    @Column({type: 'varchar', nullable: false})
    cpf: string;

    @Column({type: 'varchar', nullable: false})
    matricula: string;

    @Column({type: 'varchar', nullable: false})
    email: string

    @Column({type: 'varchar', nullable: false})
    setor: string

}