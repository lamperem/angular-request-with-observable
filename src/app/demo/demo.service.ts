import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { DataModel } from '../shared/models/data';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

    private _data: BehaviorSubject<any>  = new BehaviorSubject({});

    constructor(
        private readonly http: HttpClient
    ) {
        
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------
    
    /**
     * Getter for messages
     */

    set data (data: DataModel){
        this._data.next(data);
    }

    get data$() {
        return this._data.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ public Methods
    // -----------------------------------------------------------------------------------------------------  

    public getData(): void {
        const url = `https://reqres.in/api/users?page=1`;

        this.http.get(url, {})
        .subscribe((data: any) => {
            this.data = data;
        });
    }
}
