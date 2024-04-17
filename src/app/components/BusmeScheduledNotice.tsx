import React, { useState, useRef, useEffect } from 'react';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { Formik } from 'formik';
import BusmeModal from '@/app/components/BusmeModal';
import BusmeDateInput from '@/app/components/BusmeDateInput';
import BusmeInput from '@/app/components/BusmeInput';
import BusmeSelectHours from "@/app/components/BusmeSelectHours";

interface NotificationProps {
  title: string;
  date: string;
  content: string;
  day: string;
  hour?: string;
}

const BusmeScheduleNotice: React.FC<NotificationProps> = ({ title, content, date, day, hour}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false); // Estado para controlar la visibilidad de las opciones
  const [selectedNotice, setSelectedNotice] = useState<NotificationProps | null>(null);
  const optionsRef = useRef<HTMLDivElement>(null); // Ref para las opciones
  const [departureTime, setDepartureTime] = useState("");

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleEdit = () => {
    setSelectedNotice({ title, date, content, day, hour });
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    // Lógica para la opción de eliminar
    console.log('Eliminar aviso');
    alert('Aviso eliminado');
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions); // Cambiar el estado al hacer clic en los tres puntos
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNotice(null);
  };

  // Función para cerrar las opciones si se hace clic fuera de ellas
  const handleClickOutside = (event: MouseEvent) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    // Agregar event listener al montar el componente
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Limpiar el event listener al desmontar el componente
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleHourChange = (e, setFieldValue) => {
    const { value } = e.target;
    setFieldValue('hour', value);
    setDepartureTime(value);
  };

  return (
    <div>
      <div className="flex font-poppins bg-muted-200 mt-5 p-4 rounded-lg flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className='font-semibold'>{title}</p>
          </div>
          <div className="flex items-center">
            <div className="relative flex" ref={optionsRef}> {/* Asignar la referencia al div de las opciones */}
              <p className="text-muted-950 rounded-3xl hover:bg-mute cursor-pointer hover:bg-muted-400" onClick={handleToggleOptions}>
                <IoEllipsisVerticalSharp />
              </p>
              {showOptions && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
                  <ul className="divide-y divide-gray-200">
                    <li className="px-4 py-2 rounded-ss-lg rounded-se-lg transition duration-300 ease-in-out hover:bg-primary-600 hover:text-white cursor-pointer" onClick={handleEdit}>
                      Editar
                    </li>
                    <li className="px-4 py-2 rounded-bl-lg rounded-br-lg border-white transition duration-300 ease-in-out hover:bg-primary-600 hover:text-white cursor-pointer" onClick={handleDelete}>
                      Eliminar
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-grow mt-3">
          <p className="text-sm mb-5">{content}</p>
          <hr className="my-2 text-muted-600" />
          <div className="flex items-center justify-between">
            <p className="text-sm">{day}{' '}{date}</p>
            <div
              className={`relative transition duration-300 ease-in-out w-12 h-6 rounded-full p-0.5 cursor-pointer ${isChecked ? 'bg-primary-400' : 'hover:bg-muted-600 bg-muted-500'}`}
              onClick={handleClick}
            >
              <div className={`w-5 h-5 rounded-full bg-white transform duration-300 ${isChecked ? 'translate-x-6' : ''}`}></div>
            </div>
          </div>
        </div>
      </div>
      <Formik
        initialValues={{ date: selectedNotice?.date || '', title: selectedNotice?.title || '', noticeContent: selectedNotice?.content || '', hour: selectedNotice?.hour || '', }}
        validate={values => {
          const errors = {} as { date?: string, title?: string, noticeContent?: string, hour?:string, };
          if (!values.date) {
            errors.date = 'Campo requerido'
          }
          if (!values.title) {
            errors.title = 'Campo requerido';
          }
          if (!values.noticeContent) {
            errors.noticeContent = 'Campo requerido';
          }
          if (!values.hour) {
            errors.hour = 'Campo requerido';
        }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // Aquí deberías enviar los datos actualizados del aviso a tu backend o donde sea necesario
          setTimeout(() => {

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
          setFieldValue
        }) => (
          <form onSubmit={handleSubmit}>
            <BusmeModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              showIcon={false}
              successButtonTitle="Guardar"
              disabled={isSubmitting}
            >
              <p className="subtitle-text">Editar Aviso Programado</p>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <BusmeDateInput name="date" title="Fecha"
                    onChange={handleChange} onBlur={handleBlur}
                    value={values.date}
                    validation={errors.date && touched.date && errors.date}
                  />
                </div>
                <div className="mx-4" />
                <div className="w-1/2">
                  <BusmeSelectHours
                    placeholder="Hora de salida"
                    value={departureTime}
                    onChange={(e) => handleHourChange(e, setFieldValue)}
                    validation={errors.hour}
                  />
                </div>
              </div>
              <BusmeInput name="title" title="Titulo del aviso"
                placeholder="Ingresa un título para el aviso"
                type={"text"}
                onChange={handleChange} onBlur={handleBlur}
                value={values.title}
                validation={errors.title && touched.title && errors.title}
              />
              <BusmeInput name="noticeContent" title="Contenido del aviso"
                placeholder="Coloca el contenido del aviso"
                type="text"
                onChange={handleChange} onBlur={handleBlur}
                value={values.noticeContent}
                validation={errors.noticeContent && touched.noticeContent && errors.noticeContent}
                multiline={true}
              />
            </BusmeModal>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BusmeScheduleNotice;