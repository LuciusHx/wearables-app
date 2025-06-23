import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, IonicModule],
})
export class CustomInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() icon: string;
  @Input() type: string;
  @Input() autocomplete: string;
  @Input() title: string;
  @Input() label: string;

  isPassword: boolean;

  constructor() {}

  ngOnInit() {
    if (this.type == 'password') {
      this.isPassword = true;
    }
  }
}
