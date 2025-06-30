import React from "react";
import { useRouter } from "next/router";

import { Formik, Field, Form } from "formik";

const initialValues = {
  username: "",
  password: "",
};

export default function Home() {
  const router = useRouter();

  const handleSubmit = (values) => {
    if ((values.nom == "user") | (values.password == "user")) {
      router.push("/clients");
    } else {
      alert("accès refusé, username ou passwoer erronè");
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
          <div>
            Pour connecter:
            <p>username : &ldquo;user&ldquo;</p>
            <p>password : &ldquo;user&ldquo;</p>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
