import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Create Module Syntax : ng g m foldername/compontentname --route compontentname --module app.module  this will automatically Creating
// Routing in app-routing-moudule.ts

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

{ path: '', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },

{ path: 'social', loadChildren: () => import('./pages/socialmedia/socialmedia.module').then(m => m.SocialmediaModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})], //enable preloading for quick navigation
  exports: [RouterModule]
})
export class AppRoutingModule { }
