"use client"

import { useEffect } from "react";
import { io } from "socket.io-client";


export default function Home() {

  const socket = io('http://localhost:5000');



  const fazerPedido = () => {

    const pedido = {
      item: "Harumaki de carne",
      quantidade: 3,
      preço: 5.5
    }

    socket.emit('novo-pedido', pedido);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button className="bg-white text-black p-4 rounded-lg cursor-pointer" onClick={fazerPedido}>Fazer Pedido</button>
    </div>
  );
}
