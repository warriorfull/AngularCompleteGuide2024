import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css', 
  encapsulation: ViewEncapsulation.Emulated //.None .Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  // - passing this out of the component to a CHILD
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name: string;

  constructor() {
    console.log('ServerElementComponent constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ServerElementComponent OnChanges called!')    
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ServerElementComponent ngOnInit called!')      
  }  

  ngDoCheck() {
    console.log('ngDoCheck log');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit Called')
  }
}
