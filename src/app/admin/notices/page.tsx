'use client'
import { useState } from "react";
import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";

export default function BusmeNotices() {
  const [barra1Abierta, setBar1Open] = useState(false);
    const [barra2Abierta, setBar2Open] = useState(false);

    const abrirBarra1 = () => {
        setBar1Open(true);
        setBar2Open(false); // Cierra la barra 2 al abrir la barra 1
    };

    const abrirBarra2 = () => {
        setBar2Open(true);
        setBar1Open(false); // Cierra la barra 1 al abrir la barra 2
    };

  return (
      <div>
          <BusmePageHeader title={"Avisos"} username={"Anthony"} rol={"Administrador"}/>

          <div>
                <button onClick={abrirBarra1}>Abrir Barra 1</button>
                {barra1Abierta && (
                    <div>
                        <BusmeCard>
                          <p>Aquí va el contenido</p>
                          </BusmeCard>
                    </div>
                )}
            </div>
            <div className="mt-5">
                <button onClick={abrirBarra2}>Abrir Barra 2</button>
                {barra2Abierta && (
                    <div>
                        <BusmeCard>
                          <p>Aquí va el contenido 2</p>
                          </BusmeCard>
                    </div>
                )}
            </div>

      </div>
  );
}