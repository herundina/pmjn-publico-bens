import { Module } from "@nestjs/common";
import { pastaProviders } from "../providers/PPasta";
import { dataBaseModule } from "./dataBaseModule";

@Module({
    imports: [dataBaseModule],
    controllers: [],
    providers: [
        ...pastaProviders
    ]
})

export class PastaModule{}