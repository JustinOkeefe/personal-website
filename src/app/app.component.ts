import { Component } from '@angular/core';
import { fadeAnimation } from './animations';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer, Title} from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {


  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private titleService: Title
  ) 
  {
    this.matIconRegistry.addSvgIcon(
      `github`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github-logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/instagram-logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin-logo.svg")
    );
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}