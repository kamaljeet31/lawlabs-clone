import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { WhycloserComponent } from './whycloser/whycloser.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'whyCloser?', component: WhycloserComponent },
  { path: 'features', component: FeaturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
