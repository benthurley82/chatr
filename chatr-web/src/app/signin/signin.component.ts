import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  displayName: string;

  constructor(
    private router: Router,
    private signinService: SigninService) { }

  ngOnInit() {
  }

  onSignin(): void {
    this.signinService.signin(this.displayName);
    let link = ['/chat'];
    this.router.navigate(link);
  }

}
