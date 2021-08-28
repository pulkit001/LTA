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
    OutreachComponent
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
