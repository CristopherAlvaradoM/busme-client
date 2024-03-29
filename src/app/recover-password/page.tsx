"use client"
import CustomButton from '@/app/components/BusmeButtonLogin';
import InputField from '@/app/components/BusmeInputLogin';
import Image from 'next/image';
import Logotipo from '@/assets/img/LogotipoBusme.jpg';
import { Formik } from 'formik';
import {BusmeSweetAlert, BusmeSweetAlertIconType} from "@/app/components/BusmeSweetAlert";

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
      <div className="flex flex-col mx-auto my-24 xl:my-auto justify-center text-center gap-y-12">
        <div>
          <h2 className="font-poppins font-semi-bold text-2xl md:text-3xl mb-2">Restablecer mi contraseña</h2>
          <p className="body-text">
              Restablece tu contraseña para acceder a tu cuenta
          </p>
        </div>
        <Formik
          initialValues={{ NewPassword: '', ConfPassword:''  }}
          validate={values => {
            const errors = {} as { NewPassword?: string; ConfPassword?: string };
        
            // Validación de la nueva contraseña
            if (!values.NewPassword) {
              errors.NewPassword = 'Campo requerido';
            } else {
              if (values.NewPassword.length < 8) {
                errors.NewPassword = 'La contraseña debe tener al menos 8 caracteres';
              }
              if (!/(?=.*\d)/.test(values.NewPassword)) {
                errors.NewPassword = 'La contraseña debe contener al menos un número';
              }
              if (!/(?=.*[a-z])/.test(values.NewPassword)) {
                errors.NewPassword = 'La contraseña debe contener al menos una letra minúscula';
              }
              if (!/(?=.*[A-Z])/.test(values.NewPassword)) {
                errors.NewPassword = 'La contraseña debe contener al menos una letra mayúscula';
              }
            }
        
            // Validación de la confirmación de la contraseña
            if (!values.ConfPassword) {
              errors.ConfPassword = 'Campo requerido';
            } else if (values.NewPassword !== values.ConfPassword) {
              errors.ConfPassword = 'Las contraseñas no coinciden';
            }
        
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // Aquí puedes enviar los datos del formulario
            console.log(values);
          
            if (values.NewPassword === values.ConfPassword && values.NewPassword) {
              // Contraseña válida y coincidente
              BusmeSweetAlert(
                'Contraseña Restablecida',
                `¡Tu contraseña ha sido restablecida exitosamente!`,
                BusmeSweetAlertIconType.Success
              );
            
              // Establecemos que el formulario ya no está siendo enviado
              setSubmitting(false);
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-y-12'>
                <div className='flex flex-col gap-y-8'>
                  <div>
                    <InputField 
                      label="Nueva contraseña" 
                      type="password" 
                      name="NewPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.NewPassword}
                      error={errors.NewPassword}
                      touched={touched.NewPassword}
                    />
                    {/* Barra de fortaleza de contraseña */}
                    {values.NewPassword.length > 0 && (
                      <div className="w-full h-1 bg-muted-200">
                        <div 
                          className={`h-full rounded transition-all duration-300 ${
                            values.NewPassword.length >= 8 && /[a-z]/.test(values.NewPassword) && /[A-Z]/.test(values.NewPassword) && /\d/.test(values.NewPassword) 
                              ? 'bg-success' 
                              : values.NewPassword.length >= 8 || /[a-z]/.test(values.NewPassword) || /[A-Z]/.test(values.NewPassword) || /\d/.test(values.NewPassword)
                                ? 'bg-warning' 
                                : 'bg-danger'
                          }`}
                          style={{ width: 
                            `${((values.NewPassword.length >= 8 ? 1 : 0) + 
                              (/[\d]/.test(values.NewPassword) ? 1 : 0) + 
                              (/[A-Z]/.test(values.NewPassword) ? 1 : 0) + 
                              (/[a-z]/.test(values.NewPassword) ? 1 : 0)) * 25}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                  <div>
                    <InputField 
                      label="Confirmar contraseña" 
                      type="password" 
                      name="ConfPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ConfPassword}
                      error={errors.ConfPassword}
                      touched={touched.ConfPassword}
                    />
                  </div>
                </div>
                <div>
                  <CustomButton
                    text="Restablecer contraseña" 
                    type="submit"
                  />
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}