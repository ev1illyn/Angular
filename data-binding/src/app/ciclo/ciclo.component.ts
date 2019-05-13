import { Component, OnInit, OnDestroy, 
  OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, 
  AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() { 
    console.log('constructor');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
    }

  ngOnInit(){
    console.log('ngOnInit');
    }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
    }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  private log(hook: string) {
  }
  

}
