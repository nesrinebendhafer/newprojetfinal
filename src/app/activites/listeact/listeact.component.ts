// listeact.component.ts
import { Component } from '@angular/core';
import { Act } from '../classes/act';
import { Comite } from '../classes/comite';
import { ActService } from '../services/act.service';

@Component({
  selector: 'app-listeact',
  templateUrl: './listeact.component.html',
  styleUrls: ['./listeact.component.css']
})
export class ListeactComponent {
  lesact: Act[] = [];
  allact: Act[] = [];
  searchComite: string;
  lescomite: string[] = Object.values(Comite);

  constructor(private actService: ActService) {}

  ngOnInit(): void {
    this.actService.getAct().subscribe(
      data => {
        this.lesact = data;
        this.allact = data;
      },
      error => {
        console.error('Error fetching events:', error);
      }
    );
  }

  searchByComite() {
    if (this.searchComite) {
      this.lesact = this.allact.filter(event => event.comite === this.searchComite);
      if (this.lesact.length === 0) {
        alert('Aucun événement trouvé pour le comité donné.');
      }
    } else {
      alert('Veuillez sélectionner un comité pour effectuer une recherche.');
    }
  }

  hideFoundEvents() {
    this.lesact = [];
  }

  onSuppression(id: number) {
    this.lesact = this.lesact.filter(e => e.id !== id);
    this.allact = this.allact.filter(e => e.id !== id);
  }
}
