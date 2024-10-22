import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { Pets } from 'src/app/models/pets';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {


  public listaPets: Pets[] = [];

  constructor(private petService: PetsService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.buscarPets(); 
  }

  
  buscarPets() {
    
    this.petService.buscarPets().subscribe(dadosRetorno => {
      
      this.listaPets = dadosRetorno.map((registro:any) => (
        {

          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()['nome'],
          especie: registro.payload.doc.data()['especie'],
          raca: registro.payload.doc.data()['raca'],
          idade: registro.payload.doc.data()['idade'],
          observacoes: registro.payload.doc.data()['observacoes']

        }
      )); 
    }); 
  }
  // Método para deletar registros no Firebase após confirmação
  async deletarPet(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirma exclusão deste arquivo?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.petService.deletar(id); // Chama o serviço e deleta o registro no Firebase
          },
        },
      ],
    });
    await alert.present();
    this.buscarPets();
  }

}
