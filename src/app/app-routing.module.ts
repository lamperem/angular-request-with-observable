import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },

  // Demo module
  {
    path: 'demo',
    component: DemoComponent,
    children: [
        { path: '' , loadChildren:() =>  import ('./demo/demo.module').then(m => m.DemoModule) },
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
