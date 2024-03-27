import { Module } from "@nestjs/common";
import { dataBaseModule } from "./dataBaseModule";
import { RBemPublico } from "../repository/RBemPublico";
import { BemPublicoProviders } from "../providers/PBemPublico";
import { SBemPublico } from "../service/SBemPublico";
import { BemPublicoController } from "../controllers/bem-publico/bem-publico.controller";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "../exception/HttpExceptionFilter";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { transcode } from "buffer";

@Module({
    imports: [dataBaseModule],
    controllers: [BemPublicoController],
    providers: [RBemPublico, SBemPublico, ...BemPublicoProviders],
    exports: []
})

export class BemPublicoModule{}