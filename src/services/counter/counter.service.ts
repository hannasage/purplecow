import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Count } from 'src/app/models/Count';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class CounterService {

  // API URL variables
  namespace = "purplecow-haube"
  key = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e"
  apiHit: string = "https://api.countapi.xyz/hit"
  apiGet: string = "https://api.countapi.xyz/get"

  // I set this up to eliminate the need to call both hitCounterAPI()
  // and getCounterAPI(). The former returns the new value, and upon it
  // doing so, in add-button.component.ts, it proceeds to update this value.
  // 
  // Additionally, -1 is given as the default value and used to hide the <span>
  // displaying the currentCount value until the data has loaded and the variable
  // is updated.
  private countSource = new BehaviorSubject<number>(-1)
  currentCount = this.countSource.asObservable();

  constructor(private http: HttpClient) { }

  // Updates countSource
  updateServiceCount(newValue: number): void {
    this.countSource.next(newValue)
  }

  // Returns currentCount, observing countSource
  getServiceCount(): Observable<number> {
    return this.currentCount;
  }

  // Gets current count from countapi.xyz
  getCounterAPI(): Observable<Count> {
    return this.http.get<Count>(`${this.apiGet}/${this.namespace}/${this.key}`)
  }

  // Hits countapi.xyz and returns updated count
  hitCounterAPI(): Observable<Count> {
    return this.http.get<Count>(`${this.apiHit}/${this.namespace}/${this.key}`)
  }

}
