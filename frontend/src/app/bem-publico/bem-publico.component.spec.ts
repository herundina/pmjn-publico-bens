import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemPublicoComponent } from './bem-publico.component';

describe('BemPublicoComponent', () => {
  let component: BemPublicoComponent;
  let fixture: ComponentFixture<BemPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BemPublicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BemPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
