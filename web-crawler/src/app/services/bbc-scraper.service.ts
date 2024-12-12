import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BbcScraperService {
  private apiUrl = 'http://localhost:3000/scrape'; // Backend API

  constructor(private http: HttpClient) {}

  fetchTitlesAndDescriptions(): Observable<{ title: string; description: string }[]> {
    return this.http.get<{ title: string; description: string }[]>(this.apiUrl);
  }
}
