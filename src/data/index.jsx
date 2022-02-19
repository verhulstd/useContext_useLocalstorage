import { createContext, useState } from "react";

export const Provider = ({ children }) => {
  const [counter, setCounter] = useState(20);
  const data = {
    hobbies: ["voetbal", "zwemmen", "vissen"],
    gemeente: "Halle",
    counter: {
      value: counter,
      change: setCounter,
    },
  };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

const dataContext = createContext(null);

export default dataContext;
