import React from "react";
import "../Friends.css";

export default function Friends() {
  const nombre = "Pepe";
  const cancion = "Who Loves The Sun";
  const artista = "The Velvet Underground";
  const estado = ":)";

  return (
    <div className="contenedor">
      <h1 className="text-3xl font-bold text-[#00df9a] mt-4 mr-20 mb-2">
        Tus Amigos
      </h1>
      <ul className="p-4 flex">
        <li className="card-container">
          <div className="flex items-center">
            <img
              className="rounded-full h-12 w-12 overflow-hidden"
              src="../img/Perfil.jpg"
              alt="Foto de perfil"
            />
            <div className="ml-4">
              <p className="font-bold">{nombre}</p>
              <p className="text-xs">
                {cancion} :: {artista}
              </p>
            </div>
          </div>
        </li>
      </ul>
      <ul className="p-4 flex">
        <li className="card-container">
          <div className="flex items-center">
            <img
              className="rounded-full h-12 w-12 overflow-hidden"
              src="../img/Perfil.jpg"
              alt="Foto de perfil"
            />
            <div className="ml-4">
              <p className="font-bold">{nombre}</p>
              <p className="text-xs">
                {cancion} :: {artista}
              </p>
            </div>
          </div>
        </li>
      </ul>
      <ul className="p-4 flex">
        <li className="card-container">
          <div className="flex items-center">
            <img
              className="rounded-full h-12 w-12 overflow-hidden"
              src="../img/Perfil.jpg"
              alt="Foto de perfil"
            />
            <div className="ml-4">
              <p className="font-bold">{nombre}</p>
              <p className="text-xs">
                {cancion} :: {artista}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
