import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./base-service";
import { OAuth2Service } from "common-lib/src/lib/services/oauth2.service";
@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  override baseUrl = '';
  private oauth2Service = inject(OAuth2Service);
  logout(): Observable<any> {
    return this.oauth2Service.getRequestLogout(this.httpClient);
  }
  getLogoutUrl(returnUrl: string): Observable<string> {
    return this.oauth2Service.getLogoutUrl(this.httpClient, returnUrl);
  }
}
