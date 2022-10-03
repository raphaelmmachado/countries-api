import { BsMoon } from "react-icons/bs";
function Nav() {
  return (
    <nav className="bg-slate-100">
      <div>
        <h3 id="nav-title">Where in the world?</h3>
      </div>
      <div className="flex flex-row items-center align-middle">
       <BsMoon color="black" size='16px' className="mx-2"/> <h3 id="dark-mode" className="text-lg">Dark mode</h3>
      </div>
    </nav>
  );
}
export { Nav };
