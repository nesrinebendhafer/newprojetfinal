import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ActivitesComponent } from './activites/activites.component';
import { AjouteractComponent } from './activites/ajouteract/ajouteract.component';
import { ListeactComponent } from './activites/listeact/listeact.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ErreurComponent } from './erreur/erreur.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:"home",title:"home",component:HomeComponent},
  {path:"events",title:"events",component:EventsComponent, canActivate:[authGuard]},
  {path:"aboutus",title:"aboutus",component:AboutusComponent},
  {path:"shop",title:"shop",component:ShopComponent},
  {path:"login",title:"login",component:LoginComponent},
  {path:"changepassword",title:"changepassword", component: ChangePasswordComponent },
  {path:"activity",title:"activity",component:ActivitesComponent, canActivate:[authGuard],
  children: [
    { path: 'activite', title: 'activite', component: ListeactComponent },
    { path: 'ajouteractivite', title: 'ajouteractivite', component: AjouteractComponent },
    { path: '', redirectTo: 'activite', pathMatch: 'full' }
  ]
},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",title:"erreur",component:ErreurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
