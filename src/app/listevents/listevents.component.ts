import { Component } from '@angular/core';
import { Evenement } from '../events/evenement';

@Component({
  selector: 'app-listevents',
  templateUrl: './listevents.component.html',
  styleUrls: ['./listevents.component.css']
})
export class ListeventsComponent {
  lesevenement: Evenement[] = [
    {id:1,libelle:'Collecte de fonds pour le peuple palestinien',date:'12 novembre 2023',lieu:'Qantara Al Ghazala',description:'Collecte de fonds pour le peuple palestinien le 12 novembre 2023 en partenariat avec lassociation Qantara Al Ghazala sur la place Sherine Abu Aqil 🇹🇳',image:'../../assets/event1.jpg'},
    {id:2,libelle:'Livrer les dons à lAgence nationale',date:'28 octobre 2023',lieu:'Megrine',description:'Le départ des voitures vers Maghrine pour livrer les dons à lAgence nationale au siège de Maghrine',image:'../../assets/event2.jpg'},
    {id:3,libelle:'La participation de la délégation',date:'2 mars 2023',lieu:'Manouba',description:'La participation de la délégation locale de la Croix-Rouge tunisienne à Raoued et de la délégation locale de la Manouba, sous la supervision de la délégation nationale, à la célébration du Jour mondial de la protection civile le 1er mars avec la Protection civile dAriana sous le thème Le rôle de linformation dans lidentification des risques',image:'../../assets/event3.jpg'},
    {id:4,libelle:'Campagne de Collecte de Fonds',date:'28 mars 2023',lieu:'MG Ariana',description:'Suite à la campagne nationale pour aider nos frères en Syrie et en Turquie, annoncée par Son Excellence le Président de la République, la campagne de collecte de fonds a débuté à la municipalité de MG Ariana',image:'../../assets/event4.jpg'},
    {id:5,libelle:'Tri des produit',date:'12 mars 2023',lieu:'Soukra',description:'Sélection et tri méticuleux des produits alimentaires en préparation du mois de Ramadan',image:'../../assets/event5.jpg'},
    {id:6,libelle:'Journée des volontaires artistes ',date:'12 janvier 2023',lieu:'Manzah 6',description:'Journée des volontaires artistes, lors de laquelle les bénévoles présentent leurs œuvres en présence du jury et de grands artistes',image:'../../assets/event6.jpg'},
  ]
}
