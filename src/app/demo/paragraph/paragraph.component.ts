import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DemoService } from '../demo.service';
import { DataItemModel } from 'src/app/shared/models/data';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {

	public records: Array<DataItemModel> = [];

    private _unsubscribeAll: Subject<any> = new Subject();

    /**
	 * Constructor
	 */
    constructor(
        public readonly demoService: DemoService
    ) {
        // listening data
		this.demoService.data$
		.pipe(takeUntil(this._unsubscribeAll))
		.subscribe(response => {
			console.log('RECIBO DATA: ', response);
			// set data
			this.records = response.data;
		});
    }

	// -----------------------------------------------------------------------------------------------------
	// @ Lifecycle hooks
	// -----------------------------------------------------------------------------------------------------
	
    /**
	 * On destroy
	 */
	ngOnDestroy(){
		this._unsubscribeAll.next(null);
		this._unsubscribeAll.complete();
	}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
        

}
