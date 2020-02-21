import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from "@angular/forms";
import { TooltipModule } from "ngx-bootstrap";
import { CollapseModule } from "ngx-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataService } from "./services/data.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchFormComponent } from "./search-form/search-form.component";
import { AccordionComponent } from "./search-form/accordion/accordion.component";
import { DetailsSummaryComponent } from "./search-form/details-summary/details-summary.component";

import { SortByFilterPipe } from "./pipes/sort-by-filter.pipe";
import { FilterByPipe } from "./pipes/filter-by.pipe";

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './search-form/map/map.component';
import { LayersComponent } from './search-form/map/layers/layers.component';
import { InvestmentComponent } from './search-form/map/investment/investment.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { InnerMapComponent } from './search-form/inner-map/inner-map.component';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  {
    path: '', component: MapComponent, children: [
      { path: 'layers', component: LayersComponent },
      { path: 'investment', component: InvestmentComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    AccordionComponent,
    DetailsSummaryComponent,
    SortByFilterPipe,
    FilterByPipe,
    MapComponent,
    LayersComponent,
    InvestmentComponent,
    HighlightPipe,
    InnerMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
    LeafletModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
