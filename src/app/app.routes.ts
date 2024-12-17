import { Routes } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {LoginComponent} from './components/login/login.component';
import {UserViewComponent} from './components/user/user-view/user-view.component';
import {UserCreateComponent} from './components/user/user-create/user-create.component';
import {UserEditComponent} from './components/user/user-edit/user-edit.component';
import {AccueilComponent} from './components/accueil/accueil.component';
import {ProfilComponent} from './components/profil/profil.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'tatoueur',
    title: 'Nos tatoueurs',
    component: UserComponent,
  },
  {
    path: 'tatoueur/:tatoueurId/view',
    component: UserViewComponent
  },
  {
    path: 'tatoueur/create',
    component: UserCreateComponent
  },
  {
    path: 'tatoueur/:tatoueurId/edit',
    component: UserEditComponent
  },
  {
    path: 'login',
    title: 'Se connecter',
    component: LoginComponent,
  },

  {
    path: 'profil',
    title: 'Mon profil',
    component: ProfilComponent,
  },
];
