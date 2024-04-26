import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  // make it listenable from outside this component
  // - passing this out of the component to a PARENT
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;

  constructor() {
    console.log('CockpitComponent constructor called!')
  }

  ngOnInit(): void {
    console.log('CockpitComponent ngOnInit called!')      
  }
  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: serverNameInput.value, //this.newServerName, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value, //this.newServerName, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
