import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackerService {
private apiUrl='http://localhost:5089/api/hacker/GetAllStories';

  constructor(private http:HttpClient) { }

  getStoryData():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
