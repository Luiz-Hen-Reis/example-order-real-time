"use client"

import { useEffect, useState } from "react"
import io from 'socket.io-client';

type Pedido = {
  item: string,
  quantidade: number,
  preço: number
}

export default function Admin() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:5000');

    socket.on('novo-pedido-recebido', (pedido: Pedido) => {
        console.log(pedido);
        setPedidos(prevPedidos => [...prevPedidos, pedido]);
    });

    // Limpa o listener do socket quando o componente é desmontado
    return () => {
      socket.disconnect();
    }
  }, [])
  
    return (
    <div className="flex justify-center items-center h-screen">
      <div>Admin</div>
      {pedidos.map((pedido, index) => (
        <div key={index}>
          <p>Item: {pedido.item}</p>
          <p>Quantidade: {pedido.quantidade}</p>
          <p>Preço: {pedido.preço}</p>
        </div>
      ))}
    </div>
  )
}
