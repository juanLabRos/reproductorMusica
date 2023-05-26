import React from "react";
import "../Navbar.css";
function Navbar() {
  return (
    <>
      <nav class="bg-gray-900">
        <div class="container">
          <div class="flex items-center justify-between h-20 relative">
            <div className="mb-4">
              <h1 className="w- text-3xl font-bold text-[#00df9a] mt-4">
                BanSound
              </h1>
            </div>
            <div class="flex items-center space-x-4">
              <a
                class="text-gray-300 hover:text-green-300 px-3 py-2 hover-effect"
                href="#"
              >
                Inicio
              </a>
              <a
                class="text-gray-300 hover:text-green-300 px-3 py-2 hover-effect"
                href="#"
              >
                Tu biblioteca
              </a>
              <a
                class="text-gray-300 hover:text-green-300 px-3 py-2 rounded-md hover-effect"
                href="#"
              >
                Amigos
              </a>
              <a
                class="text-gray-300 hover:text-green-300 px-3 py-2 rounded-md hover-effect"
                href="#"
              >
                Perfil
              </a>
              <a className="rounded-full h-12 w-12 overflow-hidden flex items-center justify-center">
                <img
                  src="../img/perfil.jpg"
                  alt="Foto de perfil"
                  class="rounded-full h-full w-full object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
