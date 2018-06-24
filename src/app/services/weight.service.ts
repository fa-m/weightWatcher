import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL, ADD_API_URL} from '../app.constants';
import {Subject} from "rxjs/index";
import {WeightModel} from "../components/weight/WeightModel";
import {WeightsResponse} from "./weightsResponse";

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  private weights$ = new Subject<WeightModel>();
  private loading$ = new Subject<boolean>();


  constructor(private http: HttpClient) {
    this.getAllWeights();
    this.loading$.next(false);
  }

  getWeights(){
    return this.weights$.asObservable();
  }


  private getAllWeights() {
    return this.http.get(API_URL).subscribe((res:WeightsResponse) => {
      this.weights$.next(res.feeds);
    });
  }


  addWeight(weightInput:number) {
    this.setLoading(true);
    if (weightInput !== undefined && weightInput !== null && weightInput >= 1 && weightInput <= 250) {

      this.http.get(ADD_API_URL + weightInput).subscribe((data) => {
        this.getAllWeights();
        this.setLoading(false);
        console.log(data);
        return true;
      });

    } else {
      console.info('NICHT OK');
      this.setLoading(false);
      return false;
    }
  }

  setLoading(loading:boolean) {
    this.loading$.next(loading);
  }

  isLoading(){
    return this.loading$.asObservable();

  }

}
