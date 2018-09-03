import { Component, OnInit } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animations';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations: speedDialFabAnimations
})
export class SpeedDialFabComponent {

  fabButtons = [
    {
      icon: 'github',
      url: 'https://github.com/justinokeefe'
    },
    {
      icon: 'instagram',
      url: 'https://www.instagram.com/just_okeefe/'
    },
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/justin-o-keefe-10455416b/'
    },
    {
      icon: 'email',
      url: 'mailto:just.okeefe@gmail.com'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { 

      this.matIconRegistry.addSvgIcon(
        "github",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github-logo.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "instagram",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/instagram-logo.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "linkedin",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin-logo.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "email",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/email.svg")
      );
    }


  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
}
