import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Injectable } from "@nestjs/common";
import { Response, Request } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        console.log(`ctx ${ctx}`)
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();        
        const status = exception.getStatus();

        response
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url            
            });
    }
}