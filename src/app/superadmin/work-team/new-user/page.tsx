import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeInput from "@/app/components/BusmeInput";

export default function NewUserPage() {
    return (
        <div>
            <BusmePageHeader rol={"Superadministrador"} title={"Nuevo usuario"} username={"Anthony"}
                             showBackIcon={true}/>
            <div className="flex justify-between h-full">
                <div className="w-7/12 h-full">
                    <BusmeCard>
                        <p className="subtitle-text">Información del usuario</p>
                        <div className="flex justify-between">
                            <BusmeInput title={"Nombre(s)"} placeholder={"Ingresa el nombre del usuario"} type={"text"} />
                            <div className="mx-4"/>
                            <BusmeInput title={"Nombre(s)"} placeholder={"Ingresa el nombre del usuario"} type={"text"} />
                        </div>
                    </BusmeCard>
                </div>
                <div className="w-5/12 h-full ml-7">
                    <BusmeCard>
                        <p className="subtitle-text">Vista previa</p>
                    </BusmeCard>
                </div>
            </div>
        </div>
    );
}