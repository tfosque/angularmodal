import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterby"
})
export class FilterByPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    // console.log({ items }, { searchText });

    return items.filter(item => {
      return Object.keys(item).some(key => {
        // console.log({ item }, { key }, item[key]);
        // console.log(key, item[key]);

        /* if (key === "result_count") {
          return String(item[key])
            .toLowerCase()
            .includes(searchText.toLowerCase());// 
        } */

        return String(item[key])
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
    });
  }
}
