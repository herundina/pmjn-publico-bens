import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFuncionarioComponent } from './funcionarios.component';

describe('EditFuncionarioComponent', () => {
  let component: EditFuncionarioComponent;
  let fixture: ComponentFixture<EditFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFuncionarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
