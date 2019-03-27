import { Component, OnInit } from '@angular/core';
import {SignUp} from './email';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: SignUp = {
    phrase : "Ajouter votre adresse mail"
  }

  constructor() { }

  ngOnInit() {
  }

}
