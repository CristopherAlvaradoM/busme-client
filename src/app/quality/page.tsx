"use client"
import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeFilterCard from "@/app/components/BusmeFilterCard";
import {
    FaInbox,
    FaFaceAngry,
    FaMapLocationDot,
    FaStar,
    FaClock,
} from "react-icons/fa6";
import React, {useEffect, useState} from "react";
import BusmeButtonLogin from "@/app/components/BusmeButtonLogin";
import BusmeMessage from "@/app/components/BusmeMessage";
import { IoMailOpenOutline, IoArrowBack} from "react-icons/io5";
import BusmeModal from "@/app/components/BusmeModal";
import BusmeInput from "@/app/components/BusmeInput";
import { Formik } from "formik";
import {BusmeSweetAlert, BusmeSweetAlertIconType} from "@/app/components/BusmeSweetAlert";

interface Message {
    username: string;
    category: string;
    description: string;
    date: string;
    hour: string;
    isRead: boolean;
}

interface CategoryCount {
    [category: string]: number; // Firma de índice para el objeto categoryCounts
}

const messageData: Message[] = [
    {
        'username': 'Anthony',
        'category': 'Retraso de Transporte',
        'description': 'El trasporte llega tarde todos los días a las paradas asignadas, siempre llega tarde principalmente a las cuatas.',
        'date': '03/04/2024',
        'hour': '3:24 p.m',
        'isRead': false
    },
    {
        'username': 'Braulio',
        'category': 'Desviación de Ruta',
        'description': 'El trasporte no hace el recorrido completo de la ruta, me quedo como pendejo esperando en Banús y nomas no llega el guaje.',
        'date': '03/04/2024',
        'hour': '3:24 p.m',
        'isRead': true
    },
    {
        'username': 'Angélica',
        'category': 'Actitud del Conductor',
        'description': 'El conductor del transporte es un pendejo, no respeta los límites de velocidad y siempre llega tarde a las paradas.',
        'date': '03/04/2024',
        'hour': '3:24 p.m',
        'isRead': true
    },
    {
        'username': 'Un Guaje',
        'category': 'Mejora o Sugerencia',
        'description': 'El transporte debería de tener un horario fijo para que los usuarios puedan planear sus viajes con anticipación.',
        'date': '03/04/2024',
        'hour': '3:24 p.m',
        'isRead': true
    },
];

const categories = [
    {title: 'Todas las quejas', icon: <FaInbox className="size-10"/>},
    {title: 'Retraso de Transporte', icon: <FaClock className="size-10"/>},
    {title: 'Desviación de Ruta', icon: <FaMapLocationDot className="size-10"/>},
    {title: 'Actitud del Conductor', icon: <FaFaceAngry className="size-10"/>},
    {title: 'Mejora o Sugerencia', icon: <FaStar className="size-10"/>}
];

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null); // Estado para el mensaje seleccionado
    const [filter, setFilter] = useState('Todas las quejas');
    const [categoryCounts, setCategoryCounts] = useState<CategoryCount>({}); // Tipo definido para categoryCounts

    useEffect(() => {
        const counts: CategoryCount = {};
        categories.forEach(category => {
            counts[category.title] = category.title === 'Todas las quejas' ? messageData.length : messageData.filter(message => message.category === category.title).length;
        });
        setCategoryCounts(counts);
    }, []);

    const handleFilterChange = (title: string) => {
        setFilter(title);
    };

    const handleSelectMessage = (message: Message) => {
        setSelectedMessage(message); // Actualizar el estado del mensaje seleccionado
    };

    const filteredMessages = filter === 'Todas las quejas' ? messageData : messageData.filter(message => message.category === filter);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const sendAnswer = () => {
        closeModal()
        BusmeSweetAlert(
            'Respuesta enviada',
            'Esta queja ha sido respondida con éxito',
            BusmeSweetAlertIconType.Success
        )
    }

    return (
        <div className="h-full pb-9">
            <BusmePageHeader title={"Buzón de quejas"} rol={"Calidad"} username={"Anthony"}/>
            <div className="overflow-x-auto">
                <div className="flex w-full gap-x-5 mt-7">
                    {categories.map((category, index) => (
                        <BusmeFilterCard
                            key={index}
                            title={category.title}
                            amount={categoryCounts[category.title]}
                            isActive={filter === category.title}
                            icon={category.icon}
                            onClick={() => handleFilterChange(category.title)}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full bg-white rounded-lg mt-8 overflow-hidden">
                {selectedMessage ? (
                    <div className="p-5">
                        <div className="flex items-center cursor-pointer" onClick={() => setSelectedMessage(null)}>
                            <IoArrowBack className="size-5"/>
                            <p className="bold-body-text ml-2">Regresar</p>
                        </div>
                        <p className="subtitle-text mt-4">{selectedMessage.username}</p>
                        <p className="bold-body-text mt-7">{selectedMessage.category}</p>
                        <p className="body-text mt-3">{selectedMessage.description}</p>
                        <p className="body-text mt-7">Enviado el {selectedMessage.date} a las {selectedMessage.hour}</p>
                        <div className="w-full border-t border-muted-500 my-5"></div>
                        <div>
                            <BusmeButtonLogin text={"Responder"} onClick={openModal}/>
                            <Formik
                                initialValues={{title: '', content: ''}}
                                validate={values => {
                                    const errors = {} as { title?: string, content?: string };
                                    if (!values.title) {
                                        errors.title = 'Campo requerido';
                                    }
                                    if (!values.content) {
                                        errors.content = 'Campo requerido';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting}) => {
                                    sendAnswer();
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
                                    <form onSubmit={handleSubmit}>
                                        <BusmeModal isOpen={isModalOpen} onClose={closeModal} showIcon={true}
                                                    icon={IoMailOpenOutline} disabled={isSubmitting}
                                                    successButtonTitle={"Enviar"}>
                                            <p className="modal-title-text">Respuesta</p>
                                            <BusmeInput name={"title"} title={"Titulo"}
                                                        placeholder={"Ingresa un título"} type={"text"}
                                                        onChange={handleChange} onBlur={handleBlur} value={values.title}
                                                        validation={errors.title && touched.title && errors.title}/>
                                            <BusmeInput multiline={true} name={"content"} title={"Contenido"}
                                                        placeholder={"Coloca el contenido de la respuesta"}
                                                        type={"password"} onChange={handleChange} onBlur={handleBlur}
                                                        value={values.content}
                                                        validation={errors.content && touched.content && errors.content}/>
                                        </BusmeModal>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                ) : (
                    <div className="overflow-auto">
                        {filteredMessages.map((message, index) => (
                            <BusmeMessage
                                key={index}
                                isRead={message.isRead}
                                username={message.username}
                                title={message.category}
                                description={message.description}
                                date={message.date}
                                hour={message.hour}
                                isSelected={selectedMessage === message}
                                onClick={() => handleSelectMessage(message)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}