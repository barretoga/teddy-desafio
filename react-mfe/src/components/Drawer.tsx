import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";

const Drawer: FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("keepLogin");
    navigate("/login");
  }

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="p-2 transition duration-300 ease-in-out hover:bg-gray-200 rounded-md"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
          alt="Menu"
          className="w-4 h-4"
        />
      </button>

      <div
        className={`fixed flex flex-col justify-between top-0 left-0 w-64 h-full bg-white shadow-md z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="mt-10 flex flex-col gap-y-4 p-4">
          <button
            onClick={toggleDrawer}
            className="p-2 hover:bg-gray-200 rounded-md transition max-w-[34px] -mt-3"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png"
              alt="Close"
              className="w-4 h-4"
            />
          </button>
          <a href="/partners/list" className="text-lg hover:underline">
            Parceiros
          </a>
          <a href="/partners/register" className="text-lg hover:underline">
            Cadastrar parceiro
          </a>
          <a href="/external-companies/list" className="text-lg hover:underline">
            Empresas externas
          </a>
          <a
            href="/external-companies/register"
            className="text-lg hover:underline"
          >
            Cadastrar empresa externa
          </a>
        </nav>

        <button
          onClick={handleLogout}
          type="button"
          className="block sm:hidden p-4"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
            alt="Logout"
            className="w-[20px] h-[20px] hover:cursor-pointer ml-4"
          />
        </button>
      </div>

      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
        />
      )}
    </>
  );
};

export default Drawer;
