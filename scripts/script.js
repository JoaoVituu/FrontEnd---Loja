var cont = 0
var lista = []
lista[0] = `<div id="imgprincipal0">
<div class="fundo">
    <div class="textoprincipal">
        <h2>TEMPORADA 2</h2>
        <p>A nova temporada, Debandada ao<br>Satélite, traz à Cúpula dos Tombão<br>mais rounds, obstáculos, variações<br> de níveis e trajes</p>
        <p>Gratuito</p>
        <div class="botoes">
            <a  class="compra" href="#">Jogue de Graça</a>
            <a class="desejos" href="#"> <img height="30px" src="imagens/mais.png" alt=""> <p>Para a Lista de Desejos</p></a>
        </div>
    </div>
</div>
</div>`
lista[1] = `<div id="imgprincipal1">
<div class="fundo">
    <div class="textoprincipal">
        <h2>JÁ DISPONÍVEL</h2>
        <p>Levante-se, Maculado, e seja guiado pela graça<br>para portar o poder do Anel Prístino e se tornar<br>um Lorde Prístino nas Terras Intermédias.</p>
        <p>A partir de R$ 300,00</p>
        <div class="botoes">
            <a  class="compra" href="#">Compre Agora</a>
            <a class="desejos" href="#"> <img height="30px" src="imagens/mais.png" alt=""> <p>Para a Lista de Desejos</p></a>
        </div>
    </div>
</div>
</div>`
lista[2] = `<div id="imgprincipal2">
<div class="fundo">
    <div class="textoprincipal">
        <h2>JÁ DISPONÍVEL</h2>
        <p>A espera acabou! Entre agora mesmo<br>no Jogo de Todo Mundo, ainda mais<br>realista graças à HyperMotion2</p>
        <p>A partir de R$ 199,99</p>
        <div class="botoes">
            <a  class="compra" href="#">Compre Agora</a>
            <a class="desejos" href="#"> <img height="30px" src="imagens/mais.png" alt=""> <p>Para a Lista de Desejos</p></a>
        </div>
    </div>
</div>
</div>`
lista[3] = `<div id="imgprincipal3">
<div class="fundo">
    <div class="textoprincipal">
        <h2>JÁ DISPONÍVEL</h2>
        <p>Parte numa aventura com um irmão<br>e uma irmã e ajuda-os a explorar cenários<br>deslumbrante e a conhecer criaturas mágicas.</p>
        <p>A partir de R$ 60,00</p>
        <div class="botoes">
            <a  class="compra" href="#">Compre Agora</a>
            <a class="desejos" href="#"> <img height="30px" src="imagens/mais.png" alt=""> <p>Para a Lista de Desejos</p></a>
        </div>
    </div>
</div>
</div>`
lista[4] = `<div id="imgprincipal4">
<div class="fundo">
    <div class="textoprincipal">
        <h2>VERSÃO 3.1 JÁ DISPONÍVEL</h2>
        <p>A nova atualização leva os jogadores<br>para o enorme deserto de Sumeru com<br>Candace, Cyno e Nilou, e para as<br>celebrações de Weinlesefest em...</p>
        <p>Gratuito</p>
        <div class="botoes">
            <a  class="compra" href="#">Jogue de Graça</a>
            <a class="desejos" href="#"> <img height="30px" src="imagens/mais.png" alt=""> <p>Para a Lista de Desejos</p></a>
        </div>
    </div>
</div>
</div>`
var principal = document.getElementById('principal')
principal.innerHTML = `${lista[0]}`
function direita() {
    cont ++
    if (cont > 4) {
        cont = 0
        principal.innerHTML = `${lista[cont]}`
    } else {
        principal.innerHTML = `${lista[cont]}` 
    }
    console.log(cont)
}
function esquerda() {
    cont --
    if (cont < 0) {
        cont = 4
        principal.innerHTML = `${lista[cont]}`
    } else {
        principal.innerHTML = `${lista[cont]}` 
    }
    console.log(cont)
}
function menuclick(x) {
    x.classList.toggle('ativo')
}
function direitaprox() {
    document.getElementById('conteiner0').scrollBy(260, 0)
}
function esquerdaprox() {
    document.getElementById('conteiner0').scrollBy(-260, 0)
}