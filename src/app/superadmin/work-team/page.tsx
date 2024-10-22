'use client'

import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeTable from "@/app/components/BusmeTable";
import { IoPersonAdd } from "react-icons/io5";
import BusmeCardButtonHeader from "@/app/components/BusmeCardButtonHeader";
import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { BusmeSweetAlert, BusmeSweetAlertIconType } from "@/app/components/BusmeSweetAlert";

const Headers = ['Nombre', 'Correo electrónico', 'Teléfono', 'Rol', 'Fecha ingreso'];

type UserData = {
    _id: string;
    nombre: {
        nombres: string;
        apellidoP: string;
        apellidoM: string;
    };
    correo: string;
    telefono: string;
    tipoUsuario: string;
    createdAt: string;
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
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            // Manejar caso en el que el token no esté presente
            console.error('Token no encontrado');
        }
    }, []);

    const handleEditUser = () => {

    }

    const handleDeleteUser = (_id: string) => {
        console.log("ID del usuario a eliminar:", _id); // Agregar esta línea para verificar el ID

        BusmeSweetAlert(
            '¿Estás seguro?',
            'Esta acción eliminará permanentemente al usuario. ¿Estás seguro de que quieres continuar?',
            BusmeSweetAlertIconType.Warning,
            () => {
                const token = Cookies.get('token');
                if (token) {
                    // Realizar solicitud para eliminar el usuario
                    fetch(`http://localhost:3000/admin/${_id}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `${token}`,
                        }
                    })
                        .then(response => {
                            if (response.ok) {
                                // Actualizar los datos del equipo de trabajo después de la eliminación
                                setWorkTeamData(prevData => prevData.filter(usuarios => usuarios._id !== _id));
                                BusmeSweetAlert(
                                    '¡Usuario eliminado!',
                                    'El usuario ha sido eliminado correctamente.',
                                    BusmeSweetAlertIconType.Success
                                );
                            } else {
                                throw new Error('Error al eliminar usuario');
                            }
                        })
                        .catch(error => {
                            console.error(error);
                        });
                } else {
                    // Manejar caso en el que el token no esté presente
                    console.error('Token no encontrado');
                }
            },
            true
        );
    };

    return (
        <div>
            <BusmePageHeader rol={"Superadministrador"} title={"Equipo de trabajo"} username={"Anthony"} />
            <BusmeCard>
                <BusmeCardButtonHeader to={"/superadmin/work-team/new-user"} buttonText={"Agregar usuario"} icon={IoPersonAdd} />
                {workTeamData.length > 0 ? (
                    <BusmeTable
                        headers={Headers}
                        data={workTeamData.map(usuarios => [
                            usuarios._id,
                            usuarios.nombre.nombres + ' ' + usuarios.nombre.apellidoP + ' ' + usuarios.nombre.apellidoM,
                            usuarios.correo,
                            usuarios.telefono,
                            usuarios.tipoUsuario,
                            new Date(usuarios.createdAt).toLocaleDateString(),
                        ])}
                        showDeleteColumn={true}
                        showEditColumn={true}
                        eventHandlers={{
                            onDelete: handleDeleteUser,
                            onEdit: handleEditUser
                        }}
                    />
                ) : (
                    <p>Cargando datos del equipo de trabajo...</p>
                )}
            </BusmeCard>
        </div>
    )
}