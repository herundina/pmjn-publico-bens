import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { CertidaoEntity } from './certidao.entity';

@Entity()
export class PastaArquivoEntity{

    @PrimaryGeneratedColumn({type: "number"})
    id: number

    @Column({type: 'varchar', nullable : false})
    nome: string

    @OneToMany(() => CertidaoEntity, (certidao)=> certidao.pastaArquivo) //Uma Pasta várias Certidões
    certidao: CertidaoEntity[]
}