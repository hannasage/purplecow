import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from 'src/services/counter/counter.service';
import { CountBoxComponent } from '../count-box/count-box.component';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})

export class AddButtonComponent implements OnInit {

  @Input() countBox: CountBoxComponent;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {

  }

  hitCounterService(): void {
    // Hits API and updates the value of countSource with the value from res
    this.counterService.hitCounterAPI().subscribe(res => this.counterService.updateServiceCount(res.value))
  }

}
