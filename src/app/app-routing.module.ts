import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ActivitesComponent } from './activites/activites.component';
import { ErreurComponent } from './erreur/erreur.component';
import { HomeComponent } from './home/home.component';
import { ListeventsComponent } from './listevents/listevents.component';
import { authGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:"home",title:"home",component:HomeComponent},
  {path:"events",title:"events",component:ListeventsComponent},
  {path:"aboutus",title:"aboutus",component:AboutusComponent},
  {path:"shop",title:"shop",component:ShopComponent},
  {path:"login",title:"login",component:LoginComponent},
  {path:"activity",title:"activity",component:ActivitesComponent, canActivate:[authGuard]},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",title:"erreur",component:ErreurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
