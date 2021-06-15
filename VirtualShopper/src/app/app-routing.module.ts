import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestBoxComponent } from './request-box/request-box.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'userProfile',
    component: UserProfileComponent
  },
  {
    path: 'request',
    component: RequestBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }