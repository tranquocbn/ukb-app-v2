import { Injectable } from '@angular/core';
import { LoadingController, SpinnerTypes, ToastController } from '@ionic/angular';
import { ColorType, PositionType } from '../type';


@Injectable()
export class ShareService {
    constructor(
        private toastController: ToastController,
        private loadingCtrl: LoadingController
    ) {}

    public async toast(message: string, color: ColorType, position: PositionType) {
        const toast = await this.toastController.create({
            message,
            position,
            color,
            duration: 1500,
        });
        await toast.present();
        return toast;
    }

    public async loading(message: string, spinner: SpinnerTypes | null = 'lines-sharp-small', duration?: number) {
        const loading = await this.loadingCtrl.create({
            message,
            duration,
            spinner
        });
        await loading.present();
        return loading;
    }

}
