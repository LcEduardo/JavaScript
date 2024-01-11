var p1 = window.document.getElementsByTagName('p')[1]
var p2 = window.document.getElementsByTagName('p')[0]
window.document.write(p1.innerHTML)
document.write('<br>')
document.write(p2.innerHTML)
document.write('<br>')
var d = window.document.getElementById("i")
d.style.background = "green"
d.style.color = "white"
d.innerText = "Estou aguardando..."
var c = window.document.getElementsByClassName("sub")[0]
c.style.color = "purple"
