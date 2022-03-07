import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:"full"},
      {path:'**', component: PageNotFoundComponent, pathMatch:'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
