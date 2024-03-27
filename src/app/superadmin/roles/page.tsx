import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeCardButtonHeader from "@/app/components/BusmeCardButtonHeader";
import {IoPersonAdd} from "react-icons/io5";
import BusmeTable from "@/app/components/BusmeTable";

export const metadata = {
    title: "BusMe - Superadmin",
    description: "Pagina de roles",
};

const headers = ['Nombre', 'Con acceso a'];
const data = [
    ['Superadministrador', 'Equipo de trabajo - Roles'],
    ['Administrador', 'Transporte en tiempo real - Avisos - Transporte - Rutas - Estadísticas'],
    ['Calidad', 'Buzón de quejas y sugerencias'],]

export default function Page() {
    return (
        <div>
            <BusmePageHeader title={"Roles de administración"} rol={"Superadministrador"} username={"Anthony"}/>
            <BusmeCard>
                <BusmeCardButtonHeader subtitle={"Lista de roles"} to={"/superadmin/roles/new-role"}
                                       buttonText={"Agregar rol"} icon={IoPersonAdd}/>
                <BusmeTable headers={headers} data={data} showEditColumn={true} showDeleteColumn={true}/>
            </BusmeCard>
        </div>
    );
}