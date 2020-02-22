import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
declare let L;
@Component({
  selector: 'app-inner-map',
  templateUrl: './inner-map.component.html',
  styleUrls: ['./inner-map.component.scss']
})
export class InnerMapComponent implements OnInit, AfterViewInit {
  @Input() isDetailsCollapsed: boolean; // maybe overkill
  @Input() savedSearch: any;

  public mapid: any;

  constructor(private params: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.mapid = `innerMapContainer${this.savedSearch.id}`;
    console.log('mapid:', this.mapid);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initMap();
  }


  initMap() {
    const lat = (this.params.snapshot.paramMap.get('lat')) ? this.params.snapshot.paramMap.get('lat') : 41.00650212603;
    const lng = (this.params.snapshot.paramMap.get('lng')) ? this.params.snapshot.paramMap.get('lng') : 28.8530806151128;
    console.log("ruoute", this.router.url);

    const innerMap = L.map(this.mapid, {
      zoomControl: true,
      maxZoom: 12,
      minZoom: 4
    }).setView([lat, lng], 13);

    innerMap.zoomControl.setPosition('bottomright');
    // Layers  
    const Thunder_OpenCycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}', {
      attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      apikey: '<your apikey>',
      maxZoom: 22
    });

    const inner_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: ''
    }).addTo(innerMap);

    const innerMarker = L.marker(innerMap.getCenter(), {
      draggable: true,
      icon: L.icon({
        iconUrl: 'assets/img/pin-4ldpi.png',
        iconSize: [30, 35],
        iconAnchor: [30 / 2, 35],
      })
    }).addTo(innerMap);
    //
  }
}