import { Component, Input } from '@angular/core';

@Component({
  template: `
    <div>
        {{data}}
    </div>
  `
})
export class AboutAdComponent {
  @Input() data: any;

}
