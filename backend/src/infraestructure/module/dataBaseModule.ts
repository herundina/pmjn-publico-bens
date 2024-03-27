import { Module } from "@nestjs/common";
import { dataBaseProvider } from "../config/provider/mongooseProvider";

@Module(
    {
        providers: [...dataBaseProvider],
        exports: [...dataBaseProvider]
    }
)

export class dataBaseModule {}