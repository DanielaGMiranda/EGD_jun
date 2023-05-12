let codigo = 736120170;

function code(){
    respuesta =document.getElementById("answer").value;
    console.log(respuesta);
    document.getElementById("answer").value = "";
    if(codigo==respuesta){
        document.getElementById("verifica").innerHTML = "IA DESBLOQUEADA"
        location.href = "win.html"
    } else {
        document.getElementById("verifica").innerHTML = "Inténtalo nuevamente"
        document.getElementById("verifica").style.color = "red";
    }
}