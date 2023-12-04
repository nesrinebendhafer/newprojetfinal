import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ActivitesComponent } from './activites/activites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NesrineanesPipe } from './nesrineanes.pipe';
import { FooterComponent } from './footer/footer.component';
import { MenupersonneComponent } from './menupersonne/menupersonne.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { ListeactComponent } from './activites/listeact/listeact.component';
import { AjouteractComponent } from './activites/ajouteract/ajouteract.component';
import { ActComponent } from './activites/act/act.component';
import { UpdateComponent } from './activites/act/update/update.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    EventsComponent,
    AboutusComponent,
    ShopComponent,
    LoginComponent,
    ErreurComponent,
    ActivitesComponent,
    NesrineanesPipe,
    FooterComponent,
    MenupersonneComponent,
    MenuadminComponent,
    ListeactComponent,
    AjouteractComponent,
    ActComponent,
    UpdateComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
