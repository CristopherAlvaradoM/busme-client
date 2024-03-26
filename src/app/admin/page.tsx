"use client"

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import BusmePageHeader from "../components/BusmePageHeader";
import BusmeInput from "../components/BusmeInput";
import { Formik } from "formik";
import BusmeSecondaryButton from "../components/BusmeSecondaryButton";
import BusmeCard from "../components/BusmeCard";

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
            <div className="flex justify-between pb-10 gap-x-4">
                <div className='w-7/12 flex-grow'>
                    <BusmeCard>
                        <p className="subtitle-text">Autobuses en recorrido</p>
                        <table className="w-full text-center font-poppins">
                            <thead>
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
                    </BusmeCard>
                </div>
                <div className='w-5/12 flex-grow'>
                    <BusmeCard>
                        <p className="subtitle-text">Crear aviso rápido</p>
                        <Formik
                            initialValues={{ title: '', noticeContent: '' }}
                            validate={values => {
                                const errors = {} as { title?: string, noticeContent?: string };
                                if (!values.title) {
                                    errors.title = 'Campo requerido';
                                }
                                if (!values.noticeContent) {
                                    errors.noticeContent = 'Campo requerido';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <BusmeInput
                                            name="title"
                                            title=""
                                            placeholder="Ingresa un título para el aviso"
                                            type={"text"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.title}
                                            validation={errors.title && touched.title && errors.title}
                                        />
                                    </div>
                                    <div className="">
                                        <BusmeInput
                                            name="noticeContent"
                                            title=""
                                            placeholder="Coloca el contenido del aviso"
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.noticeContent}
                                            validation={errors.noticeContent && touched.noticeContent && errors.noticeContent}
                                        />
                                    </div>
                                    <BusmeSecondaryButton title="Guardar aviso" disabled={isSubmitting} />
                                </form>
                            )}
                        </Formik>
                    </BusmeCard>
                </div>
            </div>
        </div >
    );
}