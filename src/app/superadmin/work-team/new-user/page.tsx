"use client"

import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeInput from "@/app/components/BusmeInput";
import { Formik } from "formik";
import BusmeSecondaryButton from "@/app/components/BusmeSecondaryButton";
import React, { useState } from "react";
import BusmeSelect from "@/app/components/BusmeSelect";
import { BusmeSweetAlert, BusmeSweetAlertIconType } from "@/app/components/BusmeSweetAlert";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function NewUserPage() {
    const router = useRouter();
    const [error, setError] = useState(null);

    const options = [
        { value: 'Superadministrador', label: 'Super Administrador', privileges: ['Crear usuarios', 'Crear roles'] },
        {
            value: 'Administrador',
            label: 'Administrador',
            privileges: ['Visualización de vehículos de transporte en tiempo real', 'Creación y envío de avisos', 'Estadísticas y gráficos', 'Administración de vehículos', 'Administración de rutas']
        },
        { value: 'Calidad', label: 'Calidad', privileges: ['Control y gestión de quejas/comentarios'] }
    ];

    return (
        <div>
            <BusmePageHeader
                rol={"Superadministrador"}
                title={"Nuevo usuario"}
                username={"Anthony"}
                showBackIcon={true} />
            <div className="flex flex-col lg:flex-row justify-between">
                <Formik
                    initialValues={{
                        name: '',
                        paternalLastName: '',
                        maternalLastName: '',
                        telephone: '',
                        email: '',
                        role: '',
                        password: ''
                    }}
                    validate={values => {
                        const errors = {} as {
                            name?: string,
                            paternalLastName?: string,
                            maternalLastName?: string,
                            telephone?: string,
                            email?: string,
                            role?: string,
                            password?: string
                        };
                        if (!values.name) {
                            errors.name = 'Campo requerido';
                        }
                        if (!values.paternalLastName) {
                            errors.paternalLastName = 'Campo requerido';
                        }
                        if (!values.maternalLastName) {
                            errors.maternalLastName = 'Campo requerido';
                        }
                        if (!values.telephone) {
                            errors.telephone = 'Campo requerido';
                        } else if (values.telephone.length < 10 || values.telephone.length > 10) {
                            errors.telephone = 'Debe tener 10 dígitos';
                        } else if (!/^\d+$/.test(values.telephone)) {
                            errors.telephone = 'Debe contener solo números';
                        }
                        if (!values.email) {
                            errors.email = 'Campo requerido';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Dirección de correo electrónico inválida';
                        }
                        if (!values.role) {
                            errors.role = 'Campo requerido';
                        }
                        if (!values.password) {
                            errors.password = 'Campo requerido';
                        } else if (values.password.length < 8) {
                            errors.password = 'La contraseña debe tener al menos 8 caracteres';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        const token = Cookies.get('token');

                        fetch('http://localhost:3000/admin', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `${token}`
                            },
                            body: JSON.stringify({
                                nombre: {
                                    nombres: values.name,
                                    apellidoP: values.paternalLastName,
                                    apellidoM: values.maternalLastName
                                },
                                telefono: values.telephone,
                                correo: values.email,
                                tipoUsuario: values.role,
                                contrasena: values.password
                            }),
                        })
                            .then(response => {
                                setSubmitting(false);
                                if (response.ok) {
                                    // Si la respuesta es exitosa, puedes redirigir al usuario o mostrar una alerta
                                    BusmeSweetAlert(
                                        '¡Usuario nuevo generado!',
                                        '',
                                        BusmeSweetAlertIconType.Success
                                    );
                                    setTimeout(() => {
                                        router.back();
                                    }, 400);
                                } else {
                                    // Si la respuesta no es exitosa, maneja el error
                                    throw new Error('Error al generar el nuevo usuario');
                                }
                            })
                            .catch(error => {
                                setSubmitting(false);
                                // Muestra el error al usuario
                                setError(error.message);
                            });
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, }) => (
                        <>
                            <div className="lg:w-7/12 lg:mr-7">
                                <BusmeCard>
                                    <p className="subtitle-text">Información del usuario</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex justify-between">
                                            <div className="w-1/2">
                                                <BusmeInput
                                                    name={"name"}
                                                    title={"Nombre(s)"}
                                                    placeholder={"Ingresa el nombre del usuario"}
                                                    type={"text"}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    value={values.name}
                                                    validation={errors.name && touched.email && errors.name} />
                                            </div>
                                            <div className="mx-4" />
                                            <div className="w-1/2">
                                                <BusmeInput
                                                    name={"paternalLastName"}
                                                    title={"Apellido paterno"}
                                                    placeholder={"Ingresa el apellido paterno"}
                                                    type={"text"} onChange={handleChange} onBlur={handleBlur}
                                                    value={values.paternalLastName}
                                                    validation={errors.paternalLastName && touched.paternalLastName && errors.paternalLastName} />
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="w-1/2">
                                                <BusmeInput
                                                    name={"maternalLastName"}
                                                    title={"Apellido materno"}
                                                    placeholder={"Ingresa el apellido materno"}
                                                    type={"text"}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    value={values.maternalLastName}
                                                    validation={errors.maternalLastName && touched.maternalLastName && errors.maternalLastName} />
                                            </div>
                                            <div className="mx-4" />
                                            <div className="w-1/2">
                                                <BusmeInput
                                                    name={"telephone"}
                                                    title={"Número de teléfono"}
                                                    placeholder={"Ingresa tu número de teléfono"}
                                                    type={"tel"} onChange={handleChange} onBlur={handleBlur}
                                                    value={values.telephone}
                                                    validation={errors.telephone && touched.telephone && errors.telephone} />
                                            </div>
                                        </div>
                                        <p className="subtitle-text mt-5">Información de la cuenta</p>
                                        <div className="flex justify-between">
                                            <div className="w-1/2">
                                                <BusmeInput
                                                    name={"email"}
                                                    title={"Correo electrónico"}
                                                    placeholder={"correo@dominio.com"}
                                                    type={"email"}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    value={values.email}
                                                    validation={errors.email && touched.email && errors.email} />
                                            </div>
                                            <div className="mx-4" />
                                            <div className="w-1/2">
                                                <BusmeSelect
                                                    name="role"
                                                    label="Rol de usuario"
                                                    options={options}
                                                />
                                            </div>
                                        </div>
                                        <BusmeInput
                                            name={"password"}
                                            title={"Contraseña"}
                                            placeholder={"Ingresa una contraseña"}
                                            type={"password"}
                                            onChange={handleChange} onBlur={handleBlur}
                                            value={values.password}
                                            validation={errors.password && touched.password && errors.password} />
                                        <BusmeSecondaryButton
                                            title={"Generar nuevo perfil de usuario"}
                                            type="submit" 
                                            disabled={isSubmitting}
                                        />
                                    </form>
                                </BusmeCard>
                            </div>
                            <div className="lg:w-5/12 mt-7 lg:mt-0">
                                <BusmeCard>
                                    <p className="subtitle-text">Vista previa</p>
                                    <p className="body-text mt-5">Estás a punto de crear un nuevo perfil para:</p>
                                    <p className="bold-body-text">{values.name} {values.paternalLastName} {values.maternalLastName}</p>
                                    <p className="body-text mt-5">Con el siguiente rol de usuario:</p>
                                    <p className="bold-body-text">{values.role}</p>
                                    <p className="body-text mt-5">Teniendo permisos para acceder y/o modificar la
                                        siguiente información:</p>
                                    <p className="bold-body-text">{values.role}</p>
                                </BusmeCard>
                            </div>
                        </>
                    )}
                </Formik>
            </div>
        </div>
    );
}