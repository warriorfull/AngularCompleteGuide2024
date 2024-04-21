import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  // make it listenable from outside this component
  // - passing this out of the component to a PARENT
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;

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
