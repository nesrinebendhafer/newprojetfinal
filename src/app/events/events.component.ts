import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Act } from '../activites/classes/act';
import { ActService } from '../activites/services/act.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  lesevent$!: Observable<Act[]>;
  clickedIndex: number = -1; 

  constructor(private actservice: ActService) {}

  ngOnInit(): void {
    this.lesevent$ = this.actservice.getAct();
  }

  affiche(index: number): void {
    this.clickedIndex = this.clickedIndex === index ? -1 : index;
  }

  isDescriptionShown(index: number): boolean {
    return this.clickedIndex === index;
  }
}
