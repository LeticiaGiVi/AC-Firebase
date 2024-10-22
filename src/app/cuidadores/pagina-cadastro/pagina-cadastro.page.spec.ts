import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaCadastroPage } from './pagina-cadastro.page';

describe('PaginaCadastroPage', () => {
  let component: PaginaCadastroPage;
  let fixture: ComponentFixture<PaginaCadastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
