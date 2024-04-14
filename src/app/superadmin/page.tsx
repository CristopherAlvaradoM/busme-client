"use client";

import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeTable from "@/app/components/BusmeTable";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeCardHeader from "@/app/components/BusmeCardHeader";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

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

const saludo = textoSaludo();

const workTeamHeaders = [
  "Nombre",
  "Correo electrónico",
  "Teléfono",
  "Rol",
  "Fecha ingreso",
];

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

const rolsHeaders = [
  "Nombre",
  "Acceso a"
];

type RolData = {
  nombre: string;
  acceso: string[];
};

export default function SuperAdminPage() {

  const [workTeamData, setWorkTeamData] = useState<UserData[]>([]);
  const [rolsData, setRolsData] = useState<RolData[]>([]);

  useEffect(() => {
    // Obtener el token de las cookies
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

      // Realizar solicitud para obtener datos de roles
      fetch('http://localhost:3000/rols', {
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
      <BusmePageHeader
        title={saludo + " " + "Anthony"}
        username={"Anthony"}
        rol={"Superadministrador"}
      />
      <BusmeCard>
        <BusmeCardHeader subtitle={"Lista de equipo de trabajo"} linkText={"Ver más"} to={"/superadmin/work-team"} />
        {workTeamData.length > 0 ? (
          <BusmeTable
            headers={workTeamHeaders}
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

      <BusmeCard>
        <BusmeCardHeader subtitle={"Lista de roles de administración"} linkText={"Ver más"} to={"/superadmin/roles"} />
        {rolsData.length > 0 ? (
          <BusmeTable
            headers={rolsHeaders}
            data={rolsData.map(rols => [
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