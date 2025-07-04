import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';

import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
})
export class AuthPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
      this.utilsService.routerLink('/tabs/home')
    }
  }
}
