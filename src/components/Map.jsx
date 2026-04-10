import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// CORREÇÃO DO ÍCONE: Importa as imagens padrão do Leaflet para o marcador aparecer
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configura o ícone padrão para evitar que o marcador fique invisível
let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  /* Garante que o mapa não tenha margens internas sobrando */
  display: block; 
`;

const Map = () => {
  // Coordenadas da R. Laura de Araújo, Cidade Nova - RJ
  const position = [-22.9115, -43.2003]; 

  return (
    <MapWrapper>
      <MapContainer 
        center={position} 
        zoom={16} 
        // Importante: a altura 100% aqui preenche o container pai (Contact)
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer 
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        <Marker position={position}>
          <Popup>
            ☕ <strong>Bia Café</strong> <br /> 
            Cidade Nova, RJ
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default Map;
