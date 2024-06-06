import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent {

  cards: Array<{path: string; text: string; route: string}> = [
    {path: 'home.png', text: 'Armazem', route: 'warehouse'},
    {path: 'clipboard.png', text: 'Listas', route: ''}
  ]
  chat: string = 'HELLO WORLD!'
  emit: string = ''

  changeChat() {
  
    }
}
