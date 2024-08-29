import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { AppComponent  } from '../../app.component';
import { FooterComponent } from "../../footer/footer.component";
import { RouterOutlet } from "@angular/router"
@Component({
  selector: 'app-front-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AppComponent, RouterOutlet],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.scss'
})
export class FrontLayoutComponent {

}
