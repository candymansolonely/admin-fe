import { AppConfigService } from '@/services/app-config.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { NotificationComponent } from 'common-lib/src/lib/components/notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NotificationComponent],
  template: `
    <lib-notification></lib-notification>
    <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  configService = inject(AppConfigService);
  private oauthService = inject(OAuthService);

  constructor() {
    document.title = this.configService.getConfig().projectTitle;
    let favicon = document.querySelector("link[rel='icon']");
    favicon?.setAttribute("href", this.configService.getConfig().favicon);
  }
  ngOnInit(): void {
    this.oauthService.events.subscribe(e => {
      console.log("OAuth event:", e);
    });
  }
}
