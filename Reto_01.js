/*const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
// Como ves, el papel de regalo envuelve el string.
//Por arriba y por abajo, para no dejar ningún hueco,
//las esquinas también están cubiertas por el papel de regalo.

// Nota: El carácter \n representa un salto de línea.

// ¡Ojo! Asegúrate que pones el número correcto de * para
// envolver completamente el string. Pero no demasiados.
//Sólo los necesarios para cubrir el string.

// Ah, y no modifiques (mutes) el array original.

const gifts = ["cat", "game", "socks"];

const wrapping = (gifts) => {
  return gifts.map((gift) => {
    const horizontalLine = "*".repeat(gift.length + 2);
    return horizontalLine + "\n*" + gift + "*\n" + horizontalLine;
  });
};

const wrapped = wrapping(gifts);
console.log(wrapped);
console.log(gifts);
