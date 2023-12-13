import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Pessoa{

    @PrimaryGeneratedColumn({type: 'integer'})
    id: number
    
    @Column('varchar', {length : 100, nullable: false})
    nome: string

    @Column('varchar', {length: 100, nullable: false})
    endereco: string
}