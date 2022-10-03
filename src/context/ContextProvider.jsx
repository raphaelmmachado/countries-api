import { createContext,  useState } from "react";
const Context = createContext();

function ContextProvider({ children }) {
  const [selectByRegion, setSelectByRegion] = useState("");
  const [inputText ,setInputText] = useState("")
  const [showRegionComponent,setShowRegionComponent] = useState(false)
  return (
    <Context.Provider value={{ selectByRegion, setSelectByRegion,
                               inputText, setInputText,
                              showRegionComponent, setShowRegionComponent
    }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
