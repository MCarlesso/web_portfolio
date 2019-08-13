import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListComponentComponent } from './list-component/list-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent, data: {state: 'home'} },
  { path: 'work', component: ListComponentComponent, data: {state: 'work'} },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
