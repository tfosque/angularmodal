import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CrudStorageService } from "../../services/crud-storage.service";
import * as _ from "lodash";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"]
})
export class AccordionComponent implements OnInit {
  form: any = {};

  @Input() savedSearch: any;
  @Input() collapseAll: EventEmitter<boolean>;
  @Input() expandAll: EventEmitter<boolean>;

  @Input() filtering: boolean;
  @Input() searchText: string;

  @Output() refreshEvent = new EventEmitter();
  @Output() submitCheckboxEvent = new EventEmitter();
  @Output() localRefresh = new EventEmitter();

  @Output() refresh = new EventEmitter();
  @Output() closeModal = new EventEmitter();

  inputName: string = null;
  inputDescription: string;
  inputNotifications: boolean;

  isCollapsed = true;
  isDetailsCollapsed = true;
  editing: boolean;
  showDetails = false;

  public overlayColors: any = {};

  constructor(private api: CrudStorageService) { }

  // NEW:
  ngOnInit() {
    this.editing = false;

    this.form.inputName = this.savedSearch.name;
    this.form.inputNotifications = this.savedSearch.enable_notifications;
    this.form.inputDescription = this.savedSearch.description;

    this.expandAll.subscribe((collapsed: boolean) => {
      this.isCollapsed = collapsed;
    });

    this.collapseAll.subscribe((collapsed: boolean) => {
      this.isCollapsed = collapsed;
    });

    this.overlayIcons();

    /*  const raw = this.savedSearch.datetime_updated;
     const newDate = new Date(raw).toLocaleDateString();
     const newDateISO = new Date(raw).toISOString(); */
  }

  // NEW:
  delete() {
    console.log("form:", this.form);
    this.api.deleteLocalData(this.savedSearch.id);

    setTimeout(() => {
      // const newEntry = { id: this.savedSearch.id, ...this.form };
      this.refreshEvent.emit();
    }, 150);
  }

  // NEW:
  saveChanges() {
    // this.disableEditing();
    const query = {
      name: this.form.inputName,
      enable_notifications: this.form.inputNotifications,
      description: this.form.inputDescription
    };
    // TODO: change name submitEvent
    this.submitCheckboxEvent.emit({ ...this.savedSearch, ...query });
  }

  disableEditing() {
    // NEW:
    // if inputName is empty (onCancel)
    this.resetOnDisable();
    this.editing = false;
  }

  // NEW:
  resetOnDisable() {
    if (this.form.inputName === "") {
      this.form.inputName = this.savedSearch.name;
    }
    if (this.form.inputDescription === "") {
      this.form.inputDescription = this.savedSearch.description;
    }
  }

  // NEW:
  overlayIcons() {
    // grab overlays from api_queries.card-img-overlay
    // [foundri, midb, media]
    function getColors(input: string) {
      let color: string;

      if (input === "foundri") {
        color = "#F55151";
      }
      if (input === "midb") {
        color = "#28C643";
      }
      if (input === "media") {
        color = "#776BA3";
      }

      return color;
    }

    const overlays =
      this.savedSearch && this.savedSearch.api_queries
        ? this.savedSearch.api_queries.map(m => {
          return { color: getColors(m.overlay) };
        })
        : null;
    this.overlayColors = overlays;
    // console.log({ overlays });
  }

  loadOverlays(event) {
    // TODO: leaflet or mapBox
    // event.defaultPrevented();
  }

  showDetailsSummary() {
    this.showDetails = !this.showDetails;
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  localRefreshEvent() {
    this.localRefresh.emit();
  }
}
