import React from "react";
import { useState, useEffect, useCallback } from "react";

const testLoaclstorage = () => {
  const initialValue = [
    {
      nom: "mohammed",
      email: "mohammed@gmail.com",
      telephone: "0768765432",
      adresse: "choisy le roi",
      remarque:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie",
    },
    {
      nom: "slimani",
      email: "slimani@gmail.com",
      telephone: "07688989932",
      adresse: "Paris",
      remarque:
        "Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas.",
    },
    {
      nom: "alexe",
      email: "alex@gmail.com",
      telephone: "07688290932",
      adresse: "vitry sur siene",
      remarque:
        "Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. ",
    },
  ];
  const key = "bbbb";

  const [state, setState] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (state !== undefined) {
        localStorage.setItem(key, JSON.stringify(state));
      } else {
        localStorage.removeItem(key);
      }
    } catch {
      // Silently fail (private mode, etc.)
    }
  }, [key, state]);

  const setValue = useCallback(
    (value) => {
      setState([...state, value]);
    },
    [setState, state]
  );

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch {
      // Fail silently
    }
  }, [key]);
  console.log(`hello`);

  // return [state, setValue, remove];
  const handleSubmit = () => {
    setValue({
      // id: Math.random(),
      nom: "moh3",
      email: "moh@gmail.com",
      telephone: "0768dd8290932",
      adresse: "moh sur siene",
      remarque: "Aliquam convallis sollicitudin purus.",
    });
    console.log(state);
  };

  return (
    <div>
      <button onClick={handleSubmit}> add</button>
      {/* <div>
        {state.map((item) => (
          <li key={item.nom}>{item.nom}</li>
        ))}
      </div> */}
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
            {state.map((client) => (
              <tr
                key={client.nom}
                data-id={client.nom}
                className=" odd:bg-slate-100 cursor-pointer "
                // onClick={handleClick}
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
  );
};

export default testLoaclstorage;
