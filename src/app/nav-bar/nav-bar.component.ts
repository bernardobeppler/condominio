import * as M from 'materialize-css';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  isHideMenu = true;
  title = 'condominio';

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
}

}
