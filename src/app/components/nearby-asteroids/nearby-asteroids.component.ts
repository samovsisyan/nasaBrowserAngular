import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nearby-asteroids',
  templateUrl: './nearby-asteroids.component.html',
  styleUrls: ['./nearby-asteroids.component.scss']
})
export class NearbyAsteroidsComponent implements OnInit {

  constructor(public translate: TranslateService) { }
  ngOnInit(): void {
  }

}
