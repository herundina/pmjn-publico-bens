import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { CertidaoComponent } from './certidao/certidao.component';
import { BemPublicoComponent } from './bem-publico/bem-publico.component';
import { PastaArquivoComponent } from './pasta-arquivo/pasta-arquivo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FuncionarioComponent } from './funcionario/novo/funcionario.component';
import { FuncionariosComponent } from './funcionario/lista/funcionarios.component';
import { UpdateFuncionarioComponent } from './funcionario/update/update-funcionario.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Pagina Inicial'
  },
  {
    path: 'funcionario',
    component: FuncionarioComponent,
    title: 'Funcionário'
  },
  {
    path: 'funcionarios',
    component: FuncionariosComponent,
    title: 'Funcionários'
  },
  {
    path: 'funcionario/edt/:id',
    component: UpdateFuncionarioComponent,
    title: 'Ver mais'
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    title: 'Usuario'
  },
  {
    path: 'certidao',
    component: CertidaoComponent,
    title: 'Certidão'
  },
  {
    path: 'bemPublico',
    component: BemPublicoComponent,
    title: 'Bem Público'
  },
  {
    path: 'pastaArquivo',
    component: PastaArquivoComponent,
    title: 'Pasta Arquivo'
  }
];
