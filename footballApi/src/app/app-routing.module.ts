import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMatchesComponent } from './list-matches/list-matches.component';
import { ViewMatchComponent } from './view-match/view-match.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListMatchesComponent },
  { path: 'view-match/:id', component: ViewMatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
