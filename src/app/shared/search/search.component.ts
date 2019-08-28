import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  template: `
      <div class="input-group mb-3">
          <div class="input-group-prepend">
              <span class="input-group-text">
                  <i class="fa fa-search"></i>
              </span>
          </div>
          <!--<input (keyup)="afterKeyUp($event)" type="text" name="title" class="form-control" [placeholder]="title">-->
          <input #myInput type="text" name="title" class="form-control" [placeholder]="title">
      </div>
  `
})
export class SearchComponent implements OnInit, AfterViewInit {

  @Input() title = 'Wyszukaj...'; // 'Szukaj aukcji...'
  @Output() search = new EventEmitter<string>();
  @ViewChild('myInput', {static: false}) myInput: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
      fromEvent(this.myInput.nativeElement, 'keyup')
        .pipe(
          debounceTime(500),
          map((ev: any) => ev.target.value),
          distinctUntilChanged()
        )
        .subscribe((filter: string) => {
          console.log(filter);
          this.search.emit(filter);
        });
  }

  /*
  afterKeyUp(ev: any) {
    this.search.emit(ev.target.value);
    console.log(ev.target.value);
  }
  */
}


