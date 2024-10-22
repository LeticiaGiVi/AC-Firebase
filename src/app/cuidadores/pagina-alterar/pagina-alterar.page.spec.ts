import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaAlterarPage } from './pagina-alterar.page';

describe('PaginaAlterarPage', () => {
  let component: PaginaAlterarPage;
  let fixture: ComponentFixture<PaginaAlterarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlterarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
