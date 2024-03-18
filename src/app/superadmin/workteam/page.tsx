import BusmeProfileHeader from "@/app/components/BusmeProfileHeader";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeTable from "@/app/components/BusmeTable";
import { IoPersonAdd } from "react-icons/io5";
import BusmeCardButtonHeader from "@/app/components/BusmeCardButtonHeader";

const workTeamHeaders = ['Nombre', 'Correo electrónico', 'Teléfono', 'Rol', 'Fecha ingreso'];
const workTeamData = [
    ['Cristopher Yahir Alvarado Mombela', 'cristopher.alvarado.21s@utzmg.edu.mx', '3320217780', 'Superadministrador', '17/03/2024'],
    ['Braulio Israel Fernández Márquez', 'braulio.fernandez.21s@utzmg.edu.mx', '3311966694', 'Calidad', '17/03/2024'],
    ['Angélica Araceli Silva Palmas', 'angelica.silva.21s@utzmg.edu.mx', '3319698761', 'Administrador', '17/03/2024']
];
export default function WorkTeamPage() {
    return (
        <div>
            <BusmeProfileHeader rol={"Superadministrador"} title={"Equipo de trabajo"} username={"Anthony"}/>
            <BusmeCard>
                <BusmeCardButtonHeader subtitle={"Lista de equipo de trabajo"} to={"/superadmin"} buttonText={"Agregar usuario"} icon={IoPersonAdd}/>
                <BusmeTable headers={workTeamHeaders} data={workTeamData} showDeleteColumn={true}
                            showEditColumn={true}/>
            </BusmeCard>
        </div>
    )
}