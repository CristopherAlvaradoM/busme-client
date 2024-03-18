import React from 'react';

const BusmeTable = ({ headers, data }) => {
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
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BusmeTable;
