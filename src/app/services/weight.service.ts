import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WeightModel } from "../components/weight/WeightModel";
import { API_URL } from '../app.constants';
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  weights = new Observable((observer) => {
    () => observer.next(123);
  });


    // Observable<WeightModel[]>;

  time = new Observable(observer =>
    setInterval(() => observer.next(new Date().toString()), 1000)
  );

  constructor( private http: HttpClient ) {
    this.getAllWeights();
  }

  private getAllWeights() {
    this.http.get(API_URL).subscribe((data) => {
      this.weights = data['feeds'];
    });
  }

  getWeights(){
    return this.weights;
  }

}
