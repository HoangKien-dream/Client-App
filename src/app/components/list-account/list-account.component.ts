import { Component, OnInit } from '@angular/core';
import {ResourceServerService} from '../../services/resource-server.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  data:any;
  constructor(private resource:ResourceServerService,
              private router:Router) { }

  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.resource.getList()
      .subscribe({
        next:(res)=>{
          this.data = res;
          console.log(res)
        },
        error:(e)=>console.error(e)
      })
  }
  logout() {
    alert("Đăng xuât thành công")
    localStorage.clear()
    this.router.navigate(['login'])
  }

}
