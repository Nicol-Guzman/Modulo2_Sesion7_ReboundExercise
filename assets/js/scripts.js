let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));

if (num1 > num2) {
    alert(`${num1} es mayor que ${num2}`);    
}else if (num1 < num2) {
    alert(`${num2} es mayor que ${num1}`);
}else if (num1 = num2) {
    alert(`Los números son iguales`);
}else{
    alert(`Ha ocurrido un error!`);
}

