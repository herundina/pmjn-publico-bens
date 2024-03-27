import { HttpException, HttpStatus } from "@nestjs/common";


export class BadRequestException extends HttpException{
    constructor(){
        super('BadResquestException', HttpStatus.FORBIDDEN)
    }
}
