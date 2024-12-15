import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeroComponent } from './hero/hero.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CompetitionsDetailsComponent } from './competitions-details/competitions-details.component';
import { ResultsComponent } from './results/results.component';
import { MembersComponent } from './members/members.component';
import { SpeciesComponent } from './species/species.component';
import { ResultsDetailsComponent } from './results-details/results-details.component';
import { TopThreeUserComponent } from './top-three-user/top-three-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'competitionsDetails/:id', component: CompetitionsDetailsComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'members', component: MembersComponent},
  { path: 'species', component: SpeciesComponent},
  { path: 'resultsDetails/:id', component: ResultsDetailsComponent},
  { path: 'topThreeUser', component: TopThreeUserComponent},
  
  { path: '', component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
