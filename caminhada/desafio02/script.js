function cal(){
   var start = document.getElementById('txtnum') 
   var end = document.getElementById('txtfim')
   var step = document.getElementById('txtpas')
   var res = document.getElementById('res')

   if(start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
    window.alert('[ERRO] Faltam dados!')
   }else {
    res.innerHTML = 'Contando: '
    var i = Number(start.value)
    var f = Number(end.value)
    var p = Number(step.value)
    if (p <= 0){
      window.alert('Passo inválido! Considerando Passo 1')
      p = 1
    }

    if( i < f){
      for(var c = i; c <= f; c += p) {
         res.innerHTML += `${c} \u{1F449} `
      }
    }else{
      for(var c = i; c >= f; c -= p){
         res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
   }
}