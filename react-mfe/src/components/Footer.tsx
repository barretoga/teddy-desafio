import type { FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <div className="flex items-center hover:cursor-pointer">
              <a href="/">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2938/2938228.png"
                  className="object-fill w-[70px] h-[70px]"
                />
                <h1 className="text-2xl font-bold ml-2">Teddy</h1>
              </a>
            </div>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              Desafio realizado para a vaga de Desenvolvedor Front-End pela
              Teddy.
            </p>
          </div>
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Teddy</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Página inicial
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="/partners/list"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Parceiros
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="/external-companies/list"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Empresas externas
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Sobre</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  Sobre o desafio
                </a>
              </li>
              <li className="mb-6">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Repositório
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500 ">
              ©{" "}
              <a href="https://github.com/barretoga" target="_blank">
                Gabriel Barreto
              </a>{" "}
              {currentYear}, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
