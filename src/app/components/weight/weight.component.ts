import {Component, OnInit} from '@angular/core';

import { WeightService } from '../../services/weight.service';
import { WeightModel } from "./WeightModel";

@Component({
  selector: 'ww-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  weights:WeightModel;

  constructor( private weightService: WeightService) {
  }

  ngOnInit() {

    this.weightService.getWeights().subscribe((res:WeightModel)=>{
      console.log(res);
      this.weights = res;
    });

  }

  /* doSomething(e:HTMLLinkElement){
    e.target.children[1].className = 'show';
  }

  doSomethingElse(e:HTMLLinkElement){
    e.target.children[1].className = 'hide';
  } */

}
