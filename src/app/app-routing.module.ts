import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {NavbarInicialComponent} from './navbar-inicial/navbar-inicial.component';
import {GuiComponent} from './gui/gui.component';
import {GraphicsComponent} from './graphics/graphics.component';
const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'navbarInicial',
    component: NavbarInicialComponent
  },
  {
    path:'gui',
    component: GuiComponent
  },
  { path: '',   redirectTo: '/gui', pathMatch: 'full' },
  {
    path:'graph',
    component: GraphicsComponent
  },  { path: '**',component: GuiComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
