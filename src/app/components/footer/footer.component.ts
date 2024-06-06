import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Output() onChange = new EventEmitter()
  @Input() msg: string

  change() {
    console.log("click")
    this.onChange.emit
  }
}
