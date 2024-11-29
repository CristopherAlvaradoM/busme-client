'use client'

import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeTable from "@/app/components/BusmeTable";
import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";

const Headers = ['Nombre', 'Con acceso a'];

type RolData = {
    _id: string;
    nombre: string;
    acceso: string[];
};

export default function Page() {
    const [rolsData, setRolsData] = useState<RolData[]>([]);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/rols`, {
                method: 'GET',
                headers: {
                    'Authorization': `${token}`,
                }
            })
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error('Error al obtener datos de roles');
                })
                .then(data => {
                    setRolsData(data);
                    console.log('Datos de roles:', data);

                    // Aquí puedes verificar el formato de los datos antes de pasarlos a la tabla
                    console.log('Formato de datos de roles:', data);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            // Manejar caso en el que el token no esté presente
            console.error('Token no encontrado');
        }
    }, []);

    return (
        <div>
            <BusmePageHeader title={"Roles de administración"} rol={"Superadministrador"} username={"Anthony"} />
            <BusmeCard>
                {rolsData.length > 0 ? (
                    <BusmeTable
                        headers={Headers}
                        data={rolsData.map(rols => [
                            rols._id,
                            rols.nombre,
                            rols.acceso.map(acceso => Object.keys(acceso)[0]).join(' - ')
                        ])}
                    />
                ) : (
                    <p>Cargando datos de roles...</p>
                )}
            </BusmeCard>
        </div>
    );
}