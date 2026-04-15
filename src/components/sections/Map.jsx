import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

import './Map.css'

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

const MapView = () => {
  const position = [-22.9115, -43.2003]

  return (
    <div className="map-wrapper">
      <MapContainer
        center={position}
        zoom={16}
        className="map-container"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={DefaultIcon}>
          <Popup>
            ☕ <strong>Cafezinho da Bia</strong>
            <br />
            Cidade Nova, RJ
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapView