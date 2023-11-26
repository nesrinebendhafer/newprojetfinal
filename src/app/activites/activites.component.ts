import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Act } from './classes/act';
import { Comite } from './classes/comite';
import { ActService } from './services/act.service';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent  implements OnInit {
  constructor( private router: Router, private authService: AuthService,private fb:FormBuilder,private act:ActService){}
  lescomite = Object.values(Comite);
  lesact: Act[];
  actForm: FormGroup;
  searchComite: string; 
  foundEvents: Act[] = []; 
  deleteId: number; 
  modifyId: number;
  modifyForm: FormGroup; // Declare modifyForm property in your component
  showModifyForm = false;


  ngOnInit(): void {
    this.act.getAct().subscribe(
      data => this.lesact = data
    )
    this.actForm = this.fb.nonNullable.group({
      id: [(Math.random),Validators.required],
      libelle:['',[Validators.required,Validators.minLength(20)]],
      nbP: [0,[Validators.required,Validators.min(10)]],
      type:[true],
      comite: [Comite.Autres],
      date:[],
      lieu:this.fb.array([])
    })
    this.actForm.get('type')?.setValue(false);
    this.actForm.get('libelle')?.valueChanges
    .subscribe(
      data => console.log(data)
    )
  }

  onSubmitForm(){
     this.act.addAct(this.actForm.value).subscribe
    ( data => this.lesact.push(data))
  }

  onResetForm(){
    this.actForm.reset({Comite:Comite.Autres});
    this.leslieu.clear();
  }

  public get leslieu(){
    return this.actForm.get('lieu') as FormArray;
  }
  onAjouter(){
    this.leslieu.push(this.fb.control('',[ Validators.required,Validators.minLength(2)]));
  }

  searchByComite() {
    if (this.searchComite) {
      this.foundEvents = this.lesact.filter(event => event.comite === this.searchComite);
      if (this.foundEvents.length === 0) {
        console.log('Aucun événement trouvé pour le comité donné.');
      }
    } else {
      console.log('Veuillez entrer un comité pour effectuer une recherche.');
    }
  }

  hideFoundEvents() {
    this.foundEvents = []; }

  deleteActivity(id: number) {
    const index = this.lesact.findIndex(event => event.id === this.deleteId);
    if (index !== -1) {
      const deletedEvent = this.lesact[index];
      this.lesact.splice(index, 1);
      alert('L\'activité d\'ID ' + deletedEvent.id + ' a été supprimée.');
      this.deleteId = null;
    } else {
      alert("L'activité d'ID " + this.deleteId + " n'a pas été trouvée.");
    }
    this.act.deleteAct(id).subscribe();
  }

  
  modifyActivity() {
    const selectedEvent = this.lesact.find(event => event.id === this.modifyId);
    if (selectedEvent) {
      this.showModifyForm = true; 
      this.modifyForm = this.fb.group({
        id: [selectedEvent.id, Validators.required],
        libelle: [selectedEvent.libelle, [Validators.required, Validators.minLength(20)]],
        nbP: [selectedEvent.nbP, [Validators.required, Validators.min(10)]],
        type: [selectedEvent.type],
        comite: [selectedEvent.comite],
        date: [selectedEvent.date],
        lieu: this.fb.array(selectedEvent.lieu || []) 
      });
    } else {
      alert("L'activité d'ID " + this.modifyId + " n'a pas été trouvée pour modification.");
    }
  }
  
  onSaveChanges() {
    if (this.modifyForm.valid) {
      const modifiedEvent = this.modifyForm.value;
      const modifiedIndex = this.lesact.findIndex(event => event.id === modifiedEvent.id);
      if (modifiedIndex !== -1) {
        this.lesact[modifiedIndex] = modifiedEvent;
        this.showModifyForm = false;
      } else {
        alert("L'activité d'ID " + modifiedEvent.id + " n'a pas été trouvée pour modification.");
      }
    } 
  }
  
cancelModification() {
  this.showModifyForm = false;
}
  onLogout(){
    this.router.navigate(['/login']);return true ;
  }

  public get idAct(){
    return this.actForm.get('id');
    }
  public get libelleAct(){
    return this.actForm.get('libelle');
    }
    isValidPattern() {
      const libelleControl = this.libelleAct;
      return libelleControl?.errors?.['minlength'] && libelleControl.dirty;
    }
    isValidrequired(){
      return this.libelleAct?.errors?.['required'] && this.libelleAct?.dirty;
}
public get nbPProduct(){
  return this.actForm.get('nbP');
}
    isValidnbP(){
      return this.nbPProduct?.errors?.['required'] && this.nbPProduct?.dirty;
}
    isValidminnbP(){
      return this.nbPProduct?.errors?.['min'] && this.nbPProduct?.dirty;
}
public get lieuAct(){
  return this.actForm.get('lieu') as FormArray;
}
}