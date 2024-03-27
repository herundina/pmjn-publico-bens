import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaArquivoComponent } from './pasta-arquivo.component';

describe('PastaArquivoComponent', () => {
  let component: PastaArquivoComponent;
  let fixture: ComponentFixture<PastaArquivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastaArquivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastaArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
