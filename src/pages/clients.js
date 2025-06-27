import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Connecion from "./conexion";
import Page from "../components/Page";
import { Field, Form, Formik } from "formik";
import { useAppContext } from "../components/AppContext";

const initialValue = {
  nom1: "",
};

const Clients = () => {
  const router = useRouter();

  const [clients2, setClients2] = useState([]);
  const { clients, setClients, setHrefClient } = useAppContext();
  useEffect(() => {
    setClients2(clients);
  }, [setClients2]);

  const handleClick = (value) => {
    const nom = value.currentTarget.getAttribute("data-id");
    setHrefClient(nom);
    router.push(`/client`);

    console.log(nom);
  };
  const handelFilter = (nom1) => {
    console.log(clients2);
    clients2.map((item) => {
      if (item.nom == nom1.nom1) {
        const client1 = item;
        console.log(client1);
        clients2.filter((cloent) => cloent !== client1);
        console.log(clients2);
      } else {
        console.log("false");
      }
      return;
    });
    // ;
  };

  if (clients) {
    console.log("true");
  }

  return (
    <Page>
      <div className="h-fit bg-base-200 p-5 rounded-xl w-full">
        <div className="flex justify-between ">
          <div>
            <h2 className="badge badge-accent">Liste des clients</h2>
            <div>
              <Formik onSubmit={handelFilter} initialValues={initialValue}>
                <Form>
                  <Field
                    className=" block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:bg-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search (entrer le nom du client)"
                    type="search"
                    name="nom1"
                  />

                  <button
                    type="button"
                    onClick={handelFilter}
                    className="absolute bottom-1.5 right-3 tex font-bold text-gray-500 bg-gray-100 px-1 rounded-full "
                  >
                    x{/* <BiX className="w-5 h-5" /> */}
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          <div>
            <a href="/add-client">Ajouter un clisnt</a>
          </div>
        </div>

        <div className="scrollable">
          <table className="table w-full">
            <thead className="uppercase">
              <tr>
                <th>nom</th>
                <th>email</th>
                <th> telephone</th>
                <th>adresse</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="w-full ">
              {clients2.map((client) => (
                <tr
                  key={client.nom}
                  data-id={client.nom}
                  className=" odd:bg-slate-100 cursor-pointer "
                  onClick={handleClick}
                >
                  <td>
                    <div data-id={client.id} className="bg-slate">
                      {client.nom}
                    </div>
                  </td>
                  <td>
                    <div data-id={client.id} className="">
                      {client.email}
                    </div>
                  </td>
                  <td>
                    <div data-id={client.id} className="">
                      {client.telephone}
                    </div>
                  </td>
                  <td>
                    <div data-id={client.id} className="">
                      {client.adresse}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Page>
  );
};
export default Clients;
