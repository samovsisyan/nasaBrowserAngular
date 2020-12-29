import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NbServiceService {
  public API_KEY = 'vsOioM79hYpi8fMRm0Bs5kwcffjwKdzXYc5LqwCs';

  constructor(private http: HttpClient) { }
  public getAll(): any {
    console.log(555);
    return this.http.get('');

  }
}
