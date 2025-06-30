import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Page from "../components/Page";
import { Field, Form, Formik } from "formik";
import { useAppContext } from "../components/AppContext";
import Link from "next/link";

const initialValue = {
  nom1: "",
};

const Clients = () => {
  const router = useRouter();

  const [clients2, setClients2] = useState([]);
  const { clients, setHrefClient } = useAppContext();
  const [clientAffiche, setClientAffiche] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [nomSerch, setNomSerch] = useState("");
  useEffect(() => {
    setClients2(clients);
  }, [setClients2]);

  const handleClick = (value) => {
    const nom = value.currentTarget.getAttribute("data-id");
    setHrefClient(nom);
    router.push(`/client`);
  };
  const handelFilter = (nom1) => {
    setNomSerch(nom1);

    clients2.map((item) => {
      if (item.nom == nom1.nom1) {
        const client1 = item;
        setClientAffiche([client1]);
        setIsActive(true);
      } else {
        console.log("no client");
      }
      return;
    });
  };

  const handleClearSearch = () => {
    setIsActive(false);
    setNomSerch("");
  };

  return (
    <Page>
      <div className="h-full p-5  w-full ">
        <div className="md:flex-row-reverse md:flex md:justify-between md:py-10 pb-5 ">
          <div className="w-full flex justify-between">
            <div className="text-white">.</div>
            <Link href="/add-client">
              <a className="order-last p-2 h-10 flex-end text font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-400 rounded">
                Ajouter un client
              </a>
            </Link>
          </div>
          <div>
            <h2 className="text-xl text-blue-600">Liste des clients</h2>
            <div>
              <Formik onSubmit={handelFilter} initialValues={initialValue}>
                <Form className="flex gap-2">
                  <Field
                    className="  w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:bg-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search (entrer le nom du client)"
                    // type="search"
                    name="nom1"
                  />
                  {nomSerch ? (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className="p-2 font-bold text-gray-500 bg-gray-200  rounded-full "
                    >
                      X
                    </button>
                  ) : null}
                </Form>
              </Formik>
            </div>
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
              {(isActive ? clientAffiche : clients2).map((client) => (
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
