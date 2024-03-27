import CustomButton from '@/app/components/BusmeButtonLogin';
import InputField from '@/app/components/BusmeInputLogin';
import Image from 'next/image';
import Logotipo from '@/assets/img/LogotipoBusme.jpg';
import {IoArrowBack} from "react-icons/io5";

export default function ForgetPasswordPage() {
  return (
    <main className="flex flex-col md:h-screen w-full p-8 md:p-10 overflow-auto">
      <div className='w-full'>
        <Image
          src={Logotipo}
          alt="Fondo Página Login"
          className="w-36 md:w-48"
          priority
        />
      </div>
      <div className="flex flex-col mx-auto my-24 xl:my-auto justify-center text-center gap-y-14">
        <div className='w-full flex justify-start items-center'>
          <IoArrowBack className="w-[30px] h-[30px] mr-2 cursor-pointer"/>
          <p className="subtitle-text">Regresar</p>
        </div>
        <div>
          <h2 className="font-poppins font-semi-bold text-2xl md:text-3xl mb-2">Recuperar mi contraseña</h2>
          <p className="body-text">
            Ingrese la dirección de correo electrónico para continuar
          </p>
        </div>
        <div className=''>
          <InputField 
            label="Correo electrónico" 
            type="email" 
            name="email"
          />
        </div>
        <div className=''>
          <CustomButton
            type='submit'
            text="Enviar" 
            //onClick={}
          />
        </div>
      </div>
    </main>
  );
}