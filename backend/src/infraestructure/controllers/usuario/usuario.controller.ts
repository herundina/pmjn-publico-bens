import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { UsuarioDto } from 'src/infraestructure/pipes/dto/usuarioDto';
import { IUsuario } from 'src/infraestructure/interface/DUsuario';
import { SUsuario } from 'src/infraestructure/service/SUsuario';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly service : SUsuario){}

    @Post('novo')
    @HttpCode(201)
    async insert(@Body() dados : UsuarioDto): Promise<IUsuario>{
        return this.service.insert(dados);
    }

    @Get('todos')
    @HttpCode(201)
    async findAll(): Promise<IUsuario[]>{
        return this.service.findAll();
    }

    @Get('edt/:id')
    @HttpCode(201)
    async findById(@Param('id') id: string): Promise<void>{
        return this.service.findById(id);
    }

    //@Get() - view edit

    @Put('update')
    @HttpCode(201)
    async update(@Body() data : UsuarioDto): Promise<IUsuario>{
        return this.service.update(data);
    }

    @Delete('dlt/:id')
    @HttpCode(201)
    async delete(@Param('id') id: string): Promise<void>{
        return this.service.delete(id);
    }

}