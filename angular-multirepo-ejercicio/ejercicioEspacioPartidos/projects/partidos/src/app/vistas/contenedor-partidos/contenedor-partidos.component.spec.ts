import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPartidosComponent } from './contenedor-partidos.component';

describe('ContenedorPartidosComponent', () => {
  let component: ContenedorPartidosComponent;
  let fixture: ComponentFixture<ContenedorPartidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorPartidosComponent]
    });
    fixture = TestBed.createComponent(ContenedorPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
