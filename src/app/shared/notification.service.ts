import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http:HttpClient) { }
  user:User;

  sendEmail(user:User):Observable<User>{ 
    return this.http.post<User>(environment.emailUrl+'/sendmail',user);
  }
}
