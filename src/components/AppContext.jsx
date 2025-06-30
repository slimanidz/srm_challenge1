import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { formatLongDateTime } from "./Date";
const AppContext = createContext();
const initialClients = [
  {
    nom: "Slimani",
    email: "slimani@gmail.com",
    telephone: "07687654392",
    adresse: "choisy le roi",
    historique:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie",
    createdAt: formatLongDateTime(Date.now()),
  },
  {
    nom: "Martin",
    email: "martin@gmail.com",
    telephone: "07688989932",
    adresse: "Paris",
    historique:
      "Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas.",
    createdAt: formatLongDateTime(Date.now()),
  },
  {
    nom: "alexe",
    email: "alex@gmail.com",
    telephone: "07688290932",
    adresse: "vitry sur siene",
    historique:
      "Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. ",
    createdAt: formatLongDateTime(Date.now()),
  },
];

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = (props) => {
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
      // Silently fail
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
