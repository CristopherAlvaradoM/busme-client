"use client"
import React from "react";
import BusmeCard from "@/app/components/BusmeCard";
import ProgressBar from "@ramonak/react-progress-bar";
import {IoShareOutline, IoTimer, IoBus, IoGolf} from "react-icons/io5";
import Link from "next/link";
import Chart from "react-apexcharts";
import BusmeFilterCard from "@/app/components/BusmeFilterCard";

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

    const chartData = {
        options: {
            chart: {
                height: 350,
                type: "area",
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
                        <div className="flex flex-row w-full font-poppins gap-x-5 mt-6">
                            <div className='w-full h-full'>
                                <BusmeFilterCard
                                    title="Total de abordajes"
                                    amount={350}
                                    isActive={true}
                                    icon={<IoBus/>}
                                />
                            </div>
                            <div className='w-full h-full'>
                                <BusmeFilterCard
                                    title="Total de viajes"
                                    amount={5}
                                    isActive={true}
                                    icon={<IoGolf/>}
                                />
                            </div>
                            <div className='w-full h-full'>
                                <BusmeFilterCard
                                    title="Tiempo recorrido"
                                    amount={10}
                                    isActive={true}
                                    icon={<IoTimer/>}
                                />
                            </div>
                        </div>
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
                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="area"
                        toolbar={false}
                        width="100%"
                        height="400"
                        className="font-poppins"
                    />
                </BusmeCard>
            </div>
        </div>
    );
}