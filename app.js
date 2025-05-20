// app.js
import { registrarDestino, calcularCosto, obtenerViajes } from './viajes.js';

const form = document.getElementById('form-viaje');
const lista = document.getElementById('itinerario-lista');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const destino = document.getElementById('destino').value;
  const fecha = document.getElementById('fecha').value;
  const transporte = document.getElementById('transporte').value;
  const personas = parseInt(document.getElementById('personas').value);

  registrarDestino(destino, fecha, transporte, personas);
  actualizarItinerario();

  form.reset();
});

const actualizarItinerario = () => {
  lista.innerHTML = '';
  obtenerViajes().forEach(({ destino, fecha, transporte, personas }) => {
    const costo = calcularCosto(destino, transporte, personas);
    const item = document.createElement('li');
    item.textContent = `${destino} - ${fecha} - ${transporte} - ${personas} persona(s) - $${costo.toFixed(2)}`;
    lista.appendChild(item);
  });
};
