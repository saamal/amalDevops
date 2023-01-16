import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/User";

const baseUrl = 'http://localhost:8090';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }


  getUserByUserName(userName:String): Observable<User> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userName",userName.toString());
    return this.http.get<User>(baseUrl+'/user/',{params:queryParams});
  }
  createUser(user:User):Observable<User>{
    return this.http.post<User>(baseUrl+'/user',user);
  }
}
