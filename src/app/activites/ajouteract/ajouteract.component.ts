import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';
import { Act } from '../classes/act';
import { Comite } from '../classes/comite';
import { ActService } from '../services/act.service';

@Component({
  selector: 'app-ajouteract',
  templateUrl: './ajouteract.component.html',
  styleUrls: ['./ajouteract.component.css']
})
export class AjouteractComponent {


  constructor( private router: Router,private fb:FormBuilder,private act:ActService){}
  lescomite = Object.values(Comite);
  lesact: Act[];
  actForm: FormGroup;
  searchComite: string; 
  foundEvents: Act[] = []; 
  deleteId: number; 
  modifyId: number;
  modifyForm: FormGroup;
  showModifyForm = false;


   ngOnInit(): void {
    this.act.getAct().subscribe(
      data => this.lesact = data
    );
    this.actForm = this.fb.group({
      id: [Validators.required],
      libelle: ['', [Validators.required, Validators.minLength(20)]],
      photo: ['', Validators.required],
      nbP: [0, [Validators.required, Validators.min(10)]],
      type: [true],
      comite: [Comite.Autres],
      date: [],
      lieu: this.fb.array([]),
      description: [''] 
    });
    this.actForm.get('type')?.setValue(false);
    this.actForm.get('libelle')?.valueChanges
      .subscribe(
        data => console.log(data)
      );
  }

  onSubmitForm() {
    if (this.actForm.valid) {
      this.act.addAct(this.actForm.value).subscribe(data => this.lesact.push(data));
      alert("ajouter avec succès");
      this.actForm.reset({ Comite: Comite.Autres });
      this.leslieu.clear();
    }
  }

  onResetForm() {
    this.actForm.reset({ Comite: Comite.Autres });
    this.leslieu.clear();
  }

  public get leslieu(){
    return this.actForm.get('lieu') as FormArray;
  }
  
  onAjouter(){
    this.leslieu.push(this.fb.control('',[ Validators.required,Validators.minLength(2)]));
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
