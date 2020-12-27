import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-astronomy-picture',
  templateUrl: './astronomy-picture.component.html',
  styleUrls: ['./astronomy-picture.component.scss']
})
export class AstronomyPictureComponent implements OnInit {

  constructor(public translate: TranslateService) { }
  ngOnInit(): void {
  }

}
