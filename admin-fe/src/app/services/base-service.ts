import { Injectable } from "@angular/core";
import { ServiceAbstract } from "common-lib/src/public-api";
import { Observable } from "rxjs";
import { AppConfigService } from "./app-config.service";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService extends ServiceAbstract {
  constructor(configService: AppConfigService) {
    super(configService); // Truyền dependency vào cha
  }
  url: string = '';
  filter(data: any): Observable<any> {
    return this.get(`${this.url}/filter`, data);
  }
  getAll(params?: any): Observable<any> {
    return this.get(this.url, params);
  }
  getById(id: any): Observable<any> {
    return this.get(`${this.url}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.post(this.url, data);
  }
  update(data: any, id ?: number ): Observable<any> {
    return this.put(`${this.url}${id !== null ? '/' + id: ''}`, data);
  }
  deleteById(id: any): Observable<any> {
    return this.delete(`${this.url}/`, id);
  }
}
