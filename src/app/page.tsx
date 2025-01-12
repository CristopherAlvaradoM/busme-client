"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Formik } from 'formik';
import FondoPag from '@/assets/img/fondo-page.png';
import FondoLog from '@/assets/img/fondo-login.png';
import CustomButton from '@/app/components/BusmeButtonLogin';
import InputField from './components/BusmeInputLogin';
import {BusmeSweetAlert, BusmeSweetAlertIconType} from "@/app/components/BusmeSweetAlert";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useEffect } from 'react';


export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    Cookies.remove('token')
  },[])

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
      <div className="flex absolute bg-white rounded-2xl shadow-lg mx-6 my-12 h-auto">
        <div className="md:w-1/2 p-8 py-12 lg:py-16 lg:px-14">
          <div className="flex flex-col">
            <h2 className="title-text mb-16">Inicia Sesión</h2>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {} as {email?: string, password?: string};
                // Validación personalizada para el correo electrónico y la contraseña
                if (!values.email) {
                  errors.email = 'Campo requerido';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'Dirección de correo electrónico inválida';
                }
                if (!values.password) {
                  errors.password = 'Campo requerido';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                const { email, password} = values
                fetch(`${process.env.NEXT_PUBLIC_API_URL}/login?correo=${email}&contrasena=${password}`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  }
                })
                .then(response => {                  
                  setSubmitting(false);
                  if(response.ok) return response.json();
                  if (response.status === 401) throw new Error('Usuario o contraseña incorrectos');
                })
                .then(data => {                  
                  const { token, rol } = data
                  Cookies.set('token',  token)
                  BusmeSweetAlert(
                    '¡Inicio de sesión exitoso!',
                    '¡Bienvenido de vuelta!',
                    BusmeSweetAlertIconType.Success,
                    () => {
                      if(rol === 'Superadministrador') router.push('/superadmin')
                      if(rol === 'Administrador') router.push('/admin')
                      if(rol === 'Calidad') router.push('/quality') 
                    }
                  )
                })
                .catch(error => {
                  setSubmitting(false);
                  BusmeSweetAlert(
                    'Error de inicio de sesión',
                    'El usuario o la contraseña son incorrectos.',
                    BusmeSweetAlertIconType.Error
                  );
                })
              
                
              }}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  {/* Campos de entrada */}
                  <div className='flex flex-col gap-y-10'>
                    <InputField 
                      label="Correo electrónico" 
                      type="email" 
                      name="email" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={errors.email}
                      touched={touched.email}
                    />
                    <InputField 
                      label="Contraseña" 
                      type="password" 
                      name="password" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={errors.password}
                      touched={touched.password}
                    />
                  </div>
                  {/* Enlace para olvidar contraseña */}
                  <Link href="./forget-password">
                    <span className="link-text flex mt-2 justify-end">Olvidé mi contraseña</span>
                  </Link>
                  {/* Botón de inicio de sesión */}
                  <div className='mt-20'>
                    <CustomButton
                      text="Ingresar" 
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </div>
                </form>
              )}
            </Formik>
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