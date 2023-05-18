setInterval(() => {
    $("#div-1").toggleClass("alerta")
    // adciona ou remove uma classe
}, 1500)


// O método removeClass() remove uma classe CSS
$("#btnPrimavera").click(() => {
    $("#div-1").removeClass("verao")
    $("#div-1").removeClass("outono")
    $("#div-1").removeClass("inverno")
    $("#div-1").addClass("primavera")
})

// O método addClass() adiciona uma classe CSS
$("#btnVerao").click(() => {
    $("#div-1").removeClass("primavera")
    $("#div-1").removeClass("outono")
    $("#div-1").removeClass("inverno")
    $("#div-1").addClass("verao")
})

$("#btnOutono").click(() => {
    $("#div-1").removeClass("verao")
    $("#div-1").removeClass("primavera")
    $("#div-1").removeClass("inverno")
    $("#div-1").addClass("outono")
})

$("#btnInverno").click(() => {
    $("#div-1").removeClass("verao")
    $("#div-1").removeClass("outono")
    $("#div-1").removeClass("primavera")
    $("#div-1").addClass("inverno")
})

