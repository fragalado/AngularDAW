import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgendasComponent } from './lista-agendas.component';

describe('ListaAgendasComponent', () => {
  let component: ListaAgendasComponent;
  let fixture: ComponentFixture<ListaAgendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAgendasComponent]
    });
    fixture = TestBed.createComponent(ListaAgendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
