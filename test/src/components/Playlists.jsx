import React from "react";
import "../playlist.css";

export default function Playlists() {
  const nombreUsuario = "Juan";
  const nombrePlaylist = "Mix 1";

  return (
    <div className="playlist">
      <div className="left-container">
        <h1 className="font-bold text-2xl text-white mt-4 pl-7">
          Bienvenido de nuevo {nombreUsuario}
        </h1>
      </div>
      <div className="contenedorr mt-8 pl-5">
        <div className="fila">
          <div className="columna">
            <div className="card">
              {/* Contenido de la primera tarjeta */}
              <img
                className=""
                src="../img/perfil.jpg"
                alt="Imagen de la playlist"
              />
              <h1 className="font-bold text-2xl text-white">
                {nombrePlaylist}
              </h1>
            </div>
          </div>
          <div className="columna">
            <div className="card">
              {/* Contenido de la segunda tarjeta */}
              <img
                className=""
                src="../img/perfil.jpg"
                alt="Imagen de la playlist"
              />
              <h1 className="font-bold text-2xl text-white">
                {nombrePlaylist}
              </h1>
            </div>
          </div>
          <div className="columna">
            <div className="card">
              {/* Contenido de la tercera tarjeta */}
              <img
                className=""
                src="../img/perfil.jpg"
                alt="Imagen de la playlist"
              />
              <h1 className="font-bold text-2xl text-white">
                {nombrePlaylist}
              </h1>
            </div>
          </div>
        </div>
        <div className="fila">
          <div className="columna">
            <div className="card">
              {/* Contenido de la cuarta tarjeta */}
              <img
                className=""
                src="../img/perfil.jpg"
                alt="Imagen de la playlist"
              />
              <h1 className="font-bold text-2xl text-white">
                {nombrePlaylist}
              </h1>
            </div>
          </div>
          <div className="columna">
            <div className="card">
              {/* Contenido de la quinta tarjeta */}
              <img
                className=""
                src="../img/perfil.jpg"
                alt="Imagen de la playlist"
              />
              <h1 className="font-bold text-2xl text-white">
                {nombrePlaylist}
              </h1>
            </div>
          </div>
          <div className="columna">
            <div className="card">
              {/* Contenido de la sexta tarjeta */}
              <img
                className=""
                src="../img/perfil.jpg"
                alt="Imagen de la playlist"
              />
              <h1 className="font-bold text-2xl text-white">
                {nombrePlaylist}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
