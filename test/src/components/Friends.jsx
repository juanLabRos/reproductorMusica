import React from "react";
import "../Friends.css";

/* Esto es una función para poder ver a mis amigos. Cada amigo tiene:
 * Foto perfil
 * Nombre
 * Cancion que está escuchando
 * Icono de conectado o desconectado
 * Todos estos datos se deben de guardar dentro de cards
 */
export default function Friends() {
  const nombre = "Pepe";
  const cancion = "Who Loves The Sun";
  const artista = "The Velvet Underground";
  const estado = ":)";

  return (
    <>
      <div className="contenedor">
        <h1 className="ml-5 mb-3 text-3xl font-bold text-[#00df9a] mt-4">
          Amigos
        </h1>
        <ul className="p-4 flex">
          <card className="card-container">
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
          </card>
        </ul>
        <ul className="p-4 flex">
          <card className="card-container">
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
          </card>
        </ul>
        <ul className="p-4 flex">
          <card className="card-container">
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
          </card>
        </ul>
      </div>
    </>
  );
}
