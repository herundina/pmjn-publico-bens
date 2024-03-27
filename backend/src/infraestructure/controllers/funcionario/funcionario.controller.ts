import { Body, Controller, Get, HttpCode, Param, Post, Put, UsePipes } from '@nestjs/common';
//import { funcionarioDto } from 'src/infraestructure/pipes/dto/funcionarioDto';
import { IFuncionario } from 'src/infraestructure/interface/DFuncionario';
import { SFuncionario } from 'src/infraestructure/service/funcionario.service';
import { funcionarioDto, createFuncionarioSchema } from 'src/infraestructure/pipes/schema/funcionario.schema';
import { ZodValidationPipe } from 'src/infraestructure/pipes/zodValidation/zodValidation';

@Controller('funcionario')
export class FuncionarioController {
    constructor(private readonly service : SFuncionario){}

//Post para Cadastro
    @Post('novo')
    @HttpCode(201)    
    async insert(@Body(new ZodValidationPipe(createFuncionarioSchema)) data) : Promise<IFuncionario>{
        console.log(`Controller ${data}`)
        return await this.service.insert(data);
    }

//Find Todos
    @Get('todos')
    @HttpCode(201)
    async findAll() : Promise<IFuncionario[]>{
        return await this.service.findAll();
    }

//FindById
    @Get('edt/:id')
    async findById(@Param('id') id: string) : Promise<IFuncionario>{
        return await this.service.findById(id);
    }

    @Put('update')
    @HttpCode(201)
    async update(@Body(new ZodValidationPipe(createFuncionarioSchema)) data): Promise<void>{
        return this.service.update(data);
    } 
}
