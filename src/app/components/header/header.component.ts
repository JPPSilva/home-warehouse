import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  /* Menu Manegement */
  menuStatus: boolean = false
  menuLocationName: string = 'Página Inicial'

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.handleNameChange(this.router.url)
  }

  /* Open Menu */
  openMenu() {
    this.menuStatus = true
  }

  /* Close Menu */
  closeMenu() {
    this.menuStatus = false
  }

  /* Handle Menu Name Changing */
  handleNameChange(str: string) {
    switch (str) {
      case '/warehouse':
        this.menuLocationName = 'Armazém'
        break;

      case '/list':
        this.menuLocationName = 'Listas'
        break;

      default:
        this.menuLocationName = 'Home'
        break;
    }

    this.closeMenu()
  }
}
