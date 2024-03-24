"use client"

import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import BusmePageHeader from "../components/BusmePageHeader";
import BusmeInput from "../components/BusmeInput";

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

interface BusesRecorrido {
    'Nombre': string;
    'No. de placas': string;
    'Chofer': string;
    'Estado': string;
    'Sig. Parada': string;
}

const header: (keyof BusesRecorrido)[] = ['Nombre', 'No. de placas', 'Chofer', 'Estado', 'Sig. Parada'];
const data: BusesRecorrido[] = [
    { 'Nombre': 'BUS-A', 'No. de placas': 'AHJ-91S2', 'Chofer': 'Daniel M.', 'Estado': 'En ruta', 'Sig. Parada': 'Las Cuatas' },
    { 'Nombre': 'BUS-B', 'No. de placas': 'V1K-X125', 'Chofer': 'Arturo P.', 'Estado': 'Abordando', 'Sig. Parada': 'Banus' },
];

export default function Page() {
    const saludo = textoSaludo()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentError, setContentError] = useState("");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleTitleBlur = () => {
        if (!title) {
            setTitleError("El título es requerido");
        } else {
            setTitleError("");
        }
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const handleContentBlur = () => {
        if (!content) {
            setContentError("El contenido es requerido");
        } else {
            setContentError("");
        }
    };

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
                <div ref={mapRef} style={{ width: "100%", height: "350px" }}></div>
            </div>
            <div className="grid grid-cols-12 w-full h-full  mt-6 gap-x-4">
                <div className='col-span-7 bg-white rounded-2xl p-5'>
                    <p className="subtitle-text">Autobuses en recorrido</p>
                    <table className="w-full text-center font-poppins mt-5">
                        <thead className="text-black border-white">
                            <tr>
                                {header.map(columna => (
                                    <th key={columna} className="px-5 py-3 font-Bold">{columna}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(constante => (
                                <tr key={constante.Nombre} className="font-poppins text-black">
                                    {header.map(columna => (
                                        <td key={columna} className="px-3">
                                            <div className={`px-3 py-1.5 mb-2 
                                            ${columna === 'Estado' ? (constante.Estado === 'En ruta' ? 'bg-primary-800 text-white rounded-3xl text-sm font-semi-bold' :
                                                    (constante.Estado === 'Abordando' ? 'bg-warning text-white rounded-3xl text-sm font-semi-bold' : '')) : ''}`}>
                                                {constante[columna]}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='col-span-5 bg-white rounded-2xl p-4'>
                    <p className="subtitle-text">Crear aviso rápido</p>
                    <BusmeInput
                        title=""
                        name="titleNotice"
                        type="text"
                        placeholder="Ingresa un título para el aviso"
                        onChange={handleTitleChange}
                        onBlur={handleTitleBlur}
                        value={title}
                        validation={titleError}
                    />

                    <BusmeInput
                        title=""
                        name="noticeContent"
                        type="text"
                        placeholder="Coloca el contenido del aviso"
                        onChange={handleContentChange}
                        onBlur={handleContentBlur}
                        value={content}
                        validation={contentError}
                    />
                </div>
            </div>
        </div>
    );
}