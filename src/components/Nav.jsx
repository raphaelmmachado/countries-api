import { BsMoon } from "react-icons/bs";
function Nav() {
  return (
    <nav>
      <div>
        <h3 id="nav-title">Where in the world?</h3>
      </div>
      <div>
        <h3 id="dark-mode"><BsMoon color="black" size='16px'/>dark mode</h3>
      </div>
    </nav>
  );
}
export { Nav };
