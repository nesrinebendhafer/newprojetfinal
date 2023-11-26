import { Component, Input } from '@angular/core';
import { Evenement } from './evenement';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent{
  @Input () event:Evenement
  clicked:boolean=false;
  affiche(){
    this.clicked=!this.clicked
}
}
