import { Component } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

    /**
	 * Constructor
	 */
    constructor(
        public readonly demoService: DemoService
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
        

    loadData(): void {
        console.log('SOLICITO DATA');
        this.demoService.getData();
    }

}
