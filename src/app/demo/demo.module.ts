import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

// Share
import { SharedModule } from '../shared/shared.module';

// Components
import { DemoComponent } from './demo.component';
import { ButtonComponent } from './button/button.component';
import { ParagraphComponent } from './paragraph/paragraph.component';

const routes: Route[] = [
	{
		path: '',
		component: DemoComponent,
	}
]

@NgModule({
  declarations: [
    ButtonComponent,
    ParagraphComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DemoModule { }
