// viajes.js

const viajes = [];

export const registrarDestino = (destino, fecha, transporte, personas = 1) => {
  viajes.push({ destino, fecha, transporte, personas });
};

export const calcularCosto = (destino, transporte, personas = 1) => {
  const precios = {
    avion: 300,
    tren: 150,
    autobus: 100,
    coche: 80
  };

  const base = precios[transporte] || 0;
  const descuento = personas >= 4 ? 0.1 : 0;

  return base * personas * (1 - descuento);
};

export const obtenerViajes = () => viajes;
