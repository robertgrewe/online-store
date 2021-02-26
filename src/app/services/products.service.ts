
import {throwError as observableThrowError, Observable} from 'rxjs';
/**
 * Created by andrew.yang on 7/27/2017.
 */

import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

    constructor(public http: HttpClient) { }

    public getProducts(dataURL:string){
        return this.http.get(dataURL)
            // .map((res:Response) => res.json())
            // .catch((error:any) => observableThrowError(error || 'Server error'));
    }
}
