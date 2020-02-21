import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({
  name: "sortByFilter"
})
export class SortByFilterPipe implements PipeTransform {
  transform(items: any, text: string): any {
    // console.log({items})
    // console.log({text})

    if (!items) return [];
    if (!text) return items;

    items.sort((a: any, b: any) => {
      // console.log({a}, {b})
      return a["datetime_updated"] > b["datetime_updated"] ? 1 : -1;
    });

    // console.log("sort", _.sortBy(items, "datetime_updated"));
    return _.sortBy(items, _.sortBy(items, "datetime_updated"));
    // return items;
  }
}
