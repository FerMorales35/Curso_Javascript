let numero = 2;

switch (numero) {
  case 1:
    console.log(`${num} tiene el valor de 1`);
    break;
  case 2:
    console.log(`${num} tiene el valor de 2`);
    break;
  case 3:
    console.log(`${num} tiene el valor de 3`);
    break;
  default:
    console.log(`${num} tiene el valor de 4`);
}

switch (numero) {
  case 1:
  case 3:
  case 4:
    console.log(`${numero} es impar`);
  case 2:
  case 3:
  case 4:
    console.log(`${numero} es par`);
}
