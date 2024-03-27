import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CertidaoDto } from 'src/infraestructure/pipes/dto/certidaoDto';
import { ICertidao } from 'src/infraestructure/interface/DCertidao';
import { SCertidao } from 'src/infraestructure/service/SCertidao';

@Controller('certidao')
export class CertidaoController {

    constructor(private readonly service : SCertidao){}

    @Post('novo')
    @HttpCode(201)
    async insert(@Body() data : CertidaoDto) : Promise<ICertidao>{
        console.log(data)
        return await this.service.insert(data);
    }

    @Get('todos')
    @HttpCode(201)
    async findAll(): Promise<ICertidao[]>{
        return this.service.findAll();
    }

    //@Get() - form est

    @Get('edt/:id')
    @HttpCode(201)
    async findById(@Param('id') id: string): Promise<void>{
        return this.service.findById(id);
    }

    @Put('update')
    @HttpCode(201)
    async update(@Body() data: CertidaoDto): Promise<ICertidao>{
        return this.service.update(data);
    }

    @Delete('dlt/:id')
    @HttpCode(201)
    async delete(@Param('id') id: string): Promise<void>{
        return this.service.delete(id);
    }
}