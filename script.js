function carregar (){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'agora são',hora
    if (hora>=0 && hora<12){
    //Bom dia!
    }
    else if(hora>=12 && hora < 18){
        //boa tarde
    }
    else {
        // boa noite
    }
    }
}
