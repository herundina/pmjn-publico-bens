import { Body, Controller, HttpCode, Post, Get, Param, Put, Delete,  ForbiddenException, Render, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { BemPublicoDto } from 'src/infraestructure/pipes/dto/bemPublicoDto';
import { IBemPublico } from 'src/infraestructure/interface/DBemPublico';
import { SBemPublico } from 'src/infraestructure/service/SBemPublico';
import { bemPublicoSchema } from 'src/infraestructure/pipes/schema/bemPublico.schema';
import { ZodValidationPipe } from 'src/infraestructure/pipes/zodValidation/zodValidation';

@Controller('bemPublico')
//@UseFilters(new HttpExceptionFilter())
export class BemPublicoController {

    constructor(private readonly service : SBemPublico){}

    @Post('novo')
    @HttpCode(201)
    async insert(@Body(new ZodValidationPipe(bemPublicoSchema)) data) : Promise<IBemPublico>{
        try {                               
            return await this.service.insert(data);
        } catch (error) {
            console.log(error)
            throw new ForbiddenException() 
        }
    }

    @Get('todos')
    @HttpCode(201)
    async findAll(): Promise<IBemPublico[]>{
        return this.service.findAll();
    }

    //@Get() - Rota view    
    
    @Get('edt/:id')    
    @HttpCode(201)
    async findById(@Param('id') id: string): Promise<void>{
        return this.service.findById(id);
    }

    @Put('update')
    @HttpCode(201)
    async update(@Body(new ZodValidationPipe(bemPublicoSchema)) data): Promise<IBemPublico>{
        console.log(`data ${data} - ${data._id}`)
        return this.service.update(data);
    }

    @Delete('dlt/:id')
    @HttpCode(201)
    async delete(@Param('id') id: string) : Promise<void>{
        return this.service.delete(id);
    }
}
