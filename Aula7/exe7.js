console.log('\nTabuada do 2 ao 9:');
for (let n = 2; n <= 9; n++) {
    let linha = '';
    for (let x = 1; x <= 10; x++) {
        linha += `${n} x ${x} = ${n * x}  `;
    }
    console.log(linha);
}

console.log('\n---------------------Fim--------------');
