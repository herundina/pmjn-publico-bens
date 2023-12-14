import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity()
export class UsuarioEntity{

    @PrimaryGeneratedColumn({type: 'number'})
    id: number

    @Column({type: "varchar", nullable: false})
    email: string

    @Column({type: "varchar", nullable: false})
    senha: string

    @Column({type: 'varchar', nullable: false})
    nivelAcesso: string
}