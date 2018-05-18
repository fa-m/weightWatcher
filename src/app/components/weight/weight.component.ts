import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../app.constants';

import { WeightModel } from './WeightModel';

@Component({
  selector: 'ww-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  apiURL: string;
  weights: WeightModel[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.apiURL = API_URL; //'https://api.thingspeak.com/channels/430454/feeds.json?api_key=0TFBKM2JT37VDIL3';
    this.getAllWeights();

  }

  getAllWeights() {
    this.http.get(this.apiURL).subscribe((data) => {
      this.weights = data['feeds'];
    });
  }

}
