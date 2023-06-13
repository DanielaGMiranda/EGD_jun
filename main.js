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

function invite(){
    location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeA5IHKZgAA5sz6qs4RjHVMy3z5VKRGY5FVvcD1qEwLMwRVZA/viewform"
}
