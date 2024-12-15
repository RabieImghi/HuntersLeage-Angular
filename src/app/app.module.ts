import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeroComponent } from './hero/hero.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CompetitionsDetailsComponent } from './competitions-details/competitions-details.component';
import { SpeciesComponent } from './species/species.component';
import { ResultsComponent } from './results/results.component';
import { MembersComponent } from './members/members.component';
import { ResultsDetailsComponent } from './results-details/results-details.component';
import { TopThreeUserComponent } from './top-three-user/top-three-user.component';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HeroComponent,
    CompetitionsComponent,
    CompetitionsDetailsComponent,
    SpeciesComponent,
    ResultsComponent,
    MembersComponent,
    ResultsDetailsComponent,
    TopThreeUserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
