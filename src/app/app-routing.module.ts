import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':track',
        component: PreviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
