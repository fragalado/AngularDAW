import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAgentesComponent } from './lista-de-agentes.component';

describe('ListaDeAgentesComponent', () => {
  let component: ListaDeAgentesComponent;
  let fixture: ComponentFixture<ListaDeAgentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeAgentesComponent]
    });
    fixture = TestBed.createComponent(ListaDeAgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
