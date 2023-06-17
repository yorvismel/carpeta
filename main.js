let totalDepositos = 0;

document.querySelector('#depositos').addEventListener('click', function() {
    const deposito = parseFloat(prompt('Ingrese el monto a depositar'));

    if (isNaN(deposito)) {
        alert('Ingrese un monto válido');
        return;
    }

    totalDepositos += deposito;
    alert(`El cliente ha depositado $${deposito}`);
    console.log(`Total de depósitos: $${totalDepositos}`);
});

let totalSaldo = 0;

document.querySelector('#saldo').addEventListener('click', function() {
    totalSaldo = totalDepositos;
    alert(`Su nuevo saldo es de $${totalSaldo}`);
});

document.querySelector('#retiro').addEventListener('click', function() {
    let retirada = parseFloat(prompt("Ingresa la cantidad que quieres retirar"));
    
    if (retirada <= totalSaldo) {
        totalSaldo -= retirada;
        totalDepositos -= retirada;
        alert(`El retiro de $${retirada} ha sido exitoso. Su nuevo saldo es $${totalSaldo}`);
    } else {
        alert(`Su saldo es de $${totalSaldo} y su retiro es de $${retirada}, por lo tanto excede el monto disponible para retirar.`);
    }
});

