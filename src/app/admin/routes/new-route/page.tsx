"use client"
import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import BusmeSelectHours from "@/app/components/BusmeSelectHours";
import BusmeCard from "@/app/components/BusmeCard";
import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeInput from "@/app/components/BusmeInput";
import BusmeSecondaryButton from "@/app/components/BusmeSecondaryButton";
import BusmeModal from "@/app/components/BusmeModal";
import {BusmeSweetAlert, BusmeSweetAlertIconType} from "@/app/components/BusmeSweetAlert";
import { Formik, Field} from 'formik';
import {IoPencilOutline, IoTrashOutline} from "react-icons/io5";


const NewRoutePage = () => {
    const [departureTime, setDepartureTime] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [boardingPoints, setBoardingPoints] = useState([]);
    const [newBoardingPoint, setNewBoardingPoint] = useState({
        name: '',
        latitude: '',
        longitude: ''
    });
    const mapRef = useRef(null);

    // Función para abrir el modal
    const openModal = () => {
        setIsModalOpen(true);
    };
    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly'
            });

            const google = await loader.load();
            if (!google) {
                console.error("No se pudo cargar la API de Google Maps");
                return;
            }

            if (mapRef.current) {
                const map = new google.maps.Map(mapRef.current, {
                    center: { lat: 20.48387113788655, lng: -103.53318376345612 },
                    zoom: 13,
                });
            }
            

            // Agregar marcadores de puntos de abordaje
            boardingPoints.forEach(point => {
                new google.maps.Marker({
                    position: { lat: parseFloat(point.latitude), lng: parseFloat(point.longitude) },
                    map,
                    title: point.name,
                });
            });
        };

        initMap();
    }, [boardingPoints]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBoardingPoint({
            ...newBoardingPoint,
            [name]: value
        });
    };

    const handleDepartureTimeChange = (e, setFieldValue) => {
        const { value } = e.target;
        setFieldValue('departureTime', value);
        setDepartureTime(value);
    };

    const handleArrivalTimeChange = (e, setFieldValue) => {
        const { value } = e.target;
        setFieldValue('arrivalTime', value);
        setArrivalTime(value);
    };

    const handleDeleteBoardingPoint = (index) => {
        const updatedBoardingPoints = [...boardingPoints];
        updatedBoardingPoints.splice(index, 1);
        setBoardingPoints(updatedBoardingPoints);
    };

    const handleEditBoardingPoint = (index) => {
        const pointToEdit = boardingPoints[index];
        setNewBoardingPoint(pointToEdit);
        setIsModalOpen(true);
        setEditingIndex(index); // Guarda el índice del punto que se está editando
    };

    const [editingIndex, setEditingIndex] = useState(null);

    const handleBoardingPointAction = () => {
        if (editingIndex !== null && editingIndex !== undefined) {
            // Si se está editando un punto existente
            const updatedBoardingPoints = [...boardingPoints];
            updatedBoardingPoints[editingIndex] = newBoardingPoint;
            setBoardingPoints(updatedBoardingPoints);
            setEditingIndex(null); // Restablece el índice de edición
        } else {
            // Si no se está editando un punto existente, se está agregando uno nuevo
            setBoardingPoints([...boardingPoints, newBoardingPoint]);
        }
        setNewBoardingPoint({
            name: '',
            latitude: '',
            longitude: ''
        });
        closeModal();
    };


    return (
        <div>
            <BusmePageHeader
                rol={"Administrador"}
                title={"Nueva Ruta"}
                username={"Anthony"}
                showBackIcon={true}
            />
            <div>
                <BusmeCard>
                    <Formik
                        initialValues={{name: '', departureTime: '', arrivalTime: '', driverName: '', driverLastName: '', driverEmail: '', employeeNumber: ''}}
                        validate={values => {
                            const errors = {} as {name?: string, driverName?: string, driverLastName?: string, driverEmail?: string, employeeNumber?: string, departureTime?: string, arrivalTime?: string}
                            if (!values.name) {
                                errors.name = 'Campo requerido';
                            }
                            if (!values.driverName) {
                                errors.driverName = 'Campo requerido';
                            }
                            if (!values.driverLastName) {
                                errors.driverLastName = 'Campo requerido';
                            }
                            if (!values.driverEmail) {
                                errors.driverEmail = 'Campo requerido';
                            }
                            if (!values.employeeNumber) {
                                errors.employeeNumber = 'Campo requerido';
                            }
                            if (!values.departureTime) {
                                errors.departureTime = 'Campo requerido';
                            }
                            if (!values.arrivalTime) {
                                errors.arrivalTime = 'Campo requerido';
                            }
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                // Realiza las acciones de envío del formulario aquí
                               // await createRoute(values);
                                BusmeSweetAlert(
                                    'Ruta creada con éxito',
                                    '¡La nueva ruta se ha creado satisfactoriamente!',
                                    BusmeSweetAlertIconType.Success
                                );
                            } catch (error) {
                                console.error("Error al crear la ruta:", error);
                                BusmeSweetAlert(
                                    'Error',
                                    'Hubo un error al crear la ruta. Por favor, inténtalo de nuevo más tarde.',
                                    BusmeSweetAlertIconType.Error
                                );
                            }
                            setSubmitting(false);
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-8">
                                    <div className="w-full flex flex-row gap-8">
                                        <div className="flex flex-col w-4/12">
                                            <p className="subtitle-text">Información de la ruta</p>
                                            <div className="">
                                                <BusmeInput name={"name"} title={"Nombre"}
                                                            placeholder={"Ingresa el nombre de la ruta"}
                                                            type={"text"}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.name}
                                                            validation={errors.name}
                                                />
                                                <div className="grid grid-cols-2 gap-x-8">
                                                    <BusmeSelectHours
                                                        placeholder="Hora de salida"
                                                        value={departureTime}
                                                        onChange={(e) => handleDepartureTimeChange(e, setFieldValue)}
                                                        validation={errors.departureTime}
                                                    />
                                                    <BusmeSelectHours
                                                        placeholder="Hora de llegada"
                                                        value={arrivalTime}
                                                        onChange={(e) => handleArrivalTimeChange(e, setFieldValue)}
                                                        validation={errors.arrivalTime}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-8/12">
                                            <p className="subtitle-text">Chofer asignado</p>
                                            <div className="grid grid-cols-2 gap-x-8">
                                                <BusmeInput name={"driverName"} title={"Nombre(s)"}
                                                            placeholder={"Ingresa el nombre del chofer"}
                                                            type={"text"}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.driverName}
                                                            validation={errors.driverName}
                                                />
                                                <BusmeInput name={"driverLastName"} title={"Apellido(s)"}
                                                            placeholder={"Ingresa el apellido del chofer"}
                                                            type={"text"}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.driverLastName}
                                                            validation={errors.driverLastName}
                                                />
                                                <BusmeInput name={"driverEmail"} title={"Correo"}
                                                            placeholder={"correo@ejemplo.com"}
                                                            type={"email"}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.driverEmail}
                                                            validation={errors.driverEmail}
                                                />
                                                <BusmeInput name={"employeeNumber"} title={"Número de empleado"}
                                                            placeholder={"Ingresa el número de empleado"}
                                                            type={"text"}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.employeeNumber}
                                                            validation={errors.employeeNumber}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-row gap-x-8">
                                        <div className="flex flex-col w-4/12 h-full">
                                            <p className="subtitle-text">Mapa de la ruta</p>
                                            <div className="flex flex-col">
                                                <p className="body-text mt-5">Añade los puntos de abordaje de la ruta</p>
                                                <div className="h-60 overflow-auto">
                                                    {boardingPoints.map((point, index) => (
                                                        <div key={index} className="flex justify-between items-center">
                                                            <BusmeInput
                                                                disabled={true}
                                                                key={index}
                                                                name={`destination_${index}`}
                                                                title={""}
                                                                placeholder={"Nombre del punto"}
                                                                type={"text"}
                                                                onChange={() => {
                                                                }}
                                                                onBlur={() => {
                                                                }}
                                                                value={point.name}
                                                                validation={''}
                                                            />
                                                            <div
                                                                className="justify-center ml-2 rounded-lg bg-muted-100 p-4 font-poppins mt-6 hover:bg-primary-800 transition ease-in-out duration-300 cursor-pointer"
                                                                onClick={() => handleEditBoardingPoint(index)}
                                                            >
                                                                <IoPencilOutline
                                                                    className="w-[20px] h-[20px] cursor-pointer hover:text-white transition ease-in-out duration-300"/>
                                                            </div>
                                                            <div
                                                                className="justify-center ml-2 rounded-lg bg-muted-100 p-4 font-poppins mt-6 hover:bg-danger transition ease-in-out duration-300 cursor-pointer"
                                                                onClick={() => handleDeleteBoardingPoint(index)}>
                                                                <IoTrashOutline
                                                                    className="w-[20px] h-[20px] text-danger cursor-pointer hover:text-white transition ease-in-out duration-300"/>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <BusmeSecondaryButton
                                                    title={"Añadir punto de abordaje"}
                                                    disabled={false}
                                                    onClick={openModal}
                                                />
                                                <BusmeModal
                                                    isOpen={isModalOpen}
                                                    onClose={closeModal}
                                                    showIcon={true}
                                                    successButtonTitle="Aceptar"
                                                    buttonFunction={handleBoardingPointAction}
                                                    disabled={!newBoardingPoint.name || !newBoardingPoint.latitude || !newBoardingPoint.longitude}
                                                >
                                                    {/* Contenido del modal */}
                                                    <div className="w-full h-full">
                                                        <p className="modal-title-text">Nuevo punto de abordaje</p>
                                                        <p className="modal-body-text">Agrega la información para el nuevo punto de abordaje</p>
                                                        <BusmeInput
                                                            name={"name"}
                                                            title={"Nombre"}
                                                            placeholder={"Ingresa el nombre del punto de abordaje"}
                                                            type={"text"}
                                                            onChange={handleInputChange}
                                                            onBlur={() => {}}
                                                            value={newBoardingPoint.name}
                                                            validation={''}
                                                        />
                                                        <div className="grid grid-cols-2 gap-x-8 mb-4">
                                                            <BusmeInput
                                                                name={"latitude"}
                                                                title={"Latitud"}
                                                                placeholder={"Ingresa la latitud"}
                                                                type={"text"}
                                                                onChange={handleInputChange}
                                                                onBlur={() => {}}
                                                                value={newBoardingPoint.latitude}
                                                                validation={''}
                                                            />
                                                            <BusmeInput
                                                                name={"longitude"}
                                                                title={"Longitud"}
                                                                placeholder={"Ingresa la longitud"}
                                                                type={"text"}
                                                                onChange={handleInputChange}
                                                                onBlur={() => {}}
                                                                value={newBoardingPoint.longitude}
                                                                validation={''}
                                                            />
                                                        </div>
                                                    </div>
                                                </BusmeModal>
                                            </div>
                                        </div>
                                        <div className="w-8/12 h-full">
                                            <div ref={mapRef} style={{width: "100%", height: "380px", borderRadius: "10px"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2 mt-4">
                                    <BusmeSecondaryButton
                                        type="submit"
                                        title={"Generar nueva ruta"}
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </form>
                        )}
                    </Formik>
                </BusmeCard>
            </div>
        </div>
    );
}

export default NewRoutePage;