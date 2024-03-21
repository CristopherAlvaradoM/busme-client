"use client"
import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeInput from "@/app/components/BusmeInput";
import {Formik} from "formik";

export default function NewUserPage() {
    return (
        <div>
            <BusmePageHeader rol={"Superadministrador"} title={"Nuevo usuario"} username={"Anthony"}
                             showBackIcon={true}/>
            <div className="flex justify-between h-full">
                <div className="w-7/12 h-full">
                    <BusmeCard>
                        <p className="subtitle-text">Información del usuario</p>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validate={values => {
                                    const errors = {} as {email?: string, password?: string};
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }
                                    if (!values.password) {
                                        errors.password = 'Ingresa una contraseña';
                                    } else if (values.password.length < 8) {
                                        errors.password = 'La contraseña debe tener al menos 8 caracteres';
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
                                      /* and other goodies */
                                  }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex justify-between">
                                            <BusmeInput name={"email"} title={"Nombre(s)"} placeholder={"ei"}
                                                        type={"email"}
                                                        onChange={handleChange} onBlur={handleBlur}
                                                        value={values.email}
                                                        validation={errors.email && touched.email && errors.email}/>
                                            <div className="mx-4"/>
                                            <BusmeInput name={"password"} title={"Apellido paterno"} placeholder={"ei"}
                                                        type={"password"} onChange={handleChange} onBlur={handleBlur}
                                                        value={values.password}
                                                        validation={errors.password && touched.password && errors.password}/>
                                        </div>
                                        <div className="flex justify-between">
                                            <BusmeInput name={"email"} title={"Apellido materno"} placeholder={"ei"}
                                                        type={"email"}
                                                        onChange={handleChange} onBlur={handleBlur}
                                                        value={values.email}
                                                        validation={errors.email && touched.email && errors.email}/>
                                            <div className="mx-4"/>
                                            <BusmeInput name={"password"} title={"Número de teléfono"}
                                                        placeholder={"ei"}
                                                        type={"password"} onChange={handleChange} onBlur={handleBlur}
                                                        value={values.password}
                                                        validation={errors.password && touched.password && errors.password}/>
                                        </div>
                                        <p className="subtitle-text mt-5">Información del usuario</p>
                                        <div className="flex justify-between">
                                            <BusmeInput name={"email"} title={"Nombre(s)"} placeholder={"ei"}
                                                        type={"email"}
                                                        onChange={handleChange} onBlur={handleBlur}
                                                        value={values.email}
                                                        validation={errors.email && touched.email && errors.email}/>
                                            <div className="mx-4"/>
                                            <BusmeInput name={"password"} title={"Apellido paterno"} placeholder={"ei"}
                                                        type={"password"} onChange={handleChange} onBlur={handleBlur}
                                                        value={values.password}
                                                        validation={errors.password && touched.password && errors.password}/>
                                        </div>
                                        <div className="flex justify-between">
                                            <BusmeInput name={"email"} title={"Apellido materno"} placeholder={"ei"}
                                                        type={"email"}
                                                        onChange={handleChange} onBlur={handleBlur}
                                                        value={values.email}
                                                        validation={errors.email && touched.email && errors.email}/>
                                            <div className="mx-4"/>
                                            <BusmeInput name={"email"} title={"Apellido materno"} placeholder={"ei"}
                                                        type={"email"}
                                                        onChange={handleChange} onBlur={handleBlur}
                                                        value={values.email}
                                                        validation={errors.email && touched.email && errors.email}/>
                                        </div>
                                        <button type="submit" disabled={isSubmitting}
                                                className="button-secondary button-secondary-hover w-full mt-6">
                                            Generar perfil de usuario
                                        </button>
                                    </form>
                                )}
                            </Formik>
                    </BusmeCard>
                </div>
                <div className="w-5/12 ml-7">
                    <BusmeCard>
                        <p className="subtitle-text">Vista previa</p>
                        <p className="body-text mt-5">Estás a punto de crear un nuevo perfil para:</p>
                    </BusmeCard>
                </div>
            </div>
        </div>
    );
}