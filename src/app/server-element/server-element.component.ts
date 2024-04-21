import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css', 
  encapsulation: ViewEncapsulation.Emulated //.None .Native
})
export class ServerElementComponent {
  // - passing this out of the component to a CHILD
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

}
