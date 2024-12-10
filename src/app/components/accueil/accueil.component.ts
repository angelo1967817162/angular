import { Component } from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {map, Observable, startWith} from 'rxjs';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger, MatOptgroup,
  MatOption
} from '@angular/material/autocomplete';
import {AsyncPipe} from '@angular/common';
import {MatAnchor, MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatInput} from '@angular/material/input';

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
    MatOptgroup
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  myControl = new FormControl('');
  options: string[] = ['cours par âge ', 'par date ', 'Option 3', 'Option 4'];
  filteredOptions: Observable<string[]>;


  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
