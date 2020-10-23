import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {catchError, map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {throwError as observableThrowError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class HttpDelegateService {

    accessToken: string;
    constructor(protected http: HttpClient) {
    }

    getAPI(url: string): Observable<any> {
        const httpOptions = {headers: {'Content-Type': 'application/json'}};
        return this.http.get(url, httpOptions).pipe(map(this.extractData), catchError(this.handleError));
    }

    postAPI(url: string, body: any, httpOptions: {headers: {}}): Observable<any> {
        return this.http.post(url, body, httpOptions).pipe(map(this.extractData),
            catchError(this.handleError));
    }

    extractData(body: any) {
        return body || {};
    }

    handleError(error: any) {
        return observableThrowError(error);
    }
}
