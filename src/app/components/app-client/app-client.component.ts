import {Component, OnInit} from '@angular/core';
import {ResourceServerService} from '../../services/resource-server.service'
import {Router, RouterModule, Routes, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-app-client',
  templateUrl: './app-client.component.html',
  styleUrls: ['./app-client.component.css']
})
export class AppClientComponent implements OnInit {
  clientId = "Znbx0uMB8q";
  clientSecret = "TyIWIGKX6B";
  code: any
  token: any

  constructor(private authentica: ResourceServerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.code = params['code'];
      console.log(this.code); // Print the parameter to the console.
    });
   this.token = window.localStorage.getItem("vodung")
    if (this.code != null){
      if (this.token == null){
        this.getToken()
      }
    }
  }

  getToken() {
    this.authentica.getToken(this.code, this.clientId, this.clientSecret)
      .subscribe({
        next: (res) => {
          this.token = res.accessToken;
          localStorage.setItem("vodung", this.token);
        },
        error: (e) => console.error(e)
      })
  }

  loginGetProfile() {
    if (this.token == null) {
      window.location.assign('http://localhost:62604/login')
    } else {
      this.router.navigate(['appClient/profile'])
    }
  }

  loginGetAccount() {
    if (this.token == null) {
      window.location.assign('http://localhost:62604/login')
    } else {
      this.router.navigate(['appClient/list'])
    }
  }
}
