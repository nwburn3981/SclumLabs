import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  count$: Observable<number> = this.count.asObservable();
  constructor() { }

  setCount(countVal) {
    this.count.next(countVal)
  } 
}
