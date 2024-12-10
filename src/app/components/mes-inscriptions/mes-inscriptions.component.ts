import { Component } from '@angular/core';
import {MatAnchor} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-mes-inscriptions',
  imports: [
    MatAnchor,
    RouterLink
  ],
  templateUrl: './mes-inscriptions.component.html',
  styleUrl: './mes-inscriptions.component.css'
})
export class MesInscriptionsComponent {

}
