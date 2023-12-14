import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class BemPublicoEntity{

    @PrimaryGeneratedColumn({type: 'number', })
    id: number

    @Column({type: 'varchar', nullable: false})
    tipoBemPublico: string

    @Column({type: 'boolean', nullable: false})
    areaComprimento: number

    @Column({type: 'boolean', nullable: false})
    areaLargura: number

    @Column({type: 'boolean', nullable: false})
    latitude: number

    @Column({type: 'boolean', nullable: false})
    longetud: number
}