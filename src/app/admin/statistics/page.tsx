"use client"
import React from "react";
import BusmeCard from "@/app/components/BusmeCard";
import ProgressBar from "@ramonak/react-progress-bar";
import {IoShareOutline} from "react-icons/io5";
import Link from "next/link";

const header = ['ID', 'Punto de abordaje', 'Frecuencia', 'Porcentaje'];
const data = [
    {'id': '01', 'punto': 'Las Cuatas', 'approaches': 5000},
    {'id': '02', 'punto': 'Santa Cruz', 'approaches': 1210},
    {'id': '03', 'punto': 'R. Banús', 'approaches': 2200},
];

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
    return (
        <div>
            <div className="flex">
                <div className="flex-grow w-7/12">
                    <BusmeCard>
                        <div className="flex justify-between items-center">
                            <h1 className="subtitle-text">Abordajes de hoy</h1>
                            <Link href="/">
                                <div className="flex items-center justify-center muted-button muted-button-hover">
                                    <IoShareOutline className="mr-2.5 size-5"/>
                                    <p>Exportar información</p>
                                </div>
                            </Link>
                        </div>
                        <p className="caption-text mt-2">Resumen del día</p>
                    </BusmeCard>
                </div>
                <div className="mx-3"/>
                <div className="flex-grow w-5/12">
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
                                        <div className="ml-6 text-white rounded-lg p-1" style={{backgroundColor: getBgColor((item.approaches / totalApproaches) * 100)}}>
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
                </BusmeCard>
            </div>
        </div>
    );
}