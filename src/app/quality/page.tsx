"use client"
import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeFilterCard from "@/app/components/BusmeFilterCard";
import {FaInbox, FaFaceAngry, FaMapLocationDot, FaStar, FaClock} from "react-icons/fa6";
import React, {useEffect, useState} from "react";
import BusmeButtonLogin from "@/app/components/BusmeButtonLogin";
import BusmeMessage from "@/app/components/BusmeMessage";

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

    return (
        <div className="h-full pb-9">
            <BusmePageHeader title={"Buzón de quejas"} rol={"Calidad"} username={"Anthony"}/>
            <div className="flex flex-row w-full font-poppins gap-x-5 mt-6">
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
            <div className="w-full h-4/6 bg-white rounded-[10px] mt-8">
                <div className="flex justify-between h-full">
                    <div className="w-6/12 overflow-auto h-full">
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
                    <div
                        className="w-6/12 overflow-auto h-full p-5 border-l-2 border-l-muted-500 flex flex-col justify-between">
                        {selectedMessage && (
                            <>
                                <p className="subtitle-text">{selectedMessage.username}</p>
                                <p className="bold-body-text mt-7">{selectedMessage.category}</p>
                                <p className="body-text mt-3">{selectedMessage.description}</p>
                                <p className="body-text mt-7">Enviado el {selectedMessage.date} a las {selectedMessage.hour}</p>
                                <div className="w-full border-[1px] border-muted-500 my-5"></div>
                                <div>
                                    <BusmeButtonLogin text={"Jere"}/>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}