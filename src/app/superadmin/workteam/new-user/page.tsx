import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";

export default function NewUserPage() {
    return (
        <div>
            <BusmePageHeader rol={"Superadministrador"} title={"Nuevo usuario"} username={"Anthony"}
                             showBackIcon={true}/>
            <div className="flex justify-between h-full">
                <div className="w-7/12 h-full">
                    <BusmeCard>
                        <p className="subtitle-text">Información del usuario</p>
                    </BusmeCard>
                </div>
                <div className="w-5/12 h-full ml-7">
                    <BusmeCard>
                        <p className="subtitle-text">Información del usuario</p>
                    </BusmeCard>
                </div>
            </div>
        </div>
    );
}