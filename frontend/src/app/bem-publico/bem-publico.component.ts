import { Component, EventEmitter, Input, Output, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-bem-publico',
  standalone: true,
  imports: [],
  templateUrl: './bem-publico.component.html',
  styleUrl: './bem-publico.component.css'
})
export class BemPublicoComponent {
  //@Output() - especifica saída de dados
    //por exemplo, evento emit()
    @Output() abrirWindow  = new EventEmitter<void>();

  //@Input() - especifica entrada de dados
  @Input({
    //required: true,
    transform: toNumber
  }) value: string = "";

  @Input({transform: numberAttribute}) anotherValue = 0;
  //função integrada de tipo

}

  function toNumber(valor: number) {
    return `Valor é igual a ${valor} `
  }
