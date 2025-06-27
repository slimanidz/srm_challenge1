import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
const AppContext = createContext();
const initialClients = [
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

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = (props) => {
  // const initialClientsValue = JSON.stringify(initialClients);

  const [hrefClient, setHrefClient] = useState("");

  const key = "clients";

  const [clients, setClients] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialClients;
    } catch {
      return initialClients;
    }
  });

  useEffect(() => {
    try {
      if (clients !== undefined) {
        localStorage.setItem(key, JSON.stringify(clients));
      } else {
        localStorage.removeItem(key);
      }
    } catch {
      // Silently fail (private mode, etc.)
    }
  }, [key, clients]);

  const updateClients = useCallback(
    (value) => {
      setClients([...clients, value]);
    },
    [setClients, clients]
  );

  const removeClient = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setClients(undefined);
    } catch {
      // Fail silently
    }
  }, [key]);
  console.log(`hello`);

  return (
    <AppContext.Provider
      {...props}
      value={{
        setClients,
        clients,
        updateClients,
        hrefClient,
        setHrefClient,
      }}
    />
  );
};
export default AppContextProvider;
