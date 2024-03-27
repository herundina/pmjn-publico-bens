import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ZodSchema } from "zod";

export class ZodValidationPipe implements PipeTransform{
    constructor(private schema: ZodSchema){}
    transform(value: unknown, metadata: ArgumentMetadata) {
        console.log(`ZodValidate metadata: ${metadata}`);
        try {
            const parservalue = this.schema.parse(value);
            return parservalue;           
        } catch (error) {
            console.log(`Error Validação ZodValidation ${error}`);
            throw new BadRequestException('Error Validação ZodValidation');
        }
    }
}