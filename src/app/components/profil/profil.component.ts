import { Component } from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-profil',
  imports: [
    MatAnchor,
    RouterLink
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

}
