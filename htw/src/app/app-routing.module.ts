import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LooksComponent } from './looks/looks.component'
import { LookComponent } from './look/look.component'

const routes: Routes = [
  { path: '', redirectTo: '/looks', pathMatch: 'full'},
  { path: 'looks', component: LooksComponent},
  { path: 'look/:id', component: LookComponent},
  { path: '**', redirectTo: '/looks', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
