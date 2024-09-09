import type { FC } from "react";
import Drawer from "./Drawer";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  function returnUser() {
    if (!user) {
      return "User";
    }
    return user;
  }

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("keepLogin");
    navigate("/login");
  }

  return (
    <div className="flex w-full fixed top-0 p-2 px-7 items-center justify-between bg-white">
      <div className="flex items-center gap-x-2">
        <Drawer />

        <div className="flex items-center gap-x-2 hover:cursor-pointer">
          <a href="/" className="flex items-center gap-x-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2938/2938228.png"
              className="object-fill w-[70px] h-[70px]"
            />
            <h1 className="text-2xl font-bold">Teddy</h1>
          </a>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <span className="w-full max-w-[300px] sm:block hidden truncate">
          {returnUser()}
        </span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
          className="object-fill w-[50px] h-[50px] border rounded-full transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 hover:cursor-pointer"
        />
        <button
          onClick={handleLogout}
          type="button"
          className="hidden sm:block"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
            alt="Logout"
            className="w-[20px] h-[20px] hover:cursor-pointer ml-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
