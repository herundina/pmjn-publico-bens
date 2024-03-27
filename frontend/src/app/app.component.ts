import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UpdateFuncionarioComponent } from './funcionario/update/update-funcionario.component';
import { FuncionarioComponent } from './funcionario/novo/funcionario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule, RouterLink, RouterLinkActive, RouterOutlet, RouterModule,
    FooterComponent, NavbarComponent, SidebarComponent,
    FuncionarioComponent, UpdateFuncionarioComponent,
    UsuarioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: '../assets/css/modern.css'
})
export class AppComponent {
  title = 'frontend';
}
