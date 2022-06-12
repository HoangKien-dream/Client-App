import { Component, OnInit } from '@angular/core';
import {ResourceServerService} from '../../services/resource-server.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
data:any
  constructor(private resource:ResourceServerService,
              private router:Router) { }

  ngOnInit(): void {
  this.getProfile()
  }
  getProfile(){
    this.resource.getProfile()
      .subscribe({
        next:(res)=>{
          this.data = res
          console.log(this.data)
        },
        error:(e)=>console.log(e)
      })

  }

  logout() {
    localStorage.clear()
    alert("Đăng xuât thành công")
    this.router.navigate(['login'])
  }
}
