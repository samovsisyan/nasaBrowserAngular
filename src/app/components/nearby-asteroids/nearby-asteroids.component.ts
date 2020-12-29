import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NbServiceService} from '../../service/nb-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nearby-asteroids',
  templateUrl: './nearby-asteroids.component.html',
  styleUrls: ['./nearby-asteroids.component.scss']
})
export class NearbyAsteroidsComponent implements OnInit {
// startDate: string;
//   endDate: string;
  // date = '';
  response: any;
  // newDate  = '';

  constructor(public translate: TranslateService, private http: HttpClient) { }
  addDate(startDate: string, endDate: string): any {
    this.http.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=vsOioM79hYpi8fMRm0Bs5kwcffjwKdzXYc5LqwCs`
    ).subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
    console.log(11111, startDate);
    console.log(22222, endDate);
  }

  ngOnInit(): void {
  }

}
