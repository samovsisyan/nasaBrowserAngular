import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-submit-new-planet',
  templateUrl: './submit-new-planet.component.html',
  styleUrls: ['./submit-new-planet.component.scss']
})
export class SubmitNewPlanetComponent implements OnInit {

  constructor(public translate: TranslateService) { }
  ngOnInit(): void {
  }

}
