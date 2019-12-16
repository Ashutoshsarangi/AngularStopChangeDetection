import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changeDetectionCore';
  _time;
  constructor(private zone: NgZone) {
    this._time = Date.now();
    zone.runOutsideAngular(() => {
      setInterval(() => {
        this._time = Date.now();
      }, 1);
    });
  }

  public testFunction = () => {
    console.log('Hey I am the testFunction');
  }

  get timeTemplateRef() {
    // console.log('1');
    return this._time;
  }

}
