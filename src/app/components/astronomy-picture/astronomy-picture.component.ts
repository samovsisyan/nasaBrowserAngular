import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {NbServiceService} from '../../service/nb-service.service';

@Component({
  selector: 'app-astronomy-picture',
  templateUrl: './astronomy-picture.component.html',
  styleUrls: ['./astronomy-picture.component.scss']
})
export class AstronomyPictureComponent implements OnInit {

  response: any;
  newDate = '';

  constructor(public translate: TranslateService, private http: HttpClient) {
  }



  addDate(date: string): any {
    this.http.get(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=vsOioM79hYpi8fMRm0Bs5kwcffjwKdzXYc5LqwCs`
    ).subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

  ngOnInit(): void {
  }


}
