import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import * as _ from "lodash";
import { DataService } from "../services/data.service";

@Injectable({
  providedIn: "root"
})
export class CrudStorageService {
  public localdb = localStorage.getItem("savedSearches");

  private api =
    "https://my.api.mockaroo.com/SavedSearches_mars.json?key=c1a35bd0";

  constructor(public mockaroo: DataService, private http: HttpClient) { }

  // api call
  getApiData(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  // Local Storage
  getLocalStorage() {
    // return this.http.get<any[]>(this.api);
    // convert any invalid dates to ISO date format
    // let db = this.data.getSearches().slice(0, 33);
    /* db = db.map(m => {
      return {
        ...m,
        datetime_updated: this.toISO(m.datetime_updated, m.id)
      };
    }); */

    let db = JSON.parse(localStorage.getItem("savedSearches"));
    return db;
  }

  udpdateLocalStorage(newData: any) {
    localStorage.setItem("savedSearches", JSON.stringify(newData));
  }

  deleteLocalData(id: number) {
    // find id then perform delete
    let newData = [];
    let db = JSON.parse(this.localdb);

    db.map(item => {
      if (item.id !== id) {
        // console.log({ item });
        newData.push(item);
      }
    });

    this.udpdateLocalStorage(newData);
  }

  // generic
  toISO(item, id: number) {
    console.log({ item }, id);
    const raw = item;
    const newDate = new Date(raw).toLocaleDateString();
    const newDateIso = new Date(newDate).toISOString();
    return newDateIso;
  }

  getLatestFromStorage() {
    return JSON.parse(localStorage.getItem("savedSearches"));
  }
}


