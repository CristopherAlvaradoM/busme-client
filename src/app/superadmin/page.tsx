import BusmeProfileHeader from "@/app/components/BusmeProfileHeader";
import BusmeTable from "@/app/components/BusmeTable";

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

export default function Page() {
    return (
        <div className="m-5 w-full h-full">
            <BusmeProfileHeader title={saludo + " " + "Anthony"} username={"Anthony"} rol={"Superadministrador"}/>
            <div className="w-full bg-white rounded-[10px] mt-7">
                <div className="p-5 flex justify-between items-center">
                    <h1 className="subtitle-text">Lista de equipo de trabajo</h1>
                    <h1 className="link-text">Ver más</h1>
                </div>
                <BusmeTable/>
            </div>
        </div>
    );
}