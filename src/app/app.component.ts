import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mapboxApp';

  map: mapboxgl.Map;

  ngOnInit(){

    this.map = new mapboxgl.Map({
    accessToken: environment.mapboxKey,
    container: 'mapbox-container', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-73.123147,7.1315202], // starting position [lng, lat]
    zoom: 12, // starting zoom
    projection: {name:'globe'} // display the map as a 3D globe
    });
    this.map.on('style.load', () => {
    this.map.setFog({}); // Set the default atmosphere style
    });

    this.crearMarcador(-73.123147,7.1315202);

  }

  crearMarcador(lng: number,lat: number){
    const marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.map);

      marker.on('drag',()=>{
        console.log(marker.getLngLat())
      })
  }
}
