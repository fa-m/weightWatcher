import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeightService} from "../../services/weight.service";

@Component({
  selector: 'ww-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.css']
})
export class AddWeightComponent implements OnInit {

  weightInput: number;
  loading:boolean;

  constructor(private http: HttpClient, private weightsService: WeightService) {
  }

  ngOnInit() {
    this.weightsService.isLoading().subscribe((res)=>{
      this.loading = res;
    });
  }

  addWeightToAPI() {
    this.weightsService.addWeight(this.weightInput);
    this.weightInput = null;
  }

}
