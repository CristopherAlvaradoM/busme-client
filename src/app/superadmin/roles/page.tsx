import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";
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
                <BusmeTable headers={headers} data={data} showDeleteColumn={true}/>
            </BusmeCard>
        </div>
    );
}