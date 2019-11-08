import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlayComponent } from './play/play.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'play',
    component: PlayComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : '**',
    redirectTo : '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
