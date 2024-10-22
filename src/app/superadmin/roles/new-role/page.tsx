"use client"
import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeInput from "@/app/components/BusmeInput";
import {Formik} from "formik";
import BusmeSecondaryButton from "@/app/components/BusmeSecondaryButton";
import React from "react";
import BusmeCheckbox from "@/app/components/BusmeCheckbox";
import {BusmeSweetAlert, BusmeSweetAlertIconType} from "@/app/components/BusmeSweetAlert";

export default function NewUserPage() {

    const pages_access = [
        { value: 'superadmin', label: 'Transporte en tiempo real'},
        { value: 'superadmin', label: 'Equipo de trabajo'},
        { value: 'superadmin', label: 'Buzón de quejas'},
        { value: 'superadmin', label: 'Gestión de transporte'},
        { value: 'superadmin', label: 'Gestión de rutas'},
        { value: 'superadmin', label: 'Creación de avisos'},
        { value: 'superadmin', label: 'Estadísticas y gráficos'},
        { value: 'superadmin', label: 'Gestión de roles'},
    ]

    return (
        <div>
            <BusmePageHeader rol={"Superadministrador"} title={"Nuevo rol"} username={"Anthony"}
                             showBackIcon={true}/>
            <div className="flex justify-between h-full">
                <Formik
                    initialValues={{ rolName: '', selectedPages: [] }}
                    validate={values => {
                        const errors = {} as { rolName?: string, selectedPages?: string };
                        if (!values.rolName) {
                            errors.rolName = 'Campo requerido';
                        }
                        if (values.selectedPages.length === 0) {
                            errors.selectedPages = 'Selecciona al menos una página';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            BusmeSweetAlert(
                                'Título de la Alerta',
                                'Contenido de la Alerta',
                                BusmeSweetAlertIconType.Success
                            );
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
                          /* and other goodies */
                      }) => (
                        <>
                            <div className="w-full flex-grow">
                                <BusmeCard>
                                    <p className="subtitle-text">Información del rol</p>
                                    <form onSubmit={handleSubmit}>
                                        <BusmeInput name={"rolName"} title={"Nombre del rol"}
                                                    placeholder={"Ingresa el nombre del rol"}
                                                    type={"text"}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    value={values.rolName}
                                                    validation={errors.rolName && touched.rolName && errors.rolName}/>
                                        <p className="subtitle-text mt-10">Selecciona a que información tendrá acceso el rol</p>
                                        <div className="flex flex-wrap py-5">
                                            {pages_access.map(page => (
                                                <div className="w-1/3" key={page.label}>
                                                    <BusmeCheckbox
                                                        value={page.value}
                                                        name={page.value}
                                                        label={page.label}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        {errors.selectedPages && <div className="error-text">{errors.selectedPages}</div>}
                                        <BusmeSecondaryButton title={"Generar nuevo perfil de usuario"}
                                                              disabled={isSubmitting}/>
                                    </form>
                                </BusmeCard>
                            </div>
                        </>
                    )}
                </Formik>
            </div>
        </div>
    );
}