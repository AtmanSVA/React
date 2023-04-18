import React from 'react';
import 'leaflet/dist/leaflet.css';
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    Tooltip,
    CircleMarker,
    Polygon
} from 'react-leaflet';

const colorOptions={color:'red'}
const centerPolygon=[
    [
        [55.738037749971575, 37.612486489190964],
        [55.73783879740515, 37.6134402233187],
        [55.737522388824914, 37.6132358517199],
        [55.73750321246489, 37.613342295260935],
        [55.73724672774373, 37.61319327430348],
        [55.73726830128985, 37.61306979979587],
        [55.73693031434915, 37.61284413946862],
        [55.73712927154659, 37.61189040534089]
    ]
]
const center=[55.737695, 37.612513]
const position = [55.737347, 37.613413]

const Map = () => {

  return (
    <div>
        <MapContainer
        center={center}
        zoom={10}
        style={{
            width:'100vw',
            height:"500px"
        }}
        >
            <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=baBC3t9J46G3egoyg6Rg'
           attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
           />

            <CircleMarker
            center={position}
            pathOptions={{color:'brown'}}
            radius={5}
            />


           <Marker position={center}>
            <Popup>Anti-Age Expert</Popup>
            <Tooltip>Мы здесь</Tooltip>
           </Marker>

           <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
        </MapContainer>
    </div>
  )
}

export default Map