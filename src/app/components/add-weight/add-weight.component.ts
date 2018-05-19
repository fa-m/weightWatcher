import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ww-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.css']
})
export class AddWeightComponent implements OnInit {

  weightInput:number;
  apiURL = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addWeightToAPI(){
    if(this.weightInput !== undefined && this.weightInput !== null && this.weightInput >= 0 && this.weightInput <= 250) {
      console.log(this.weightInput);
      console.info('OK');

      this.http.get(this.apiURL).subscribe((data) => {
        console.log(data);
      });

    } else {
      console.info('NICHT OK');
    }
  }

}
