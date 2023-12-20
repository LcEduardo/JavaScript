function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
   //var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = "img/day1.jpg"
        document.body.style.background = '#fdbc78'
    }else if(hora >= 12 && hora < 18){
        img.src = "img/afternoon1.jpg"
        document.body.style.background = '#b44901'
    }else {
        img.src = "img/night1.jpg"
        document.body.style.background = '#755883'
    }
}

