export const metadata = {
    title: "BusMe - Administración superior",
    description: "Dashboard",
};

function textoSaludo(): string {
    const horaActual = new Date().getHours();
    let saludo: string;

    if (horaActual >= 5 && horaActual < 12) {
        saludo = "Buenos días";
    } else if (horaActual >= 12 && horaActual < 18) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }

    return saludo;
}

const saludo = textoSaludo();

export default function Page() {
    return (
      <div className="min-w-full h-screen bg-complementary-100 flex">
          <div className="w-1/5 bg-white h-full">

          </div>
          <div className="ml-[25px] w-full h-full">
              <div className="mt-2 flex">
                  <p className="title-text mt-5">{saludo}, usuario</p>
                  <div className="flex">
                      <div>

                      </div>
                      <img src="/assets/img/utzmg-logo.jpeg" alt="UTZMG Logo"/>
                  </div>
              </div>
          </div>
      </div>
    );
}