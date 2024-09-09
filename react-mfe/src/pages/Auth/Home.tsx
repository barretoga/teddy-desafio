import type { FC } from "react";

const HomePage: FC = () => {
  const user = localStorage.getItem("user");

  function returnUser() {
    if (!user) {
      return "User";
    }
    return user;
  }

  return (
    <div className="mx-auto grid justify-center items-center w-full h-full">
      <h1 className="text-3xl">
        Bem vindo, <span className="font-bold">{returnUser()}!</span>
      </h1>
    </div>
  );
};

export default HomePage;
