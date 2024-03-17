const BusmeTable = () => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-left rtl:text-right font-poppins mb-2">
                <thead
                    className="text-muted-900 bg-muted-200 border-y border-y-muted-600">
                <tr>
                    <th scope="col" className="px-5 py-3 font-medium">
                        Nombre
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                        Correo electrónico
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                        Teléfono
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                        Rol
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                        Fecha ingreso
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-t border-muted-600 font-poppins text-black">
                    <td className="px-5 py-7">
                        Cristopher Yahir Alvarado Mombela
                    </td>
                    <td className="px-5 py-7">
                        cristopher.alvarado.21s@utzmg.edu.mx
                    </td>
                    <td className="px-5 py-7">
                        3320217780
                    </td>
                    <td className="px-5 py-7">
                        Superadministrador
                    </td>
                    <td className="px-5 py-5">
                        17/03/2024
                    </td>
                </tr>
                <tr className="bg-white border-t border-muted-600 font-poppins text-black">
                    <td className="px-5 py-7">
                        Braulio Israel Fernández Márquez
                    </td>
                    <td className="px-5 py-7">
                        braulio.fernandez.21s@utzmg.edu.mx
                    </td>
                    <td className="px-5 py-7">
                        3311966694
                    </td>
                    <td className="px-5 py-7">
                        Calidad
                    </td>
                    <td className="px-5 py-5">
                        17/03/2024
                    </td>
                </tr>
                <tr className="bg-white border-t border-muted-600 font-poppins text-black">
                    <td className="px-5 py-7">
                        Angélica Araceli Silva Palmas
                    </td>
                    <td className="px-5 py-7">
                        angelica.silva.21s@utzmg.edu.mx
                    </td>
                    <td className="px-5 py-7">
                        3319698761
                    </td>
                    <td className="px-5 py-7">
                        Administrador
                    </td>
                    <td className="px-5 py-5">
                        17/03/2024
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BusmeTable;