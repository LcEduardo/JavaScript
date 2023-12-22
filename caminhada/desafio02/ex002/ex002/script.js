function tabuada() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Erro')

    }else{
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${n} * ${i} = ${n*i} `
            tab.appendChild(item)
        }
    }
}