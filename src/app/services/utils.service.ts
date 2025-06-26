import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, LoadingOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    private router: Router,
    private loadingController: LoadingController
  ) {}

  // ======== router ========
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  // ====== loading =======
  async presentLoading(options?: LoadingOptions) {
    const loading = await this.loadingController.create(options);
    await loading.present();
  }

  async dismissLoading(){
    return await this.loadingController.dismiss()
  }
}
