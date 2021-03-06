import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './components/content/home/home.component';
import { AboutComponent } from './components/content/about/about.component';
import { ProjectComponent } from './components/content/project/project.component';
import { PastComponent } from './components/content/past/past.component';
import { FacultiesComponent } from './components/content/faculties/faculties.component';
import { PeopleComponent } from './components/content/people/people.component';
import { AchievementsComponent } from './components/content/achievements/achievements.component';
import { OutreachComponent } from './components/content/outreach/outreach.component';
import { WorkshopsComponent } from './components/content/outreach/workshops/workshops.component';
import { ConferencesComponent } from './components/content/outreach/conferences/conferences.component';
import { TrainingComponent } from './components/content/outreach/training/training.component';
import { GuestlecComponent } from './components/content/outreach/guestlec/guestlec.component';
import { OutreachbtnComponent } from './components/content/outreach/outreachbtn/outreachbtn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    PastComponent,
    FacultiesComponent,
    PeopleComponent,
    AchievementsComponent,
    OutreachComponent,
    WorkshopsComponent,
    ConferencesComponent,
    TrainingComponent,
    GuestlecComponent,
    OutreachbtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
