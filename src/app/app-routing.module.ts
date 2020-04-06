import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/core/components/home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
