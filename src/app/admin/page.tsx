"use client"

import { Metadata } from "next";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import BusmePageHeader from "../components/BusmePageHeader";



function textoSaludo(): string {
    const horaActual = new Date().getHours();
    let saludo: string;

    if (horaActual >= 5 && horaActual < 12) {
        saludo = "Buenos días,";
    } else if (horaActual >= 12 && horaActual < 18) {
        saludo = "Buenas tardes,";
    } else {
        saludo = "Buenas noches,";
    }

    return saludo;
}

export default function Page() {
    const saludo = textoSaludo()

    const mapRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {

        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary('maps')

            // init a marker
            const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

            const position = {
                lat: 20.48387113788655,
                lng: -103.53318376345612
            };

            // map options
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 15,
                mapId: "MY_NEXTJS_MAPID",
            }

            // setup the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            // put a marker 
            const marker = new Marker({
                map: map,
                position: position,
            });

        }
        initMap();
    }, []);

    return (
        <div>
            <BusmePageHeader title={saludo + " " + "Anthony"} username={"Anthony"} rol={"Administrador"} />
            <div className="mt-5">
                <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>
            </div>
            <div className="grid grid-cols-12 w-full h-full items-center mt-6 gap-x-4">
                <div className='col-span-7 bg-white rounded-2xl p-3'>
                    <p className="subtitle-text">Autobuses en recorrido</p>
                </div>
                <div className='col-span-5 bg-white rounded-2xl p-4'>
                    <p className="subtitle-text">Crear aviso rápido</p>
                </div>
            </div>
        </div>
    );
}