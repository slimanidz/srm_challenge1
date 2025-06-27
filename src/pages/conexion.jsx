import React from "react";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
  acceptTerm: false,
};

// const handleSubmit = (values) => {
//   console.log(values);

// };

const Connexion = () => {
  const [elements, setElements] = useState([]);

  const handleSubmit = (values) => {
    setElements([...elements, values.firstName, values.lastName, values.email]);
  };
  return (
    <>
      <div className="w-80 border-2 border-black  p-5 m-3">
        <h1 className="text-center text-2xl">Inscription</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ resetForm }) => (
            <Form>
              <div className="flex flex-col mb-3">
                <label htmlFor="firstName">Prénoms:</label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control border"
                />
                <ErrorMessage
                  name="firstName"
                  component="small"
                  className=" text-red-700 "
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="lastName">Nom:</label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control border"
                />
                <ErrorMessage
                  name="lastName"
                  component="small"
                  className="text-red-700"
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form- border"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-red-700"
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="password">Mot de passe:</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control border"
                />
                <ErrorMessage
                  name="password"
                  component="small"
                  className="text-red-700"
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="confirmPassword">
                  Confirmer le mot de passe:
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control border"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="small"
                  className="text-red-700"
                />
              </div>
              <div className=" mb-5">
                <Field
                  name="acceptTerms"
                  type="checkbox"
                  className="form-check-input"
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  J'ai lu et j'accepte les conditions
                </label>
                <ErrorMessage
                  name="acceptTerms"
                  component="small"
                  className="text-red-700"
                />
              </div>
              <div className="form-group d-flex justify-content-end gap-3">
                <button
                  type="submit"
                  className=" p-2 bg-blue-500 active:bg-blue-700 rounded"
                >
                  S'inscrire
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className=" p-2  bg-red-500 active:bg-red-700 rounded"
                >
                  Annuler
                </button>
              </div>
              <div className="p-5 w-64">
                <ol>
                  {elements.map((element) => (
                    <li className="border-b border-black" key={element}>
                      {element.toUpperCase()}
                    </li>
                  ))}
                </ol>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Connexion;
