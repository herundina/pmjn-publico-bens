import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../model/funcionario';
import { IFuncionario } from '../interface/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioServiceService {

  constructor(private http: HttpClient){}

  //Get listaFuncionario
  async getFuncionarios(): Promise<IFuncionario[]>{
    const data = await fetch('http://localhost:3000/funcionario/todos');
    return (await data.json()) ?? [];
  }

  //GetById
  getId(id: string | null) : Observable<Funcionario>{
    const response =  this.http
    .get<Funcionario>(`http://localhost:3000/funcionario/edt/${id}`);
  return response;
  }

  //Post novo fucnionário
  postFuncionario(funcionario: Funcionario){
    return this.http.post<Funcionario>
    ('http://localhost:3000/funcionario/novo',funcionario).subscribe();
  }
}
