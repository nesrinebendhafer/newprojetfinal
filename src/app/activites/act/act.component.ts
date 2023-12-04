import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Act } from '../classes/act';
import { Comite } from '../classes/comite';
import { ActService } from '../services/act.service';

@Component({
  selector: 'app-act',
  templateUrl: './act.component.html',
  styleUrls: ['./act.component.css']
})
export class ActComponent implements OnInit {
  @Input() act!: Act;
  @Output() notify = new EventEmitter<number>();
  lescomite: string[] = Object.values(Comite);
  display: boolean = false;

  constructor(private actService: ActService) { }

  ngOnInit(): void {
  }

  onSupprimer(id: number) {
    this.actService.deleteAct(id)
      .subscribe(() => this.notify.emit(id));
  }

  toggleDisplay() {
    this.display = !this.display;
  }

  onModifier() {
    this.actService.updateAct(this.act.id, this.act)
      .subscribe(() => {
        this.toggleDisplay();
      });
  }

  cancelModification() {
  
    this.toggleDisplay(); 
  }
  
}

