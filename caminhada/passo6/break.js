loopExterno: for (let i = 0; i < 3; i++) {
    console.log("Interação externa " + i)

    for (let j = 0; j < 3; j++){
        console.log(" Interação interna " + j)

        if (i=== 1 && j === 1) {
            console.log(" Condição atendida. Saindo dos loops.")
            break loopExterno;
        }
    }
}