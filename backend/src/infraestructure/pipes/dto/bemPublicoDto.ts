
export class BemPublicoDto{
    _id: string
    tipoBem: string
    glebas: string[]
    endereco:{
        logradouro: string
        numero: string
        bairro: string
        complemento: string
    }
    limites:{
        norte:  string
        sul: string
        leste: string
        oeste: string
    }
    municipio: string
    areaComprimento: number
    areaLargura: number
    latitude: number
    longetude: number

}