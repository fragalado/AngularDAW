import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPartidoComponent } from './mostrar-partido.component';

describe('MostrarPartidoComponent', () => {
  let component: MostrarPartidoComponent;
  let fixture: ComponentFixture<MostrarPartidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarPartidoComponent]
    });
    fixture = TestBed.createComponent(MostrarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
