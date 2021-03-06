import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLoginMode = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  onLogin() {
    this.isLoading = true;
    this.authService.login();

    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEl => {
        loadingEl.present();

        setTimeout(() => {
          this.router.navigateByUrl('/places/tabs/discover');
          loadingEl.dismiss();
          this.isLoading = false;
        }, 1500);

      });
  }
  onSubmit(form: NgForm) {
    //console.log(form)
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);
    
    if(this.isLoginMode){
      //send login request
    }else{
      //send signup request
    }
  }

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
