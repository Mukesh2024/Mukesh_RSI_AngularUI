import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackerComponent } from './hacker/hacker.component';

const routes: Routes = [
  {path:'',redirectTo:'/hacker',pathMatch:'full'},
  {path:'hacker',component:HackerComponent}
  //{path:'',redirectTo:'hacker',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
