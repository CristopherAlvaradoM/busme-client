import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeTable from "@/app/components/BusmeTable";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeCardHeader from "@/app/components/BusmeCardHeader";

export const metadata = {
    title: "BusMe - Administración superior",
    description: "Dashboard",
};

function textoSaludo(): string {
    const horaActual = new Date().getHours();
    let saludo: string;

    if (horaActual >= 5 && horaActual < 12) {
        saludo = "Buenos días,";
    } else if (horaActual >= 12 && horaActual < 18) {
        saludo = "Buenas tardes,";
    } else {
        saludo = "Buenas noches,";
    }

    return saludo;
}

const saludo = textoSaludo();

const workTeamHeaders = ['Nombre', 'Correo electrónico', 'Teléfono', 'Rol', 'Fecha ingreso'];
const workTeamData = [
    ['Cristopher Yahir Alvarado Mombela', 'cristopher.alvarado.21s@utzmg.edu.mx', '3320217780', 'Superadministrador', '17/03/2024'],
    ['Braulio Israel Fernández Márquez', 'braulio.fernandez.21s@utzmg.edu.mx', '3311966694', 'Calidad', '17/03/2024'],
    ['Angélica Araceli Silva Palmas', 'angelica.silva.21s@utzmg.edu.mx', '3319698761', 'Administrador', '17/03/2024']
];

const rolsHeaders = ['Nombre', 'Acceso a'];
const rolsData = [
    ['Superadministrador', 'Equipo de trabajo - Rols'],
    ['Administrador', 'Monitoreo en tiempo real - Avisos - Transporte - Rutas - Estadísticas'],
    ['Calidad', 'Buzón de quejas']
];
export default function SuperAdminPage() {
    return (
        <div>
            <BusmePageHeader title={saludo + " " + "Anthony"} username={"Anthony"} rol={"Superadministrador"}/>
            <BusmeCard>
                <BusmeCardHeader subtitle={"Lista de equipo de trabajo"} linkText={"Ver más"} to={"/superadmin/work-team"}/>
                <BusmeTable headers={workTeamHeaders} data={workTeamData}/>
            </BusmeCard>

            <BusmeCard>
                <BusmeCardHeader subtitle={"Lista de roles de administración"} linkText={"Ver más"} to={"/superadmin/work-team"}/>
                <BusmeTable headers={rolsHeaders} data={rolsData}/>
            </BusmeCard>
        </div>
    );
}