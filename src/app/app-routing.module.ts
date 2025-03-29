import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';


// Create Module Syntax : ng g m foldername/compontentname --route compontentname --module app.module  this will automatically Creating
// Routing in app-routing-moudule.ts

const routes: Routes = [
  { path: 'about', component: AboutComponent },

  // { path: 'contact', component: ContactComponent },
  // { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})], //enable preloading for quick navigation
  exports: [RouterModule]
})
export class AppRoutingModule { }
