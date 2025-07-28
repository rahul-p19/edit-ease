import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const auth = useAuth();
  const isAuthenticated = auth ? auth.isAuthenticated : false;
  return (
    <nav className="flex items-center justify-between w-full py-6 px-8 sm:px-14">
      <Link to={"/"} className="text-4xl font-medium">
        EditEase
      </Link>
      <Link
        to={"/events"}
        className="text-xl border-b border-b-transparent hover:border-b-ink transition-colors duration-150"
      >
        Events
      </Link>
      {isAuthenticated && (
        <button
          className="bg-ink text-background py-1 px-2 rounded-sm"
          onClick={() => auth?.logout()}
        >
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
