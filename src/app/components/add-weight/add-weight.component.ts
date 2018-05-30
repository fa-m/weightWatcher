import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADD_API_URL } from '../../app.constants';

@Component({
  selector: 'ww-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.css']
})
export class AddWeightComponent implements OnInit {

  weightInput:number;
  addApiURL = ADD_API_URL;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addWeightToAPI(){
    if(this.weightInput !== undefined && this.weightInput !== null && this.weightInput >= 1 && this.weightInput <= 250) {
      this.http.get(this.addApiURL + this.weightInput).subscribe((data) => {
        console.log(data);
      });

    } else {
      console.info('NICHT OK');
    }
  }

}
