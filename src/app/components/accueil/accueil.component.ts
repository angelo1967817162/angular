import { Component,OnInit, ViewChild } from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {map, Observable, startWith} from 'rxjs';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger, MatOptgroup,
  MatOption
} from '@angular/material/autocomplete';
import {AsyncPipe, DatePipe} from '@angular/common';
import {MatAnchor, MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatInput} from '@angular/material/input';
import {CoursService} from '../../services/cours.service';
import {Tatoueur} from '../../models/tatoueur.model';
import {TatoueurService} from '../../services/tatoueur.service';
import {Cours} from '../../models/cours.model';

@Component({
  selector: 'app-accueil',
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    AsyncPipe,
    MatButton,
    MatAnchor,
    RouterLink,
    MatInput,
    MatAutocompleteOrigin,
    MatOptgroup,
    DatePipe
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{
  myControl = new FormControl('');
  options: string[] = ['cours par âge ', 'par date ', 'Option 3', 'Option 4'];
  filteredOptions: Observable<string[]>;
  cours: Cours[] = [];
  displayedColumns: string[] = ['nom', 'style'];




  constructor(private coursService: CoursService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  ngOnInit():void{
//Récupère les données du tatoueurService.
    this.coursService.getCours().subscribe((data:Cours[])=> {
//Mets les données dans notre variable de classe tatoueurs
      this.cours = data;
    });
  }

}
