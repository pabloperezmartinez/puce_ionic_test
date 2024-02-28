import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  public toastButtons = [
    {
      text: 'Leer más'
    },
  ];
  constructor(private toastController: ToastController) {}

  async ionViewDidEnter() {
    /*const toast = await this.toastController.create({
      message: 'Estimado miembro de la comunidad: Las clases se han suspendido desde el día 1 de marzo de 2024 indefinidamente debido al paro nacional',
      color: 'danger',
      duration: 10000,
      position: 'top',
      buttons: this.toastButtons
    });

    await toast.present();*/
  }
}
