"use client"
import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeInput from "@/app/components/BusmeInput";
import { Formik } from "formik";
import BusmeSecondaryButton from "@/app/components/BusmeSecondaryButton";
import React from "react";
import BusmeSelect from "@/app/components/BusmeSelect";

export default function NewVehiclePage() {

    const status = [
        { value: 'Active', label: 'En reparacion' },
        { value: 'damaged', label: 'Dañado' },
        { value: 'repairing', label: 'En reparacion' },
        { value: 'inactive', label: 'Inactivo' }
    ]

    const routes = [
        { value: 'route1', label: 'UTZMG - Las cuatas' },
        { value: 'route2', label: 'UTZMG - Banús' }
    ]

    const schedule = [
        { value: 'schedule1', label: '7:00 - 7:30' },
        { value: 'schedule2', label: '7:30 - 8:00' },
        { value: 'schedule3', label: '8:00 - 8:20' }
    ]

    return (
        <div>
            <BusmePageHeader rol={"Superusuario"} title={"Nuevo Vehículo"} username={"Anthony"}
                showBackIcon={true} />
            <div className="flex justify-between h-full pb-10">
                <Formik
                    initialValues={{ name: '', licensePlateNumber: '', status: '', routes: '', schedule: '', driver: '' }}
                    validate={values => {
                        const errors = {} as { name?: string, licensePlateNumber?: string, status?: string, routes?: string, schedule?: string, driver?: string };
                        if (!values.name) {
                            errors.name = 'Campo requerido';
                        }
                        if (!values.licensePlateNumber) {
                            errors.licensePlateNumber = 'Campo requerido';
                        }
                        if (!values.status) {
                            errors.status = 'Campo requerido';
                        }
                        if (!values.routes) {
                            errors.routes = 'Campo requerido';
                        }
                        if (!values.schedule) {
                            errors.schedule = 'Campo requerido';
                        }
                        if (!values.driver) {
                            errors.driver = 'Campo requerido';
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
                        /* and other goodies */
                    }) => (
                        <>
                            <div className="flex-grow">
                                <BusmeCard>
                                    <p className="subtitle-text">Información del vehículo</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex justify-between">
                                            <div className="w-1/2">
                                                <BusmeInput name={"name"} title={"Nombre"}
                                                    placeholder={"Ingresa el nombre del vehículo"}
                                                    type={"text"}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    value={values.name}
                                                    validation={errors.name && touched.name && errors.name} />
                                            </div>
                                            <div className="mx-4" />
                                            <div className="w-1/2">
                                                <BusmeInput name={"licensePlateNumber"} title={"Número de placa"}
                                                    placeholder={"Ingresa el número de placa"}
                                                    type={"text"} onChange={handleChange} onBlur={handleBlur}
                                                    value={values.licensePlateNumber}
                                                    validation={errors.licensePlateNumber && touched.licensePlateNumber && errors.licensePlateNumber} />
                                            </div>
                                        </div>
                                        <BusmeSelect
                                            name="status"
                                            label="Estado"
                                            options={status}
                                        />
                                        <p className="subtitle-text mt-5">Selecciona una ruta</p>
                                        <div className="flex justify-between">
                                            <div className="w-1/2">
                                                <BusmeSelect
                                                    name="routes"
                                                    label="Rutas"
                                                    options={routes}
                                                />
                                            </div>
                                            <div className="mx-4" />
                                            <div className="w-1/2">
                                                <BusmeSelect
                                                    name="schedule"
                                                    label="Horario"
                                                    options={schedule}
                                                />
                                            </div>
                                        </div>
                                        <BusmeInput name={"driver"} title={"Chofer"}
                                            placeholder={"Nombre del chofer"}
                                            type={"text"}
                                            onChange={handleChange} onBlur={handleBlur}
                                            value={values.driver}
                                            validation={errors.driver && touched.driver && errors.driver} />
                                        <BusmeSecondaryButton title={"Generar nuevo vehículo"} disabled={isSubmitting} />
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