import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLosPartidosComponent } from './todos-los-partidos.component';

describe('TodosLosPartidosComponent', () => {
  let component: TodosLosPartidosComponent;
  let fixture: ComponentFixture<TodosLosPartidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosLosPartidosComponent]
    });
    fixture = TestBed.createComponent(TodosLosPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
