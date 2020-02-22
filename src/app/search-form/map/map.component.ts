import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
declare let L;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private params: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.initMap();
  }
  initMap() {
    const lat = (this.params.snapshot.paramMap.get('lat')) ? this.params.snapshot.paramMap.get('lat') : 41.00650212603;
    const lng = (this.params.snapshot.paramMap.get('lng')) ? this.params.snapshot.paramMap.get('lng') : 28.8530806151128;
    console.log("ruoute", this.router.url);
    //

    const globalMap = L.map('mapContainer', {
      zoomControl: true,
      maxZoom: 21,
      minZoom: 4
    }).setView([lat, lng], 13);

    globalMap.zoomControl.setPosition('bottomright');
    // Layers  
    var Thunderforest_OpenCycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}', {
      attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      apikey: '<your apikey>',
      maxZoom: 22
    });


    const Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    }).addTo(globalMap);


    const marker = L.marker(globalMap.getCenter(), {
      draggable: true,
      icon: L.icon({
        iconUrl: 'assets/img/pin-4ldpi.png',
        iconSize: [30, 35],
        iconAnchor: [30 / 2, 35],
      })
    }).addTo(globalMap);
  }
}