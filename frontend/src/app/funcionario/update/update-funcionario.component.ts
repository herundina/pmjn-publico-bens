import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { FuncionarioServiceService } from '../../services/funcionario-service.service';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Funcionario } from '../../model/funcionario';

@Component({
  selector: 'app-update-funcionario',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive, RouterOutlet,
    ReactiveFormsModule, FormsModule, RouterModule
  ],
  templateUrl: './update-funcionario.component.html',
  styleUrl: './update-funcionario.component.css'
})
export class UpdateFuncionarioComponent implements OnInit {

  //Dependencias
  private service = inject(FuncionarioServiceService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private formBuild = inject(FormBuilder);

  @Input()
  funcionario$! : Observable<Funcionario>;

  @Output()
  update = new EventEmitter();

  //Grupo de Fomulário com um conjunto fixo de controle que pode ser gerenciado em conjunto;
  formGroup = this.formBuild.group(
    {
      funcionario: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      matricula: ['', Validators.required],
      secretaria: ['', Validators.required],
      setor: ['', Validators.required]
    }
  );

  ngOnInit(){
     this.funcionario$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getId(params.get('id')!)
      )
    );
  }

  onSubmit(){

  }
}
