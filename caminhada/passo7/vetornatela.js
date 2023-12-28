let valores = [1, 4, 7, 3, 9]
valores.sort()
for (let i = 0; i < valores.length; i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}
console.log('\nUsando for/in:\n')
for (let i in valores){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}