"use client"
import CustomButton from '@/app/components/BusmeButtonLogin';
import InputField from '@/app/components/BusmeInputLogin';
import Image from 'next/image';
import Logotipo from '@/assets/img/LogotipoBusme.jpg';

export default function RecoverPasswordPage() {
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
      <div className="flex flex-col mx-auto my-24 xl:my-auto justify-center text-center gap-y-10">
        <div>
          <h2 className="font-poppins font-semi-bold text-2xl md:text-3xl mb-2">Restablecer mi contraseña</h2>
          <p className="body-text">
              Restablece tu contraseña para acceder a tu cuenta
          </p>
        </div>
          <div className=''>
            <InputField 
              label="Nueva contraseña" 
              type="Password" 
              name="NewPassword"
              onChange={() => {}}
              onBlur={() => {}}
              value=""
              error=""
              touched={false}
            />
          </div>
          <div className=''>
            <InputField 
              label="Confirmar contraseña" 
              type="Password" 
              name="ConfPassword"
              onChange={() => {}}
              onBlur={() => {}}
              value=""
              error=""
              touched={false}
            />
          </div>
          <div className=''>
          <CustomButton
            text="Ingresar" 
            type="submit"
            // disabled={''}
          />
          </div>
      </div>
    </main>
  );
}