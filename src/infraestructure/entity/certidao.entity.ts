import { PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, Entity} from 'typeorm'
import { BemPublicoEntity } from './bemPublico.entity'
import { PastaArquivoEntity } from './pasta.entity'

@Entity()
export class CertidaoEntity{

    @PrimaryGeneratedColumn({type: 'number'})
    id: number

    @Column({type: 'varchar', nullable: false})
    matricula: string

    @Column({type: 'varchar', nullable: false})
    cartorio: string

    @OneToOne(() => BemPublicoEntity) //Uma certidao para um bem público, Um bem público para uma certidao
    @JoinColumn()
    bemPublico: BemPublicoEntity

    //Varias certidões numa Pasta
    @ManyToOne(()=> PastaArquivoEntity, (pastaArquivo) => pastaArquivo.certidao) 
    pastaArquivo: PastaArquivoEntity
}