import { Component, OnInit } from "@angular/core";
import { CrudStorageService } from "./services/crud-storage.service";
import * as _ from "lodash";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  savedSearches: any[];
  savedSearchCount: number;
  searchText: string;

  constructor(private api: CrudStorageService) { }

  ngOnInit() {
    this.getLocalData();
  }

  // TEMP:
  getLocalData() {
    // const db = JSON.parse(localStorage.getItem("savedSearches"));
    const localdb = JSON.parse(localStorage.getItem("savedSearches"));

    _.isEmpty(localdb)
      ? this.api.getApiData().subscribe(res => {
        // console.log({ res });
        this.api.udpdateLocalStorage(res);
        /*  setTimeout(() => {
           this.api.getLocalStorage();
         }, 500); */
      })
      : ((this.savedSearches = localdb),
        (this.savedSearchCount = localdb.length));
  }

  clearSearchText() {
    this.searchText = null;
  }

  // FIX:
  collapse() {
    console.log("colapseAll......");
    /* this.collapseAll.emit(true);
        this.isExpand = false; */
  }
  // FIX:
  expand() {
    console.log("expandAll......");
    /* this.expandAll.emit(false);
        this.isExpand = true; */
  }

  toISO(date) {
    // console.log({ date });

    // const raw = date.datetime_updated;
    // console.log({ date });

    const newDate = new Date(date).toLocaleDateString();
    // console.log({ newDate });

    const newDateISO = new Date(date).toISOString();
    // console.log({ newDateISO });

    return newDateISO;
  }

  // NEW:
  updateCheckbox(event) {
    console.log({ event })
    // item id,  // map over and replace
    let newData = this.savedSearches;
    const id = event.id;
    const timeStamp = this.toISO(Date.now());

    // console.log({ timeStamp });

    newData.map(item => {
      if (item.id === id) {
        /*  console.log({ item });
         console.log({ event }); */
        return (
          (item.name = event.name),
          (item.enable_notifications = event.enable_notifications),
          (item.description = event.description),
          (item.datetime_updated = timeStamp)
        );
      }
    });
    this.api.udpdateLocalStorage(newData);
    setTimeout(() => {
      this.getLocalData();
    }, 250);
  }

  // NEW:
  refreshEventC() {
    const newData = this.api.getLocalStorage();
    this.savedSearches = newData;
    this.savedSearchCount = newData.length;

  }

  // NEW:
  localRefresh() {
    // this.getLocalData();
  }
}
