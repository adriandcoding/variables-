/*Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.*/



const Rock: string = "🎸 Rock";
const Pop_rock: string = "🎵 Pop Rock";
const Hard_rock: string = "🤘 Hard Rock";
const Clasica: string = "🎼 Clásica";

const Estilo_titulo = "font-size:16px;font-weight:bold;background-color:green";


interface Group {
  name_singer_compositor:string;
  year: number;
  active: boolean;
  genre: string;
}

const Beatles: Group = {
  name_singer_compositor: "The Beatles",
  year: 1960,
  active: true,
  genre: Pop_rock,
};

const Queen: Group = {
  name_singer_compositor: "Queen",
  year: 1970,
  active: false,
  genre: Rock,
};

const Ac_dc: Group = {
  name_singer_compositor: "AC DC",
  year: 1973,
  active: true,
  genre: Hard_rock,
};

const Beethoven: Group = {
  name_singer_compositor: "Ludwig van Beethoven",
  year: 1770,
  active: false,
  genre: Clasica,
};

const rolling_stones: Group = {
  name_singer_compositor: "The Rolling Stones",
  year: 1962,
  active: true,
  genre: Rock,
};

console.log(`%c${Beatles.name_singer_compositor}`, Estilo_titulo, Beatles);
console.log(`%c${Queen.name_singer_compositor}`, Estilo_titulo, Queen);
console.log(`%c${Ac_dc.name_singer_compositor}`, Estilo_titulo, Ac_dc);
console.log(`%c${Beethoven.name_singer_compositor}`, Estilo_titulo, Beethoven);
console.log(`%c${rolling_stones.name_singer_compositor}`, Estilo_titulo, rolling_stones);



