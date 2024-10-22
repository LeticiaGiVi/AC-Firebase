import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { Pets } from 'src/app/models/pets';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-alterar',
  templateUrl: './pagina-alterar.page.html',
  styleUrls: ['./pagina-alterar.page.scss'],
})
export class PaginaAlterarPage implements OnInit {

  pet: Pets = new Pets();


  constructor(
    private prodService: PetsService, 
    private route: Router, 
    private rotaAtiva: ActivatedRoute 
  ) {

    this.pet.id = this.rotaAtiva.snapshot.params['id'];
  }

  ngOnInit() {
    this.prodService.buscarPorId(this.pet.id).subscribe((dados:any) => {

      this.pet.nome=dados['nome'];
      this.pet.especie=dados['especie'];
      this.pet.raca=dados['raca'];
      this.pet.idade=dados['idade'];
      this.pet.observacoes=dados['observacoes'];

    });
  }

  salvar() {
    this.prodService.alterar(this.pet);
    this.route.navigateByUrl('pets/pagina-principal');
  }

}
