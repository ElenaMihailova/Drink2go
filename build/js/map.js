const map = L.map("map").setView(
  {
    lat: 59.968322,
    lng: 30.317359,
  },
  18
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: "img/map-marker.svg",
  iconSize: [38, 50],
  iconAnchor: [38, 25],
});

const mainPinMarker = L.marker(
  {
    lat: 59.968322,
    lng: 30.317359,
  },
  {
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);
