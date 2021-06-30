import { Component } from '@angular/core';
import { CounterService } from 'src/services/counter/counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.getCounterAPI().subscribe(res => {
      this.counterService.updateServiceCount(res.value)
    })
  }

}
