import Link from "next/link";
import { useAuth } from "../auth/context/Authcontex";

export default function Navbar() {
  const { logout } = useAuth();
  return (
    <nav className="px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">Logo</a>
        </div>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              href={"/"}
              className="hover:border-b-2 hover:border-teal-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/server"}
              className="hover:border-b-2 hover:border-teal-600 transition-colors duration-200"
            >
              Server Data
            </Link>
          </li>
          <li>
            <Link
              href={"/dummyuser"}
              className="hover:border-b-2 hover:border-teal-600 transition-colors duration-200"
            >
              users
            </Link>
          </li>
          <li>
            <Link
              href={"/gallary"}
              className="hover:border-b-2 hover:border-teal-600 transition-colors duration-200"
            >
              Gallary
            </Link>
          </li>
          <li>
            <Link
              href={"/todo"}
              className="hover:border-b-2 hover:border-teal-600 transition-colors duration-200"
            >
              Todo List
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="hover:border-b-2 hover:border-teal-600 transition-colors duration-200"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href={"/contactus"}
              className="hover:border-b-2 hover:border-teal-600 transition-colors duration-200"
            >
              contactus
            </Link>
          </li>
          <li>
            <div className="bg-teal-500 hover:bg-teal-600 text-white  px-4 py-2 rounded-lg ">
              <button onClick={logout}>logout</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
