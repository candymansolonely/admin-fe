import { Injectable } from "@angular/core";
import { Observable, ObservedValueOf } from "rxjs";
import { BaseService } from "./base-service";

@Injectable({
    providedIn: 'root'
})
export class BranchService extends BaseService {
  override url = '/Branches';

  // Lấy danh sách các chi nhánh
  getAllBranches(): Observable<any> {
    return this.getAll();
  }

  createBranch(payload : any) : Observable<any> {
    return this.create(payload);
  }

  updateBranch(payload: any) : Observable<any> {
    return this.update(payload, payload.id);
  }

  deleteBranchById(id: number) : Observable<any> {
    return this.deleteById(id);
  }
}
