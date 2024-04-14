'use client'

import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeTable from "@/app/components/BusmeTable";
import { IoPersonAdd } from "react-icons/io5";
import BusmeCardButtonHeader from "@/app/components/BusmeCardButtonHeader";
import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";

const Headers = ['Nombre', 'Correo electrónico', 'Teléfono', 'Rol', 'Fecha ingreso'];

type UserData = {
    nombre: {
        nombres: string;
        apellidoP: string;
    };
    correo: string;
    telefono: string;
    tipoUsuario: string;
    createdAt: string; // O el tipo de dato correcto para la fecha de ingreso
};

export default function WorkTeamPage() {
    const [workTeamData, setWorkTeamData] = useState<UserData[]>([]);

    useEffect(() => {
        const token = Cookies.get('token');

        // Verificar si el token está presente
        if (token) {
            // Realizar solicitud para obtener datos del equipo de trabajo
            fetch('http://localhost:3000/admin', {
                method: 'GET',
                headers: {
                    'Authorization': `${token}`,
                }
            })
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error('Error al obtener datos del equipo de trabajo');
                })
                .then(data => {
                    setWorkTeamData(data);
                    console.log('Datos del equipo de trabajo:', data);

                    // Aquí puedes verificar el formato de los datos antes de pasarlos a la tabla
                    console.log('Formato de datos del equipo de trabajo:', data);
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
            <BusmePageHeader rol={"Superadministrador"} title={"Equipo de trabajo"} username={"Anthony"} />
            <BusmeCard>
                <BusmeCardButtonHeader to={"/superadmin/work-team/new-user"} buttonText={"Agregar usuario"} icon={IoPersonAdd} />
                {workTeamData.length > 0 ? (
                    <BusmeTable
                        headers={Headers}
                        data={workTeamData.map(usuarios => [
                            usuarios.nombre.nombres + ' ' + usuarios.nombre.apellidoP,
                            usuarios.correo,
                            usuarios.telefono,
                            usuarios.tipoUsuario,
                            new Date(usuarios.createdAt).toLocaleDateString()
                        ])}
                    />
                ) : (
                    <p>Cargando datos del equipo de trabajo...</p>
                )}
            </BusmeCard>
        </div>
    )
}