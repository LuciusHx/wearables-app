import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar } from "@ionic/angular/standalone";
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class AdminPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
