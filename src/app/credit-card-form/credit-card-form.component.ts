import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss'],
})
export class CreditCardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    cardNumber: new FormControl('', [Validators.required]),
    expiration: new FormControl('', [Validators.required]),
    securityCode: new FormControl('', [Validators.required]),
  });

  constructor() {
    console.log(this.cardForm);
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(`form was submitted`);
  }
}
