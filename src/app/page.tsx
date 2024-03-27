"use client"
import Image from 'next/image';
import Link from 'next/link';
import FondoPag from '@/assets/img/fondo-page.png';
import FondoLog from '@/assets/img/fondo-login.png';
import CustomButton from '@/app/components/BusmeButtonLogin';
import InputField from './components/BusmeInputLogin';


export default function LoginPage() {
  return (
    <main className="min-w-full min-h-screen flex justify-center xl:items-center relative">
      <div className='absolute inset-0'>
        <Image
          src={FondoPag}
          alt="Fondo Página Login"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex absolute bg-white rounded-2xl shadow-lg mx-6 my-12 h-auto ">
        <div className="md:w-1/2 p-8 py-12 lg:py-16 lg:px-14">
          <div className="flex flex-col">
            <h2 className="title-text mb-16">Inicia Sesión</h2>
            <form>
              <div className='flex flex-col gap-y-10'>
              <InputField
                label="Correo electrónico"
                type="email"
                name="email"
                onChange={() => {}}
                onBlur={() => {}}
                value=""
                error=""
                touched={false}
              />
              <InputField
                label="Contraseña"
                type="password"
                name="password"
                onChange={() => {}}
                onBlur={() => {}}
                value=""
                error=""
                touched={false}
              />
              </div>
              <Link href="./forget-password">
                <span className="link-text flex mt-2 justify-end">Olvidé mi contraseña</span>
              </Link>
              <div className='mt-20'>
                <CustomButton
                  text="Ingresar" 
                  // onClick={}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block ">
          <div className="h-full w-full items-center justify-center relative">
            <Image
              src={FondoLog}
              alt="Fondo Login"
              className="rounded-r-2xl h-full w-full"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-r-2xl text-white bg-primary-800 bg-opacity-70 p-16 lg:p-20 font-poppins ">
              <p className="text-center text-4xl mb-6 font-semi-bold">Bienvenido</p>
              <hr className="w-64 border-b border-white mb-8" />
              <p className="text-center text-xl lg:text-2xl leading-normal">
                Bienvenido a BusMe <br /> ¡Toma el control, gestiona con precisión y asegura una experiencia impecable!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}