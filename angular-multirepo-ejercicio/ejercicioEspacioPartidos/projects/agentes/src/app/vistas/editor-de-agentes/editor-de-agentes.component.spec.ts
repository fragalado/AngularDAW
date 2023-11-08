import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDeAgentesComponent } from './editor-de-agentes.component';

describe('EditorDeAgentesComponent', () => {
  let component: EditorDeAgentesComponent;
  let fixture: ComponentFixture<EditorDeAgentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorDeAgentesComponent]
    });
    fixture = TestBed.createComponent(EditorDeAgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
