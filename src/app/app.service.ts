import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export	class	AppService	{
    private _baseUrl = "http://jsonplaceholder.typicode.com/users/1";
    constructor(private _http: Http){}

    getNumber() {
        return this._http.get(this._baseUrl).map(res => res.json());
    }
}