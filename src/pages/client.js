import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { useAppContext } from "../components/AppContext";

// import { usePathname } from "next/navigation";

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
      <div className="w-full h-full flex-col gap-5 justify-center flex-center p-5 pt-20 sm:pt-40  bg-slate-300">
        <h1 className="text-3xl first-letter:uppercase first-letter:text-5xl font-semibold leading-8 text-whie sm:text-3xl sm:leading-9">
          fiche client
        </h1>
        <p> nom :{client.nom}</p>
        <p className=" first-letter:uppercase ">adresse: {client.adresse}</p>

        <div className=" flex flex-col gap-3 text-whit sm:w-80">
          <div className="flex gap-5 justify-between items-center">
            {/* <a href={`mailto:${nounou.email}`}>
                      <RiMailSendFill />
                    </a> */}
            <p className="">{client.email} </p>
            <a
              href={`mailto:${client.email}`}
              className="flex items-center justify-center gap-x-2 rounded-bl-lg   text-sm font-semibold text-whit"
            >
              Email
            </a>
          </div>
          <div className="w-full flex justify-between items-center ">
            <p className="">{client.telephone} </p>
            <a
              href={`tel:${client.telephone}`}
              className="flex items-center justify-center gap-x-2 rounded-br-lg  text-sm font-semibold text-whit"
            >
              Call
            </a>
          </div>
        </div>
        <p className=" first-letter:uppercase ">remarque:{client.remarque}</p>
      </div>
    </Page>
  );
};

export default client;
