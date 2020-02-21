import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  @Input() savedSearches: any[];
  @Input() savedSearchCount: number;
  @Input() searchText: string = null;

  public name: string;
  public isCollapsed = new EventEmitter();
  isExpand: boolean;

  @Output() expandAll = new EventEmitter();
  @Output() collapseAll = new EventEmitter();

  @Output("refreshAll") refreshEvent = new EventEmitter();
  @Output() localRefresh = new EventEmitter();
  @Output("updateCheckbox") submitFromCheckbox = new EventEmitter();

  constructor() /*
    public modalRef: BsModalRef,
    public modalService: BsModalService, */
  // private messageService: MessageService,
  // private waterbearService: FoundriService
  { }

  ngOnInit() {
    // this.savedSearchCount = 0;
    // console.log(this.savedSearches)
  }

  closeModal() {
    // this.modalRef.hide();
  }

  saveChanges() {
    console.log("saveChanges");
    // this.submitCheckboxEvent.emit();
  }

  /* getSearches() {
        this.waterbearService.getSavedSearches().subscribe(
            savedSearches => {
                console.log({savedSearches});

                this.saveSearches = savedSearches;
                this.savedSearchCount = this.saveSearches && this.saveSearches.length ? this.saveSearches.length : null;
            },
            (error: HttpErrorResponse) => {
                // this.messageService.bad(`Error retrieving saved searches: ${error.status}`);
            }
        );
    } */

  deleteItem(id: number) {
    /* this.waterbearService.deleteSavedSearch(id).subscribe(
            savedSearches => {
                this.savedSearchCount = savedSearches && savedSearches.length ? savedSearches.length : null;
            },
            (error: HttpErrorResponse) => {
                // this.messageService.bad(`Error retrieving saved searches: ${error.status}`);
            }
        ); */
    // this.refresh();
    // this.messageService.good(`Your Saved Search was successfully deleted.`);
  }

  clearSearchText() {
    this.searchText = null;
  }

  collapse() {
    this.collapseAll.emit(true);
    this.isExpand = false;
  }

  expand() {
    this.expandAll.emit(false);
    this.isExpand = true;
  }

  submitFromCheckboxComponent(event) {
    // console.log("search-form:.....");
    this.submitFromCheckbox.emit(event);
  }

  localRefreshEvent() {
    this.localRefresh.emit();
  }

  refreshFromComponent(event) {
    console.log({ event });
    this.refreshEvent.emit();
  }

  refresh() {
    this.searchText = null;
    setTimeout(() => {
      // this.getSearches();
    }, 500);
  }
}
