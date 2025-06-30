import React from "react";
import { Formik, Field, Form } from "formik";
import Page from "../components/Page";
import { useAppContext } from "../components/AppContext";
import { formatLongDateTime } from "../components/Date";
import { useRouter } from "next/router";
import Link from "next/link";

const initialValues = {
  nom: "",
  email: "",
  telephone: "",
  adresse: "",
  historique: "",
  createdAt: formatLongDateTime(Date.now()),
};

const AddClient = () => {
  const router = useRouter();

  const { updateClients } = useAppContext();

  const handleSubmit = (values) => {
    updateClients({
      nom: values.nom,
      email: values.email,
      telephone: values.telephone,
      adresse: values.adresse,
      historique: values.historique,
      createdAt: formatLongDateTime(Date.now()),
    });
    router.push("/clients");
  };

  return (
    <Page>
      <div className="w-full h-full flex flex-col items-center justify-center ">
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
                <label>historique:</label>
                <Field
                  as="textarea"
                  rows={3}
                  name="historique"
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="historique"
                />
              </div>

              <div className="flex items-center justify-between gap-3 my-3">
                <button
                  type="submit"
                  className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
                >
                  submit{" "}
                </button>
                <Link href="/clients">
                  <a onClick={resetForm} className="hover:underline">
                    annuler{" "}
                  </a>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  );
};

export default AddClient;
