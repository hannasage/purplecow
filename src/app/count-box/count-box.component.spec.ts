import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBoxComponent } from './count-box.component';

describe('CountBoxComponent', () => {
  let component: CountBoxComponent;
  let fixture: ComponentFixture<CountBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountBoxComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
