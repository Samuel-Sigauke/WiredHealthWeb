import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './pages/welcome/log-in/log-in.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WelcomeModule } from './pages/welcome/welcome.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    WelcomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
