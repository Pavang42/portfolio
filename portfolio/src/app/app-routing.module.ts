import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { UpdateCountryComponent } from './update-country/update-country.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'countries', component: CountryComponent },
  { path: 'country/:id', component: UpdateCountryComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
