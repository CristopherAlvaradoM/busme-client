"use client"
import React, {useEffect, useState} from "react";
import BusmeCard from "@/app/components/BusmeCard";
import ProgressBar from "@ramonak/react-progress-bar";
import {IoShareOutline, IoTimer, IoBus, IoGolf, IoDocumentOutline, IoClose} from "react-icons/io5";
import BusmeFilterCard from "@/app/components/BusmeFilterCard";
import BusmeModal from "@/app/components/BusmeModal";
import BusmeOption from "@/app/components/BusmeOption";
import {FaFileExcel, FaFilePdf, FaFileImage} from "react-icons/fa6";
import {BusmeSweetAlert, BusmeSweetAlertIconType} from "@/app/components/BusmeSweetAlert";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const header = ['ID', 'Punto', 'Frecuencia', '%'];
const data = [
    {'id': '01', 'punto': 'Las Cuatas', 'approaches': 5000},
    {'id': '02', 'punto': 'Santa Cruz', 'approaches': 1210},
    {'id': '03', 'punto': 'R. Banús', 'approaches': 2200},
];

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const totalApproaches = data.reduce((total, item) => total + item.approaches, 0);

const getBgColor = (percent: number) => {
    if (percent < 25) {
        return "#FF4B4B";
    } else if (percent < 50) {
        return "#4BB5FF";
    } else if (percent < 80) {
        return "#794BFF";
    } else {
        return "#2DC823";
    }
};

export default function Page() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const generateFile = () => {
        closeModal()
        BusmeSweetAlert(
            'Archivo generado',
            'Tu archivo ha sido generado con éxito',
            BusmeSweetAlertIconType.Success
        )
    }
    const handleOptionSelect = (value: string) => {
        setSelectedValue(value === selectedValue ? null : value); // Desseleccionar si ya está seleccionado
    };
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const chartData = {
        options: {
            chart: {
                height: 350,
                type: "area" as ApexOptions['chart']['type'],
                toolbar: {
                    show: false
                },
            },
            colors: ['#A700FF', '#4BB5FF', '#3CD856'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "datetime",
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
            },
        },
        series: [{
            name: 'Banús',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'Las Cuatas',
            data: [11, 32, 45, 32, 34, 52, 41]
        }, {
            name: 'Santa Cruz',
            data: [5, 52, 40, 72, 14, 22, 31]
        }]
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className="mb-6 w-full lg:w-7/12">
                    <BusmeCard>
                        <div className="flex justify-between items-center">
                            <h1 className="subtitle-text">Abordajes de hoy</h1>
                            <button onClick={openModal} className="w-auto">
                                <div
                                    className="flex items-center justify-center rounded-md muted-button muted-button-hover">
                                    <IoShareOutline className="size-5"/>
                                    <p className="hidden md:block ml-2.5">Exportar información</p>
                                </div>
                            </button>
                            <BusmeModal isOpen={isModalOpen} onClose={closeModal} showIcon={true}
                                        icon={IoDocumentOutline} buttonFunction={generateFile}
                                        successButtonTitle={"Generar archivo"}>
                                <p className="modal-title-text">Formato para exportar la información</p>
                                <p className="modal-body-text">Seleccione un formato para exportar la información</p>
                                <BusmeOption
                                    value={"PDF"}
                                    title={"Formato PDF"}
                                    description={"Se exportará la información en un archivo PDF"}
                                    icon={FaFilePdf}
                                    iconColor={"text-primary-600"}
                                    selected={selectedValue === "PDF"}
                                    onSelect={() => handleOptionSelect("PDF")}
                                />
                                <BusmeOption
                                    value={"Excel"}
                                    title={"Formato Excel"}
                                    description={"Se exportará la información en un archivo Excel"}
                                    icon={FaFileExcel}
                                    iconColor={"text-primary-600"}
                                    selected={selectedValue === "Excel"}
                                    onSelect={() => handleOptionSelect("Excel")}
                                />
                                <BusmeOption
                                    value={"PNG"}
                                    title={"Formato de Imagen PNG"}
                                    description={"Se generará una imagen PNG con la información"}
                                    icon={FaFileImage}
                                    iconColor={"text-primary-600"}
                                    selected={selectedValue === "PNG"}
                                    onSelect={() => handleOptionSelect("PNG")}
                                />
                            </BusmeModal>
                        </div>
                        <p className="caption-text mt-2">Resumen del día</p>
                        <div className="flex flex-col md:flex-row w-full font-poppins mt-6 gap-y-5 md:gap-x-5">
                            <div className='w-full md:w-1/3'>
                                <BusmeFilterCard
                                    title="Total de abordajes"
                                    amount={350}
                                    isActive={true}
                                    icon={<IoGolf className="size-10"/>}
                                />
                            </div>
                            <div className='w-full md:w-1/3'>
                                <BusmeFilterCard
                                    title="Total de viajes"
                                    amount={5}
                                    isActive={true}
                                    icon={<IoBus className="size-10"/>}
                                />
                            </div>
                            <div className='w-full md:w-1/3'>
                                <BusmeFilterCard
                                    title="Tiempo recorrido"
                                    amount={10}
                                    isActive={true}
                                    icon={<IoTimer className="size-10"/>}
                                />
                            </div>
                        </div>
                    </BusmeCard>
                </div>
                <div className="mx-3"/>
                <div className="w-full lg:w-5/12">
                    <BusmeCard>
                        <div className="subtitle-text">Puntos de abordaje</div>
                        <table className="text-center w-full">
                            <thead>
                            <tr>
                                {header.map((item, index) => (
                                    <th key={index} className="muted-body-text py-6">{item}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {data.map(item => (
                                <tr key={item.id} className="body-text">
                                    <td className="py-3">{item.id}</td>
                                    <td>{item.punto}</td>
                                    <td>
                                        <ProgressBar
                                            isLabelVisible={false}
                                            baseBgColor="#DFF0FF"
                                            height="10px"
                                            bgColor={getBgColor((item.approaches / totalApproaches) * 100)}
                                            completed={(item.approaches / totalApproaches) * 100}
                                        />
                                    </td>
                                    <td>
                                        <div className="ml-6 text-white font-medium rounded-lg p-1"
                                             style={{backgroundColor: getBgColor((item.approaches / totalApproaches) * 100)}}>
                                            {((item.approaches / totalApproaches) * 100).toFixed(1)}%
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </BusmeCard>
                </div>
            </div>
            <div className="pt-6">
                <BusmeCard>
                <p className="subtitle-text">Frecuencia de abordajes</p>
                    {isClient && (
                        <Chart
                            options={chartData.options}
                            series={chartData.series}
                            type="area"
                            width="100%"
                            height={400}
                            className="font-poppins"
                        />
                    )}
                </BusmeCard>
            </div>
        </div>
    );
}