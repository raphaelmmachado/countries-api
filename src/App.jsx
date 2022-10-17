import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import { Input } from "./components/inputs/Input";
import { Home } from "./pages/Home";
import { ContextProvider } from "./context/ContextProvider.jsx";
import { IndividualCountry } from "./pages/IndividualCountry";
function App() {
  return (
    <div className="App dark:bg-zinc-900 bg-zinc-100 ">
      <ContextProvider>
        <Nav />
        <Routes>
          <Route
            index
            element={
              <>
                <Input />
                <Home />
              </>
            }
          />
          <Route path="/country/:slug" element={<IndividualCountry />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
