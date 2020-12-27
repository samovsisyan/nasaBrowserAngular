import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouserl-basic',
  templateUrl: './carouserl-basic.component.html',
  styleUrls: ['./carouserl-basic.component.scss']
})
export class CarouserlBasicComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit(): void {
  }

}
