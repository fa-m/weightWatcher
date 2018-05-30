import {Component, OnInit} from '@angular/core';

import { WeightModel } from './WeightModel';
import { WeightService } from '../../services/weight.service';
import {Subscriber} from "rxjs/index";

@Component({
  selector: 'ww-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  weights = this.weightService.weights;

  time = this.weightService.time;

  constructor( private weightService: WeightService) {
  }

  ngOnInit() {

    // this.apiURL = API_URL; //'https://api.thingspeak.com/channels/430454/feeds.json?api_key=0TFBKM2JT37VDIL3';


  }

}
