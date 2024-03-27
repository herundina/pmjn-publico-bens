import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';

import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FuncionarioServiceService } from '../../services/funcionario-service.service';
import { UpdateFuncionarioComponent } from '../update/update-funcionario.component';
import { IFuncionario } from '../../interface/funcionario';


@Component({
  selector: 'app-edit-funcionario',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, UpdateFuncionarioComponent],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.css'
})
export class FuncionariosComponent
 implements OnInit{

  //Dependencias
  private service = inject(FuncionarioServiceService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  //Entradas
  @Input()
  listaFuncionario$!: Observable<IFuncionario[]>;
  funcionario_id!: string | null;

  //Acessando parametro de Rota
  ngOnInit() {
    this.listaFuncionario$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.funcionario_id = params.get('id');
        return this.service.getFuncionarios();
      })
    )
  }
}
