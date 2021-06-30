import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from 'src/services/counter/counter.service';
@Component({
  selector: 'app-count-box',
  templateUrl: './count-box.component.html',
  styleUrls: ['./count-box.component.css']
})
export class CountBoxComponent implements OnInit {

  constructor(private counterService: CounterService) { }
  current: number;
  previous: number;
  secondPrevious: number;

  ngOnInit(): void {
    this.loadCount()
  }

  loadCount(): void {
    this.counterService.getServiceCount().subscribe(res => {
      this.current = res;
      this.previous = res - 1;
      this.secondPrevious = res - 2;
    })
  }

}
