import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

const MapView = () => {
  const position = [-22.9115, -43.2003];

  return (
    <MapWrapper>
      <MapContainer
        center={position}
        zoom={16}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={DefaultIcon}>
          <Popup>
            ☕ <strong>Bia Café</strong><br />
            Cidade Nova, RJ
          </Popup>
        </Marker>

      </MapContainer>
    </MapWrapper>
  );
};

export default MapView;