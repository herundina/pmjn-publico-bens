import { HttpClient, HttpEvent, HttpEventType, HttpHandler, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, every, tap } from "rxjs";


export function loggingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn): Observable<HttpEvent<unknown>>{
    return next(req).pipe(tap(event=>{
      if(event.type == HttpEventType.Response){
        console.log(req.url, 'returned a response with  status', event.status);
      }
    }))
  }
