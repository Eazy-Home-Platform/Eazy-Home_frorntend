"use client";
import React, { useMemo, useState, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm.providers";
export default function MapComponent() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyD9BO8dmbho4t_Ct3ALeOy0C41u8x3KChk"
    })

    if(!isLoaded) return <div>Loading...</div>
    return <MapListing />
}

const MapListing = () => {
    const center = useMemo(() => ({ lat: 44, lng: -80}), [])
    return (
        <GoogleMap zoom={10} center={center} mapContainerStyle={{
            width: "100%",
            height: "80vh"
        }}>
            <Marker position={center} />
        </GoogleMap>
    )
}

// const MapListing = () => {
//     const [center, setCenter ] = useState({ lat: 13.08, lng: 80.248 });
//     const ZOOM_LEVEL = 2;
//     const mapRef = useRef();
//     return (
//         <div>
//             <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{
//                 width: "100%",
//                 height: "400px",
                
//             }}>
//                 <TileLayer 
//                     attribution={osm.maptiler.attribution}
//                     url={osm.maptiler.url} 
//                 />
//             </MapContainer>
//         </div>
//     )
// }

// export default MapListing