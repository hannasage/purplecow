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

  namespace = "purplecow-haube"
  key = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e"
  apiHit: string = "https://api.countapi.xyz/hit"
  apiGet: string = "https://api.countapi.xyz/get"

  private countSource = new BehaviorSubject<number>(-1)
  currentCount = this.countSource.asObservable();

  constructor(private http: HttpClient) { }

  updateServiceCount(newValue: number): void {
    this.countSource.next(newValue)
  }

  getServiceCount(): Observable<number> {
    return this.currentCount;
  }

  getCounterAPI(): Observable<Count> {
    return this.http.get<Count>(`${this.apiGet}/${this.namespace}/${this.key}`)
  }

  hitCounterAPI(): Observable<Count> {
    return this.http.get<Count>(`${this.apiHit}/${this.namespace}/${this.key}`)
  }

}
