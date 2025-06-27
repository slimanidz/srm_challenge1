import React, { useCallback, useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Page from "../components/Page";
import { useAppContext } from "../components/AppContext";

const initialValues = {
  nom: "",
  email: "",
  telephone: "",
  adresse: "",
  remarque: "",
};

const AddClient = () => {
  const { clients, setClients, updateClients } = useAppContext();
  console.log(clients);

  const handleSubmit = (values) => {
    updateClients(values);
  };

  return (
    <Page>
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-500  rounded-md border-2 border-indigo-600 ">
        <h1 className="text-center text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
          Ajouter un client
        </h1>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ resetForm }) => (
            <Form>
              <div className="flex flex-col">
                <label>Nom *:</label>
                <Field
                  type="text"
                  id="nom"
                  name="nom"
                  className="border-2 border-black px-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label>Email *:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="border-2 border-black px-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label>telephone:</label>
                <Field
                  type="nember"
                  id="telephone"
                  name="telephone"
                  className="border-2 border-black px-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label>Adresse:</label>
                <Field
                  type="text"
                  id="adresse"
                  name="adresse"
                  className="border-2 border-black px-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label>remarque:</label>
                <Field
                  type="text"
                  id="remarque"
                  name="remarque"
                  className="border-2 border-black px-2 rounded"
                />
              </div>

              <div className="flex gap-3 my-3">
                <button
                  type="submit"
                  className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
                >
                  submit{" "}
                </button>

                <a
                  href="/"
                  // type="button"
                  onClick={resetForm}
                  className="hover:underline"
                >
                  annuler{" "}
                </a>
              </div>
              <div className="p-5 w-64">
                <ol>
                  {clients.map((client) => (
                    <li className="border-b border-black" key={client}>
                      {client.nom.toUpperCase()}
                    </li>
                  ))}
                </ol>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  );
};

export default AddClient;
