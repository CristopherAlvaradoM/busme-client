import React from 'react';
import { IoTrashOutline } from "react-icons/io5";
import { IoPencilOutline } from "react-icons/io5";

interface BusmeTableProps {
    headers: string[];
    data: string[][];
    showEditColumn?: boolean;
    showDeleteColumn?: boolean;
}

const BusmeTable: React.FC<BusmeTableProps> = ({ headers, data, showEditColumn = false, showDeleteColumn = false }) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-left rtl:text-right font-poppins mb-2">
                <thead className="text-muted-900 bg-muted-200 border-y border-y-muted-600">
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
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="bg-white border-t border-muted-600 font-poppins text-black">
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="px-5 py-7">
                                {cell}
                            </td>
                        ))}
                        {showEditColumn && <td className="px-5 py-7 text-center"><IoPencilOutline className="w-[20px] h-[20px] cursor-pointer"/></td>}
                        {showDeleteColumn && <td className="px-5 py-7 text-center"><IoTrashOutline className="w-[20px] h-[20px] text-danger cursor-pointer"/></td>}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BusmeTable;