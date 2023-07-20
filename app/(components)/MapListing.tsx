"use client";
import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

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