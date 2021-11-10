import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:9090/api/user';
  private baseUrl2 = 'http://localhost:9090/api/user';
  private baseUrl1= 'http://localhost:9090/api/user';

  constructor(private http: HttpClient) { }

  

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  getUserById(id: number): Observable<User>{
    //console.log(id);
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  
}
