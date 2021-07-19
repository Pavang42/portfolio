import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BackgroundComponent } from './background/background.component';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { UpdateCountryComponent } from './update-country/update-country.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'countries', component: CountryComponent },
  { path: 'country/:id', component: UpdateCountryComponent},
  { path: 'background', component: BackgroundComponent},
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
