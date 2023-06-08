import React from 'react'

export default function Playlists(nombreUsuario) {

    //Esto es el nombre de usuario que pasará al iniciar sesión con la cuenta el dueño
    //Importante --> se le puede dar like a la playlist y las playlist tendrán una imagen   
    nombreUsuario = "Juan";
  return (
    <div className='playlist'>

    <h1 className='font-bold text-2xl text-white mt-4 pl-7'>Bienvenido de nuevo {nombreUsuario}</h1>
        
        
        
        
    </div>
  )
}

