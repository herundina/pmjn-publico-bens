import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FuncionarioComponent } from '../funcionario/novo/funcionario.component';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FuncionarioComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

}
