import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { Pets } from 'src/app/models/pets';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-cadastro',
  templateUrl: './pagina-cadastro.page.html',
  styleUrls: ['./pagina-cadastro.page.scss'],
})
export class PaginaCadastroPage implements OnInit {

  pet: Pets = new Pets();

  constructor(
    private prodService: PetsService, 
    private route: Router 
  ) { }

  ngOnInit() {
  }

  
  salvar() {
    
    this.prodService.salvar(this.pet);
    this.route.navigateByUrl('pets/pagina-principal');
  }
}

