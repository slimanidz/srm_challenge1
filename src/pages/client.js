import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { useAppContext } from "../components/AppContext";

const client = () => {
  const { clients, hrefClient } = useAppContext();
  console.log(hrefClient);

  const [client, setClient] = useState([]);

  useEffect(() => {
    clients.map((item) => {
      if (hrefClient == item.nom) {
        setClient(item);
      }
    });
  }, [setClient]);
  console.log(client);

  return (
    <Page>
      <div className="w-full h-full flex-col p-5 pt-10 sm:pt-20">
        <h1 className="text-3xl uppercase first-letter:text-5xl font-semibold ">
          fiche client
        </h1>
        <p className="py-2">
          <span className="text-xl font-semibold ">Nom : </span> {client.nom}
        </p>
        <p className="py-2">
          {" "}
          <span className="text-xl font-semibold ">Adresse: </span>{" "}
          {client.adresse}
        </p>
        <p className="py-2">
          <span className="text-xl font-semibold ">Client Ajouter le : </span>{" "}
          {client.createdAt}
        </p>

        <div className=" flex flex-col gap-3 text-whit sm:w-80">
          <div className="flex gap-5 justify-between items-center">
            <p className="">
              <span className="text-xl font-semibold ">Email : </span>
              {client.email}{" "}
            </p>
            <a href={`mailto:${client.email}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </div>
          <div className="w-full py-2 flex justify-between items-center ">
            <p className="">
              <span className="text-xl font-semibold ">Telephone : </span>
              {client.telephone}{" "}
            </p>

            <a href={`tel:${client.telephone}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-sm w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
            </a>
          </div>
        </div>
        <p className="py-2">
          <span className="text-xl font-semibold ">Hestorique : </span>
          {client.historique}
        </p>
      </div>
    </Page>
  );
};

export default client;
