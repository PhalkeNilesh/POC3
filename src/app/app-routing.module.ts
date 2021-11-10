import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';


 const routes: Routes = [
  { path : '', redirectTo: 'users', pathMatch: 'full'},
   { path : 'users', component: UserListComponent}, 
   { path : 'add-user', component: AddUserComponent},
   { path : 'update-user/:id', component: UpdateUserComponent},
   { path : 'user-details/:id', component:UserDetailsComponent}
   
 ]; 

// const routes: Routes = [
//   { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
//   { path: 'tutorials', component: TutorialsListComponent },
//   { path: 'tutorials/:id', component: TutorialDetailsComponent },
//   { path: 'add', component: AddTutorialComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
