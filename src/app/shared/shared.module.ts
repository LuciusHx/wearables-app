import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
  exports: [IonicModule, CommonModule, HeaderComponent, CustomInputComponent],
  imports: [CommonModule, IonicModule, HeaderComponent, CustomInputComponent],
})
export class SharedModule {}
