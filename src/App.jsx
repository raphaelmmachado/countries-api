import { ContextProvider } from "./context/ContextProvider.jsx";
import { Nav } from "./components/nav/Nav";
import { Input } from "./components/inputs/Input";
import { Home } from "./components/Home";
function App() {
  return (
    <div className="App">
      <Nav />
        <ContextProvider>
        <Input />
        <Home />
        </ContextProvider>
    </div>
  );
}

export default App;
