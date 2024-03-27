import { Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';
import { UsuarioComponent } from '../../usuario/usuario.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FuncionarioServiceService } from '../../services/funcionario-service.service';
import { UpdateFuncionarioComponent } from '../update/update-funcionario.component';
import { Funcionario } from '../../model/funcionario';
import { CommonModule } from '@angular/common';
import { unambiguousRoleValidator } from '../../validators/role.directive';

@Component({
  selector: 'app-funcionario',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, UsuarioComponent,
  ReactiveFormsModule, FormsModule, UpdateFuncionarioComponent
],
  templateUrl: './funcionario.component.html',
  styleUrl: './funcionario.component.css'
})
export class FuncionarioComponent implements OnInit{
constructor(){}

  //Dependencias
  private formBuild = inject(FormBuilder);
  private service   = inject(FuncionarioServiceService);

  formGroup! : FormGroup;

//Função de Valdiação de entrada do usuário
  ngOnInit():void{
    this.formGroup = new FormGroup(
      {
        funcionario: new FormControl('', Validators.required),
        cpf: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        matricula: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
        secretaria: new FormControl('', Validators.required),
        setor: new FormControl('', Validators.required)
      }
    );
  }

  get funcionario(){
    return this.formGroup.get("funcionario");
  }

  get cpf(){
    return this.formGroup.get('cpf');
  }

  get email(){
    return this.formGroup.get('email');
  }

  get matricula(){
    return this.formGroup.get('matricula');
  }

  get secretaria(){
    return this.formGroup.get('secretaria');
  }

  get setor(){
    return this.formGroup.get('setor');
  }

  //Metodo Save
  onSubmit(){
    console.log(`Metodo funcionario ${this.formGroup.get('funcionario')}`);
    console.log(this.formGroup.value)
    this.service.postFuncionario(this.formGroup.value);
  }
}
