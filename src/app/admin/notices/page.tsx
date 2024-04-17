'use client'

import { useState } from "react";
import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeInput from "@/app/components/BusmeInput";
import BusmeSecondaryButton from "@/app/components/BusmeSecondaryButton";
import BusmeDateInput from "@/app/components/BusmeDateInput";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Formik } from "formik";
import BusmeScheduleNotice from "@/app/components/BusmeScheduledNotice";

export default function BusmeNotices() {
  const [bar1Open, setBar1Open] = useState(true);
  const [bar2Open, setBar2Open] = useState(false);

  const OpenBar1 = () => {
    setBar1Open(true);
    setBar2Open(false); // Cierra la barra 2 al abrir la barra 1
  };

  const OpenBar2 = () => {
    setBar2Open(true);
    setBar1Open(false); // Cierra la barra 1 al abrir la barra 2
  };

  return (
    <div>
      <BusmePageHeader title={"Avisos"} username={"Anthony"} rol={"Administrador"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between pb-10 gap-x-7">
        <div className="w-full flex-grow">
          <div className="mt-8">
            <button className={`transition duration-300 ease-in-out hover:bg-primary-600 hover:text-white 
            text-left text-lg font-poppins font-semi-bold py-2 px-4 rounded-lg w-full h-12 flex items-center justify-between
            ${bar1Open ? 'bg-primary-600 text-white' : 'bg-white text-black'}
            `} onClick={OpenBar1}>
              Aviso Rápido
              {bar1Open ? <IoChevronUp /> : <IoChevronDown />}
            </button>
            {bar1Open && (
              <div>
                <BusmeCard>
                  <p className="subtitle-text">Crear aviso rápido</p>
                  <Formik
                    initialValues={{ title: '', noticeContent: '' }}
                    validate={values => {
                      const errors = {} as { title?: string, noticeContent?: string };
                      if (!values.title) {
                        errors.title = 'Campo requerido';
                      }
                      if (!values.noticeContent) {
                        errors.noticeContent = 'Campo requerido';
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
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
                        <div>
                          <BusmeInput
                            name="title"
                            title="Titulo del aviso"
                            placeholder="Ingresa un título para el aviso"
                            type={"text"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                            validation={errors.title && touched.title && errors.title}
                          />
                        </div>
                        <div className="">
                          <BusmeInput
                            name="noticeContent"
                            title="Contenido del aviso"
                            placeholder="Coloca el contenido del aviso"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.noticeContent}
                            validation={errors.noticeContent && touched.noticeContent && errors.noticeContent}
                            multiline={true}
                          />
                        </div>
                        <BusmeSecondaryButton title="Guardar aviso" disabled={isSubmitting} />
                      </form>
                    )}
                  </Formik>
                </BusmeCard>
              </div>
            )}
          </div>
          <div className="mt-8">
            <button className={`transition duration-300 ease-in-out hover:bg-primary-600 hover:text-white 
            text-left text-lg font-poppins font-semi-bold py-2 px-4 rounded-lg w-full h-12 flex items-center justify-between
            ${bar2Open ? 'bg-primary-600 text-white' : 'bg-white text-black'}
            `} onClick={OpenBar2}>
              Programar Aviso
              {bar2Open ? <IoChevronUp /> : <IoChevronDown />}
            </button>
            {bar2Open && (
              <div>
                <BusmeCard>
                  <p className="subtitle-text">Programar un aviso</p>
                  <Formik
                    initialValues={{ date: '', hour: '', title: '', noticeContent: '' }}
                    validate={values => {
                      const errors = {} as { date?: string, hour?: string, title?: string, noticeContent?: string };
                      if (!values.date) {
                        errors.date = 'Campo requerido'
                      } else {
                        const currentDate = new Date();
                        currentDate.setUTCHours(0, 0, 0, 0); // Establecer horas, minutos, segundos y milisegundos en 0
                        console.log(currentDate)

                        const selectedDate = new Date(values.date);
                        selectedDate.setDate(selectedDate.getDate() + 1);
                        selectedDate.setUTCHours(0, 0, 0, 0); // Establecer horas, minutos, segundos y milisegundos en 0
                        console.log(selectedDate)

                        if (selectedDate.getTime() < currentDate.getTime()) {
                          errors.date = 'La fecha no puede ser una fecha pasada';
                        }
                      }
                      if (!values.hour) {
                        errors.hour = 'Campo requerido'
                      }
                      if (!values.title) {
                        errors.title = 'Campo requerido';
                      }
                      if (!values.noticeContent) {
                        errors.noticeContent = 'Campo requerido';
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
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
                        <div className="">
                          <BusmeDateInput name="date" title="Fecha"
                            onChange={handleChange} onBlur={handleBlur}
                            value={values.date}
                            validation={errors.date && touched.date && errors.date}
                          />
                        </div>
                        <div>
                          <BusmeInput name="title" title="Titulo del aviso"
                            placeholder="Ingresa un título para el aviso"
                            type={"text"}
                            onChange={handleChange} onBlur={handleBlur}
                            value={values.title}
                            validation={errors.title && touched.title && errors.title}
                          />
                        </div>
                        <div className="">
                          <BusmeInput name="noticeContent" title="Contenido del aviso"
                            placeholder="Coloca el contenido del aviso"
                            type="text"
                            onChange={handleChange} onBlur={handleBlur}
                            value={values.noticeContent}
                            validation={errors.noticeContent && touched.noticeContent && errors.noticeContent}
                            multiline={true}
                          />
                        </div>
                        <BusmeSecondaryButton title="Guardar aviso" disabled={isSubmitting} />
                      </form>
                    )}
                  </Formik>
                </BusmeCard>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex-grow">
          <BusmeCard>
            <p className="subtitle-text">Avisos programados</p>
            <BusmeScheduleNotice title="El autobus esta llegando" content="El autobus esta llegando a la escuela"
              day="Viernes" date="08/12/2023"
            />
          </BusmeCard>
        </div>
      </div>
    </div>
  );
}