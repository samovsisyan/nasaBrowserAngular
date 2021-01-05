import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-submit-new-planet',
  templateUrl: './submit-new-planet.component.html',
  styleUrls: ['./submit-new-planet.component.scss']
})
export class SubmitNewPlanetComponent implements OnInit {
  newPlante?: FormGroup;
  submitted = false;

  constructor(public translate: TranslateService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newPlante = this.fb.group({
      planetName: ['', Validators.required],
      select: ['', Validators.required],
      diameterKm: ['', Validators.required],
      distanceMinKm: ['', Validators.required],
      yourName: ['', Validators.required],
      yourEmail: ['', Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get f(): any { return this.newPlante?.controls; }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newPlante?.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.newPlante?.value));
  }
}
