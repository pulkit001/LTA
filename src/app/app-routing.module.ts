import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutreachComponent } from './components/content/outreach/outreach.component';
import { WorkshopsComponent } from './components/content/outreach/workshops/workshops.component';
import { TrainingComponent } from './components/content/outreach/training/training.component';
import { GuestlecComponent } from './components/content/outreach/guestlec/guestlec.component';
import { ConferencesComponent } from './components/content/outreach/conferences/conferences.component';

const routes: Routes = [
  { path: 'outreach',
    children:[
      {path:"workshops",component:WorkshopsComponent},
      {path:"conferences",component:ConferencesComponent},
      {path:"guest-lectures",component:GuestlecComponent},
      {path:"training-programs",component:TrainingComponent},
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
