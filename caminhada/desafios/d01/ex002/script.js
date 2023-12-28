function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formulario = document.getElementById('txtano')
    var resultado = document.getElementById('res')

    if(formulario.value.length === 0 || Number(formulario.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(formulario.value)
        var genero = ''
        var img =document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade <= 10){
                img.setAttribute('src', 'img/son.jpg')
                
            }else if (idade < 21){
                img.setAttribute('src', 'img/young-m.jpg')

            }else if (idade < 50){
                img.setAttribute('src', 'img/adult-m1.jpg')
            }else{
                img.setAttribute('src','img/old-m.jpg')
            }

        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade <= 10){
               img.setAttribute('src', 'img/daughter1.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'img/young-f.jpg')
            }else if (idade < 50){
               img.setAttribute('src', 'img/adult-f1.jpg')     
            }else{
                img.setAttribute('src', 'img/old-m.jpg')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }

}