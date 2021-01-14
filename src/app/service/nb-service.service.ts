import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NbServiceService {
  public API_KEY = 'vsOioM79hYpi8fMRm0Bs5kwcffjwKdzXYc5LqwCs';
  response: any;
  constructor(private http: HttpClient) { }
  public getAll(): any {
    console.log(555);
    return this.http.get('');

  }

  addDate(date: string): any {
    return this.http.get(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=vsOioM79hYpi8fMRm0Bs5kwcffjwKdzXYc5LqwCs`
    ).subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }
}
