import { BsMoon } from "react-icons/bs";
function Nav() {
  return (
    <nav className="bg-zinc-100">
      <div>
        <h3 className="text-lg font-bold">Where in the world?</h3>
      </div>
      <div className="flex flex-row items-center align-middle justify-center">
       <BsMoon color="black" size='16px' className="mx-2"/> <h3 id="dark-mode" className="text-md">Dark mode</h3>
      </div>
    </nav>
  );
}
export { Nav };
