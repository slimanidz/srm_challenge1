import Page from "../components/Page";
import React, { useState } from "react";
import { useRouter } from "next/router";

import { Formik, Field, Form, ErrorMessage } from "formik";

const initialValues = {
  username: "momo",
  password: "momo",
};

export default function Home() {
  const router = useRouter();

  // return (
  //   <Page>
  //     <PageDacueil />
  //   </Page>
  // );
  const [clients, setClients] = useState([]);
  console.log(clients);

  const handleSubmit = (values) => {
    console.log(values);

    if ((values.nom == "momo") | (values.password == "momo")) {
      router.push("/clients");
    } else {
      alert("accès refusé, username ou passwoer erronè");
      console.error("accès refusé");
    }
  };

  return (
    <div className=" h-screen  flex flex-col justify-center  items-center bg-gradient-to-b from-gray-100 to-gray-500  rounded-md border-2 border-indigo-600 ">
      <h1 className="text-center text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
        connexion{" "}
      </h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <div className="flex flex-col">
            <label>Username:</label>
            <Field
              type="text"
              id="username"
              name="username"
              className="border-2 border-black px-2 rounded "
            />
          </div>
          <div className="flex flex-col">
            <label>Password:</label>
            <Field
              type="text"
              id="password"
              name="password"
              className="border-2 border-black px-2 rounded"
            />
          </div>

          <div className="flex gap-3 my-3">
            <button
              type="submit"
              className="p-2 w-full text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
            >
              submit{" "}
            </button>
          </div>
          <di>
            pour connecter:
            <p>username : momo</p>
            <p>password : momo</p>
          </di>
        </Form>
      </Formik>
      {/* <a href="/test-localstorage">testLoaclstorage</a> */}
    </div>
  );
}
