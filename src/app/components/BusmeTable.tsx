'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoTrashOutline } from "react-icons/io5";
import { IoPencilOutline } from "react-icons/io5";

interface BusmeTableProps {
    headers: string[];
    data: string[][];
    showEditColumn?: boolean;
    showDeleteColumn?: boolean;
}

const BusmeTable: React.FC<BusmeTableProps> = ({ headers, showEditColumn = false, showDeleteColumn = false }) => {



    const getStatusClass = (status: string) => {
        switch (status) {
            case 'En servicio':
                return 'active-status';
            case 'Dañado':
                return 'damaged-status';
            case 'En reparación':
                return 'repairing-status';
            case 'Inactivo':
                return 'inactive-status';
            default:
                return '';
        }
    };





    return (
        <div className="overflow-x-auto mt-5">
            <table className="w-full text-left rtl:text-right font-poppins mb-2">
                <thead className="text-muted-900 bg-muted-200 border border-muted-600">
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} scope="col" className="px-5 py-3 font-medium">
                            {header}
                        </th>
                    ))}
                    {showEditColumn && <th scope="col" className="px-5 py-3 font-medium">Editar</th>}
                    {showDeleteColumn && <th scope="col" className="px-5 py-3 font-medium">Eliminar</th>}
                </tr>
                </thead>
                <tbody>
                {/* {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="bg-white border border-muted-600 font-poppins text-black">
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}
                                className="px-5 py-3 md:py-7">
                                <div className={`${getStatusClass(cell)}`}>
                                    {cell}
                                </div>
                            </td>
                        ))}
                        {showEditColumn && <td className="px-5 py-3 md:py-7 text-center"><IoPencilOutline
                            className="w-[20px] h-[20px] cursor-pointer"/></td>}
                        {showDeleteColumn && <td className="px-5 py-3 md:py-7 text-center"><IoTrashOutline
                            className="w-[20px] h-[20px] text-danger cursor-pointer"/></td>}
                    </tr>
                ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default BusmeTable;