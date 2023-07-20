$(".botao-fechado").click(dropdownButton)
$(".botao-amarelo").click(textoAmarelo);
$(".botao-vermelho").click(textoVermelho);
$(".botao-cinza").click(textoCinza);
$(".accordion-botao-fechado").click(abreAccordion)
var botaoAmarelo = $(".botao-amarelo");
var botaoVermelho = $(".botao-vermelho");
var botaoCinza = $(".botao-cinza");
var circuloAmarelo = $(".circulo-opcao-amarela")
var circuloVermelho = $(".circulo-opcao-vermelho")
var circuloCinza = $(".circulo-opcao-cinza")

function dropdownButton(event){
    event.preventDefault();
    var caixaAberta = $(this).parent().parent().find(".caixa-aberta");
    caixaAberta.stop().slideToggle(600);
    var botaoDropdown = $(this);
    botaoDropdown.toggleClass("botao-aberto");
}



function textoAmarelo(event) {
    event.preventDefault();
    circuloAmarelo.css('display', 'flex');
    circuloVermelho.css('display', 'none');
    circuloCinza.css('display', 'none');
    botaoAmarelo.addClass("circulo-botao-aberto");
    botaoVermelho.removeClass("circulo-botao-aberto");
    botaoCinza.removeClass("circulo-botao-aberto");
}

function textoVermelho(event) {
    event.preventDefault();
    circuloAmarelo.css('display', 'none');
    circuloVermelho.css('display', 'flex');
    circuloCinza.css('display', 'none');
    botaoVermelho.addClass("circulo-botao-aberto");
    botaoAmarelo.removeClass("circulo-botao-aberto");
    botaoCinza.removeClass("circulo-botao-aberto");
}

function textoCinza(event) {
    event.preventDefault();
    circuloAmarelo.css('display', 'none');
    circuloVermelho.css('display', 'none');
    circuloCinza.css('display', 'flex');
    botaoCinza.addClass("circulo-botao-aberto");
    botaoAmarelo.removeClass("circulo-botao-aberto");
    botaoVermelho.removeClass("circulo-botao-aberto");
}


function abreAccordion(event) {
    event.preventDefault();
    var caixaTexto = $(this).parent().parent().find(".texto-aberto");
    var caixaTextoVizinhos = $(this).parent().parent().siblings().find(".texto-aberto");
    var tituloVizinhos = $(this).parent().parent().siblings().find(".accordion-titulo-fechado");
    var botaoVizinhos = $(this).parent().parent().siblings().find(".accordion-botao-fechado");
    caixaTexto.slideToggle(600);
    $(this).toggleClass("accordion-botao-aberto");
    $(this).parent().toggleClass("accordion-titulo-aberto");
    caixaTextoVizinhos.hide();
    tituloVizinhos.removeClass("accordion-titulo-aberto");
    botaoVizinhos.removeClass("accordion-botao-aberto");
}