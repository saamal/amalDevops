import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {Trajet} from "../model/Trajet";
import {Offre} from "../model/Offre";

const baseUrl = 'http://localhost:8090';

@Injectable({
    providedIn: 'root'
})
export class TrajetService {

    public addOffre(offre: Offre): Observable<Offre> {
        return this.http.post<Offre>(baseUrl + "/offre", offre)
    }

    public getOffres():Observable<Trajet[]>{
        return this.http.get<Trajet[]>(baseUrl+"/offres")
    }

    constructor(private http: HttpClient) {
    }
}
