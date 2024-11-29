import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {CookieComponent} from './cookie/cookie.component';
import {MatToolbar} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatSidenavContainer, MatNavList, MatSidenav, MatListItem, MatIcon, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angelo';
  date = new Date();
  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
  }
  authenticated() { return this.auth.authenticated; }
  logout(){this.auth.logout();}
}
