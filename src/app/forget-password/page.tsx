"use client";
import CustomButton from "@/app/components/BusmeButtonLogin";
import InputField from "@/app/components/BusmeInputLogin";
import Image from "next/image";
import Logotipo from "@/assets/img/LogotipoBusme.jpg";
import { IoArrowBack } from "react-icons/io5";
import { Formik } from "formik";
import Link from "next/link";
import {
  BusmeSweetAlert,
  BusmeSweetAlertIconType,
} from "@/app/components/BusmeSweetAlert";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function ForgetPasswordPage() {
  return (
    <main className="flex flex-col md:h-screen w-full p-8 md:p-10 overflow-auto">
      <div className="w-full">
        <Image
          src={Logotipo}
          alt="Fondo Página Login"
          className="w-36 md:w-48"
          priority
        />
      </div>
      <div className="flex flex-col mx-auto my-24 xl:my-auto justify-center text-center gap-y-12">
        <div className="w-full flex justify-start items-center">
          <Link href="./">
            <span className="flex items-center">
              <IoArrowBack className="w-[30px] h-[30px] mr-2 cursor-pointer" />
              <p className="subtitle-text">Regresar</p>
            </span>
          </Link>
        </div>
        <div>
          <h2 className="font-poppins font-semi-bold text-2xl md:text-3xl mb-2">
            Recuperar mi contraseña
          </h2>
          <p className="body-text">
            Ingrese la dirección de correo electrónico para continuar
          </p>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {} as { email?: string };
            // Validación personalizada para el correo electrónico y la contraseña
            if (!values.email) {
              errors.email = "Campo requerido";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Dirección de correo electrónico inválida";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            // Lista de correos existentes

            const token = Cookies.get("token");
            fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/password-reset/password?correo=${values.email}`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `${token}`,
                },
              }
            )
              .then((response) => {
                setSubmitting(false);
                if (response.ok) {
                  console.log(response);
                  return BusmeSweetAlert(
                    "Correo Enviado",
                    "Hemos enviado un correo para restablecer tu contraseña.",
                    BusmeSweetAlertIconType.Success
                  );
                } else {
                  return BusmeSweetAlert(
                    "Correo inválido",
                    "El correo electrónico que ingresaste no está asociado con ninguna cuenta.",
                    BusmeSweetAlertIconType.Error
                  );
                }
              })
              .catch((error) => {
                console.error(error);
               
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-14">
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
              </div>
              <div className="">
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
    </main>
  );
}
