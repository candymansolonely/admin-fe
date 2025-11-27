import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "oauth2/src/environments/environment";
import { IAppConfig, INIT_APP_CONFIG_MODEL } from "@/models/app-config.model";
import { OAuth2Service } from "common-lib/src/lib/services/oauth2.service";
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: IAppConfig = INIT_APP_CONFIG_MODEL;
  private OAuth2Service = inject(OAuth2Service);

  private options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      DataType: 'application/json',
    },
  };

  private http = inject(HttpClient);
  load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          `../../assets/config/${environment.env}.json`,
          this.options
        )
        .subscribe({
          next: (data: any) => {
            this.setConfig(data).then(() => {
              console.log("setConfig");
              resolve(true);
            });
          },
          error: (error) => {
            console.error('Error loading config:', error || 'Server Error');
            reject(false);
          },
        });
    });
  }
  private setConfig = async (data: any): Promise<void> => {
    Object.assign(this.config, data);

    // load oauth2
    await this.OAuth2Service.initOAuth2(data.oauth);
  };

  getConfig = () => this.config;
}
