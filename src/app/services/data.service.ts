import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
// import { rxjs } from 'rxjs';
import { SavedSearch } from "../models/saved-search";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private api =
    "https://my.api.mockaroo.com/SavedSearches_mars.json?key=c1a35bd0";

  constructor(private http: HttpClient) {}

  getSavedSearches(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  // hard coded
  fetchData() {
    return [
      {
        id: 224,
        name: "Healthcare Systems",
        description: "var(--danger-base)",
        path: "/maps/-9.73071,7.31689,5z?midb-countries=AO",
        api_queries: [
          {
            query:
              '{"search":"country:(AO)  geometry:({\\"type\\":\\"FeatureCollection\\",\\"features\\":[{\\"type\\":\\"Feature\\",\\"properties\\":{},\\"geometry\\":{\\"type\\":\\"Polygon\\",\\"coordinates\\":[[[-17.709960937500004,14.732386081418454],[50.27343750000001,14.732386081418454],[50.27343750000001,-32.546813173515154],[-17.709960937500004,-32.546813173515154],[-17.709960937500004,14.732386081418454]]]}}]})","length":10000,"index":"facility","fields":{"includes":["Location","FacName","DatetimeLastChg","Category","BeNumber","Osuffix"]},"sorting":["-DatetimeLastChg"]}',
            overlay: "midb"
          }
        ],
        geojson: {},
        datetime_created: "2020-02-13T21:23:08.035285Z",
        datetime_updated: "2020-02-14T15:22:03.145824Z",
        created_by_id: 16,
        enable_notifications: true,
        result_count: 657
      },
      {
        id: 226,
        name: "HTML Tags",
        description:
          "Every application starts out with what seems like a simple task: get data, transform them, and show them to users. Getting data could be as simple as creating a local variable or as complex as streaming data over a WebSocket.\n\nClearly, some values benefit from a bit of editing. You may notice that you desire many of the same transformations repeatedly, both within and across many applications. You can almost think of them as styles. In fact, you might like to apply them in your HTML templates as you do styles.\n\nIntroducing Angular pipes, a way to write display-value transformations that you can declare in your HTML.\n\nYou can run the live example / download example in Stackblitz and download the code from there.",
        path: "/maps/-9.73071,7.31689,5z?midb-countries=AO",
        api_queries: [
          {
            query:
              '{"search":"country:(AO)  geometry:({\\"type\\":\\"FeatureCollection\\",\\"features\\":[{\\"type\\":\\"Feature\\",\\"properties\\":{},\\"geometry\\":{\\"type\\":\\"Polygon\\",\\"coordinates\\":[[[-17.709960937500004,14.732386081418454],[50.27343750000001,14.732386081418454],[50.27343750000001,-32.546813173515154],[-17.709960937500004,-32.546813173515154],[-17.709960937500004,14.732386081418454]]]}}]})","length":10000,"index":"facility","fields":{"includes":["Location","FacName","DatetimeLastChg","Category","BeNumber","Osuffix"]},"sorting":["-DatetimeLastChg"]}',
            overlay: "midb"
          }
        ],
        geojson: {},
        datetime_created: "2020-02-13T21:23:12.667788Z",
        datetime_updated: "2020-02-14T15:21:43.769889Z",
        created_by_id: 16,
        enable_notifications: true,
        result_count: 657
      },
      {
        id: 223,
        name: "Law Enforcement Offices",
        description:
          "Every application starts out with what seems like a simple task: get data, transform them, and show them to users. Getting data could be as simple as creating a local variable or as complex as streaming data over a WebSocket.\n\nClearly, some values benefit from a bit of editing. You may notice that you desire many of the same transformations repeatedly, both within and across many applications. You can almost think of them as styles. In fact, you might like to apply them in your HTML templates as you do styles.\n\nIntroducing Angular pipes, a way to write display-value transformations that you can declare in your HTML.\n\nYou can run the live example / download example in Stackblitz and download the code from there.",
        path: "/maps/-9.73071,7.31689,5z?midb-countries=AO",
        api_queries: [
          {
            query:
              '{"search":"country:(AO)  geometry:({\\"type\\":\\"FeatureCollection\\",\\"features\\":[{\\"type\\":\\"Feature\\",\\"properties\\":{},\\"geometry\\":{\\"type\\":\\"Polygon\\",\\"coordinates\\":[[[-17.709960937500004,14.732386081418454],[50.27343750000001,14.732386081418454],[50.27343750000001,-32.546813173515154],[-17.709960937500004,-32.546813173515154],[-17.709960937500004,14.732386081418454]]]}}]})","length":10000,"index":"facility","fields":{"includes":["Location","FacName","DatetimeLastChg","Category","BeNumber","Osuffix"]},"sorting":["-DatetimeLastChg"]}',
            overlay: "midb"
          }
        ],
        geojson: {},
        datetime_created: "2020-02-13T21:23:05.803391Z",
        datetime_updated: "2020-02-14T15:21:21.930945Z",
        created_by_id: 16,
        enable_notifications: true,
        result_count: 657
      },
      {
        id: 227,
        name: "Hospitals",
        description: "Edit savedSearch input",
        path: "/maps/-9.73071,7.31689,5z?midb-countries=AO",
        api_queries: [
          {
            query:
              '{"search":"country:(AO)  geometry:({\\"type\\":\\"FeatureCollection\\",\\"features\\":[{\\"type\\":\\"Feature\\",\\"properties\\":{},\\"geometry\\":{\\"type\\":\\"Polygon\\",\\"coordinates\\":[[[-17.709960937500004,14.732386081418454],[50.27343750000001,14.732386081418454],[50.27343750000001,-32.546813173515154],[-17.709960937500004,-32.546813173515154],[-17.709960937500004,14.732386081418454]]]}}]})","length":10000,"index":"facility","fields":{"includes":["Location","FacName","DatetimeLastChg","Category","BeNumber","Osuffix"]},"sorting":["-DatetimeLastChg"]}',
            overlay: "midb"
          }
        ],
        geojson: {},
        datetime_created: "2020-02-13T21:23:15.056311Z",
        datetime_updated: "2020-02-14T15:20:55.579481Z",
        created_by_id: 16,
        enable_notifications: false,
        result_count: 657
      },
      {
        id: 225,
        name: "Water and Bridges",
        description: "",
        path: "/maps/-9.73071,7.31689,5z?midb-countries=AO",
        api_queries: [
          {
            query:
              '{"search":"country:(AO)  geometry:({\\"type\\":\\"FeatureCollection\\",\\"features\\":[{\\"type\\":\\"Feature\\",\\"properties\\":{},\\"geometry\\":{\\"type\\":\\"Polygon\\",\\"coordinates\\":[[[-17.709960937500004,14.732386081418454],[50.27343750000001,14.732386081418454],[50.27343750000001,-32.546813173515154],[-17.709960937500004,-32.546813173515154],[-17.709960937500004,14.732386081418454]]]}}]})","length":10000,"index":"facility","fields":{"includes":["Location","FacName","DatetimeLastChg","Category","BeNumber","Osuffix"]},"sorting":["-DatetimeLastChg"]}',
            overlay: "midb"
          }
        ],
        geojson: {},
        datetime_created: "2020-02-13T21:23:10.063366Z",
        datetime_updated: "2020-02-14T15:20:43.680891Z",
        created_by_id: 16,
        enable_notifications: true,
        result_count: 657
      },
      {
        id: 221,
        name: "Highway Signs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rage between 1-100.",
        path: "/maps/30.47183,-50.41326,2.5z",
        api_queries: [
          {
            query:
              '{"search":"geometry:({\\"type\\":\\"FeatureCollection\\",\\"features\\":[{\\"type\\":\\"Feature\\",\\"properties\\":{},\\"geometry\\":{\\"type\\":\\"Polygon\\",\\"coordinates\\":[[[-180,83.2692806651588],[180,83.2692806651588],[180,-69.65214753299553],[-180,-69.65214753299553],[-180,83.2692806651588]]]}}]})","length":10000,"fields":{"includes":["geometry","EN_NAME","NAME","DETECTED_LANG","CAT_CODE","CLUSTER_SVC_COUNT","CONFLATE_DATE","ANALYST_USER_VALIDATIONS_COUNT","ANALYST_SME_VALIDATIONS_COUNT","TOTAL_FOUNDRI_CONFIDENCE"]},"sorting":["-CONFLATE_DATE","SORT_ID"]}',
            overlay: "foundri"
          },
          {
            query:
              '{"search":"type:(military|infrastructure):gte:0.75  geometry:({\\"type\\":\\"FeatureCollection\\",\\"features\\":[{\\"type\\":\\"Feature\\",\\"properties\\":{},\\"geometry\\":{\\"type\\":\\"Polygon\\",\\"coordinates\\":[[[-180,83.2692806651588],[180,83.2692806651588],[180,-69.65214753299553],[-180,-69.65214753299553],[-180,83.2692806651588]]]}}]})","length":10000,"fields":{"includes":["created_at","source","user_id","labels","s3_url","smid","location","types"]},"sorting":["-created_at"]}',
            overlay: "media"
          },
          {
            query:
              '{"search":"geometry:({\\"type\\":\\"FeatureCollection\\",\\"features\\":[{\\"type\\":\\"Feature\\",\\"properties\\":{},\\"geometry\\":{\\"type\\":\\"Polygon\\",\\"coordinates\\":[[[-180,83.2692806651588],[180,83.2692806651588],[180,-69.65214753299553],[-180,-69.65214753299553],[-180,83.2692806651588]]]}}]})","length":10000,"index":"facility","fields":{"includes":["Location","FacName","DatetimeLastChg","Category","BeNumber","Osuffix"]},"sorting":["-DatetimeLastChg"]}',
            overlay: "midb"
          }
        ],
        geojson: {},
        datetime_created: "2020-02-13T14:41:07.291204Z",
        datetime_updated: "2020-02-14T15:20:30.200138Z",
        created_by_id: 16,
        enable_notifications: true,
        result_count: 103194246
      },
      {
        id: 222,
        name: "Angola",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Range between 2-3.",
        path: "/maps/-9.73741,16.29464,5.5z?midb-countries=AO",
        api_queries: [
          {
            query:
              '{"search":"country:(AO)  geometry:({\\"type\\":\\"FeatureCollection\\",\\"features\\":[{\\"type\\":\\"Feature\\",\\"properties\\":{},\\"geometry\\":{\\"type\\":\\"Polygon\\",\\"coordinates\\":[[[-1.7593726954378244,6.499713284120311],[47.02685200263794,6.499713284120311],[47.02685200263794,-25.226099194376435],[-1.7593726954378244,-25.226099194376435],[-1.7593726954378244,6.499713284120311]]]}}]})","length":10000,"index":"facility","fields":{"includes":["Location","FacName","DatetimeLastChg","Category","BeNumber","Osuffix"]},"sorting":["-DatetimeLastChg"]}',
            overlay: "midb"
          }
        ],
        geojson: {},
        datetime_created: "2020-02-13T14:48:19.942567Z",
        datetime_updated: "2020-02-13T20:14:32.988367Z",
        created_by_id: 16,
        enable_notifications: true,
        result_count: 657
      }
    ];
  }
}
