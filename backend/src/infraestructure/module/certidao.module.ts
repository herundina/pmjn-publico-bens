import { Module } from "@nestjs/common";
import { SCertidao } from "../service/SCertidao";
import { RCertidao } from "../repository/RCertidao";
import { CertidaoProviders } from "../providers/PCertidao";
import { dataBaseModule } from "./dataBaseModule";
import { CertidaoController } from "../controllers/certidao/certidao.controller";

@Module({
    imports:[dataBaseModule],
    controllers: [CertidaoController],
    providers: [SCertidao, RCertidao, ...CertidaoProviders],
    exports: []
})

export class CertidaoModule{}