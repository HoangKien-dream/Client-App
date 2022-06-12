import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppClientComponent} from './components/app-client/app-client.component'
import {ProfileComponent} from './components/profile/profile.component'
import {ListAccountComponent} from './components/list-account/list-account.component'


const routes: Routes = [
  {path:'appClient',component:AppClientComponent},
  {path:'appClient/profile',component:ProfileComponent},
  {path:'appClient/list',component:ListAccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
