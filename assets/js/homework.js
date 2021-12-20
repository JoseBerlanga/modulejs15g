/**
 *
 * Pedir al usuario el dia de la semana
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

var weekDay = prompt('Introduce el dia de la semana')
weekDay = weekDay.toLowerCase();

switch (weekDay){
    case 'lunes': console.log(`${weekDay} es dia 1`);
        break;
    case 'martes': console.log(`${weekDay} es dia 2`);
        break;
    case 'miercoles': console.log(`${weekDay} es dia 3`);
        break;
    case 'jueves': console.log(`${weekDay} es dia 4`);
        break;
    case 'viernes': console.log(`${weekDay} es dia 5`);
        break;
    case 'sabado': console.log(`${weekDay} es dia 6`);
        break;
    case 'domingo': console.log(`${weekDay} es dia 7`);
        break;
    default: console.log('No valido');
        break;
}