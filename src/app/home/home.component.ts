import { Component } from '@angular/core';
import { Home } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
news:Home[]=[
  {id:1,image:"../../assets/2.jpg",date:"14 Octobre 2023 à 16:20",paragraphe:"Campagne de Dons pour le Peuple Palestinien : Le Croissant Rouge Appelle à la Solidarité via les Opérateurs Tunisiens"},
  {id:2,image:"../../assets/1.jpg",date:"23 Octobre 2023 à 10:32",paragraphe:"Poursuite de la campagne de collecte de dons au profit des Gazaouis"},
  {id:3,image:"../../assets/3.jpg",date:"23 Octobre 2023 à 12:24",paragraphe:"Les banques et les établissements financiers se mobilisent afin de réunir des fonds au peuple palestinien"},
  {id:4,image:"../../assets/4.jpg",date:"21 Août 2023 à 14:04",paragraphe:"Sidi Bouzid: Le Croissant rouge tunisien organise des campagnes pour les migrants subsahariens"},
]
}
