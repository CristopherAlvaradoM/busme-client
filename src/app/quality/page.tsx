import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeFilterCard from "@/app/components/BusmeFilterCard";
import {FaInbox, FaFaceAngry, FaMapLocationDot, FaStar, FaClock} from "react-icons/fa6";
import React from "react";
import BusmeButtonLogin from "@/app/components/BusmeButtonLogin";
import BusmeMessage from "@/app/components/BusmeMessage";

export const metadata = {
    title: "BusMe - Calidad",
    description: "Dashboard",
};

const messageData = [
    {'username': 'Anthony', 'category': 'Retraso de Transporte', 'description': 'El trasporte llega tarde todos los días a las paradas asignadas, siempre llega tarde principalmente a las cuatas.', 'date': '03/04/2024', 'hour': '3:24 p.m', 'isRead': false},
    {'username': 'Braulio', 'category': 'Desviación de Ruta', 'description': 'El trasporte no hace el recorrido completo de la ruta, me quedo como pendejo esperando en Banús y nomas no llega el guaje.', 'date': '03/04/2024', 'hour': '3:24 p.m', 'isRead': true},
    {'username': 'Angélica', 'category': 'Actitud del Conductor', 'description': 'El conductor del transporte es un pendejo, no respeta los límites de velocidad y siempre llega tarde a las paradas.', 'date': '03/04/2024', 'hour': '3:24 p.m', 'isRead': true},
    {'username': 'Un Guaje', 'category': 'Mejora o Sugerencia', 'description': 'El transporte debería de tener un horario fijo para que los usuarios puedan planear sus viajes con anticipación.', 'date': '03/04/2024', 'hour': '3:24 p.m', 'isRead': true},
]

export default function Page() {
    return (
        <div className="h-full pb-9">
            <BusmePageHeader title={"Buzón de quejas"} rol={"Calidad"} username={"Anthony"}/>
            <div className="flex flex-row w-full font-poppins gap-x-5 mt-6">
                <BusmeFilterCard title={"Todas las quejas"} amount={10} isActive={true}
                                 icon={<FaInbox className={"size-10"}/>}/>
                <BusmeFilterCard title={"Retraso de Transporte"} amount={10}
                                 icon={<FaClock className={"size-10"}/>}/>
                <BusmeFilterCard title={"Desviación de Ruta"} amount={10} icon={<FaMapLocationDot className={"size-10"}/>}/>
                <BusmeFilterCard title={"Actitud del Conductor"} amount={10}
                                 icon={<FaFaceAngry className={"size-10"}/>}/>
                <BusmeFilterCard title={"Mejora o Sugerencia"} amount={10} icon={<FaStar className={"size-10"}/>}/>
            </div>
            <div className="w-full h-4/6 bg-white rounded-[10px] mt-8">
                <div className="flex justify-between h-full">
                    <div className="w-6/12 overflow-auto h-full">
                        {messageData.map((message, index) => (
                            <BusmeMessage key={index} isRead={message.isRead} username={message.username} title={message.category} description={message.description} date={message.date} hour={message.hour}/>
                        ))}
                    </div>
                    <div
                        className="w-6/12 overflow-auto h-full p-5 border-l-2 border-l-muted-500 flex flex-col justify-between">
                        <p className="subtitle-text">Nombre de usuario</p>
                        <p className="bold-body-text mt-7">Retraso de transporte</p>
                        <p className="body-text mt-3">El trasporte llega tarde todos los días a las paradas
                            asignadas, siempre llega tarde principalmente a las cuatas.</p>
                        <p className="body-text mt-7">Enviado el 03/04/2024 a las 3:24 p.m</p>
                        <div className="w-full border-[1px] border-muted-500 my-5"></div>
                        <div>
                            <BusmeButtonLogin text={"Jere"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}