import React, { Component } from 'react'
import { Container } from '@material-ui/core';

function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -33.8688,
      lng: 151.2195
    },
    zoom: 13,
    mapTypeId: "roadmap"
  }); // Create the search box and link it to the UI element.

  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); // Bias the SearchBox results towards current map's viewport.

  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = []; // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.

  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    } // Clear out the old markers.

    markers.forEach(marker => {
      marker.setMap(null);
    });
    markers = []; // For each place, get the icon, name and location.

    const bounds = new google.maps.LatLngBounds();
    places.forEach(place => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      }; // Create a marker for each place.

      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

export class Protest extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 style={{textAlign: 'center'}}>Protest Page</h1>
          App or chat bot or website <br/>
          Text/input locations and return nearby protests <br/>
          Could also offer advice on keeping safe  <br/>
          And maybe text you live updates <br/>
        </Container>
      
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmiEzSlHyitRuqIDXIprsGI5BexQJtF28&callback=initAutocomplete&libraries=places&v=weekly"
      defer
    ></script>
      </div>
      <input
        id="pac-input"
        class="controls"
        type="text"
        placeholder="Search Box"
      />
      <div id="map"></div>
    )
  }
}

export default Protest
