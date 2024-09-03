<template>
  <div id="noticia-estrutura">
    <div class="noticia-container">
      <h1>
        Uma Viagem Científica pelo Cosmos: Lua, Sol, Terra e a Nebulosa
        Catariana
      </h1>

      <p class="noticia-introducao">
        O universo é um imenso laboratório natural, onde forças físicas,
        químicas e cósmicas interagem em uma escala inimaginável. Nesta notícia,
        exploraremos o Sol, a Terra, a Lua e a Nebulosa Catariana, analisando
        suas características e o papel fundamental que desempenham no cosmos.
      </p>

      <div class="noticia-conteudo">
        <h2>A Lua: Um Testemunho da História Geológica</h2>
        <p>
          A Lua, o único satélite natural da Terra, é um corpo celeste cuja
          superfície está marcada por crateras, mares de basalto e montanhas.
          Formada há cerca de 4,5 bilhões de anos, acredita-se que sua origem
          esteja relacionada a uma colisão catastrófica entre a Terra e um corpo
          do tamanho de Marte, chamado Theia. Essa hipótese, conhecida como
          Hipótese do Grande Impacto, explica não apenas a composição da Lua,
          que é semelhante à da crosta terrestre, mas também a inclinação axial
          da Terra.
        </p>
        <!-- <div class="image-container"> -->
        <!-- <div class="ph-item">
            <div class="ph-picture"></div>
            <div class="ph-row">
              <div class="ph-col-12 big"></div>
            </div>
          </div> -->
        <img
          src="../assets/lua.jpeg"
          alt="Imagem da Lua"
          class="imagem"
          data-src="../assets/lua.jpg"
        />
        <!-- </div> -->
        <p>
          A Lua apresenta um movimento síncrono, o que significa que sempre
          mostra a mesma face para a Terra. Este fenômeno é resultado de forças
          de maré que ao longo do tempo desaceleraram a rotação lunar. Além
          disso, a Lua exerce uma força gravitacional que causa as marés nos
          oceanos da Terra. O fato de a Lua estar se afastando gradualmente de
          nosso planeta, a uma taxa de aproximadamente 3,8 centímetros por ano,
          terá um impacto significativo no futuro da Terra.
        </p>

        <h2>O Sol: A Fornalha Nuclear do Sistema Solar</h2>
        <p>
          O Sol é uma estrela de tipo espectral G2V, e sua energia é gerada
          através da fusão nuclear que ocorre em seu núcleo, onde hidrogênio é
          convertido em hélio. Este processo libera uma quantidade imensa de
          energia na forma de radiação eletromagnética, que viaja através do
          espaço e atinge a Terra como luz e calor. Essa energia é fundamental
          para sustentar a vida em nosso planeta, alimentando a fotossíntese nas
          plantas e regulando o clima.
        </p>
        <img
          src="../assets/sol.jpeg"
          alt="Imagem do Sol"
          class="imagem-in-texto"
        />
        <p>
          O Sol passa por ciclos de atividade de aproximadamente 11 anos,
          durante os quais a quantidade de manchas solares, erupções e ejeções
          de massa coronal varia. Essas erupções podem afetar a Terra, causando
          tempestades geomagnéticas que podem interferir nas comunicações e
          sistemas elétricos. O estudo da heliosfera, a bolha de partículas
          carregadas que o Sol emite, é crucial para entender a meteorologia
          espacial.
        </p>

        <h2>A Terra: O Planeta Azul e Seu Complexo Ecossistema</h2>
        <p>
          A Terra é um planeta geologicamente ativo, com placas tectônicas que
          se movem continuamente, reciclando a crosta terrestre e criando novas
          formações geológicas. Esses processos tectônicos são fundamentais para
          o ciclo do carbono, que regula a quantidade de CO2 na atmosfera e, por
          conseguinte, a temperatura global. Além disso, a Terra abriga uma
          biosfera complexa, onde os ciclos biogeoquímicos, como o ciclo do
          nitrogênio e do oxigênio, permitem a existência de uma vasta gama de
          formas de vida.
        </p>
        <img
          src="../assets/terra.jpeg"
          alt="Imagem da Terra"
          class="imagem-in-texto"
        />
        <p>
          A atmosfera terrestre, composta principalmente de nitrogênio (78%) e
          oxigênio (21%), desempenha um papel essencial na proteção da vida na
          Terra, filtrando a radiação ultravioleta do Sol e regulando o clima. A
          presença de gases de efeito estufa mantém a Terra aquecida o
          suficiente para sustentar a vida, mas o aumento da concentração de CO2
          está causando mudanças climáticas.
        </p>

        <h2>Nebulosa Carina: O Berçário Estelar</h2>
        <p>
          A Nebulosa Carina, uma das regiões de formação estelar mais
          impressionantes, é composta por gás e poeira, principalmente
          hidrogênio. Dentro dessas nuvens, regiões de alta densidade colapsam
          sob sua própria gravidade, formando novas estrelas. A radiação emitida
          por essas estrelas jovens faz com que o gás ao redor brilhe, criando
          formas e cores vibrantes.
        </p>
        <img
          src="../assets/carina_nebula.jpeg"
          alt="Imagem da Nebulosa Carina"
          class="imagem-in-texto"
        />
        <p>
          Estudar nebulosas como a Carina é essencial para a astrofísica, pois
          elas são berçários de novas estrelas e sistemas planetários. A análise
          espectroscópica da luz dessas nebulosas permite determinar sua
          composição química e entender melhor os processos de formação estelar.
          Além disso, nebulosas são remanescentes de explosões estelares, como
          supernovas, que enriquecem o meio interestelar com elementos pesados.
        </p>
        <img
          src="../assets/espaco.jpeg"
          alt="Imagem do Espaço"
          class="imagem-in-texto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EstruturaNoticia",
};

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".imagem");

  images.forEach((img) => {
    const placeholder = img.previousElementSibling;

    img.addEventListener("complete", function () {
      console.log("Imagem carregada!");
      placeholder.style.display = "none"; // Oculta o placeholder
      img.classList.add("loaded"); // Exibe a imagem real
    });

    img.src = img.getAttribute("data-src"); // Inicia o carregamento da imagem
  });
});
</script>

<style>
#noticia-estrutura {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.noticia-container {
  max-width: 60%;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.noticia-introducao {
  margin-bottom: 20px;
  line-height: 1.6;
  text-align: justify;
}

.noticia-conteudo {
  margin-bottom: 20px;
}

.imagem-in-texto {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 20px 0;
}

.noticia-conteudo h2 {
  font-size: 1.5em;
  margin-top: 20px;
}

.noticia-conteudo p {
  margin-bottom: 20px;
  line-height: 1.6;
}

h1 {
  font-size: 2em;
  margin-bottom: 10px;
  text-align: center;
}

.image-container {
  position: relative;
  width: 100%;
  height: auto;
}

.ph-item {
  position: relative;
  height: 200px; /* Ajuste a altura conforme necessário */
}

.ph-picture {
  width: 100%;
  height: 100%;
  background: #eee; /* Cor de fundo enquanto carrega */
}

.imagem {
  display: none; /* Oculta a imagem até que ela esteja carregada */
}

.image-container img.loaded {
  display: block;
}
</style>
