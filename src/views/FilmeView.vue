<template>
    <div class="lds">
        <div class="l-esq">
            <img class="img-esq" src="@/assets/img_filme/imgthoramor.jpg" alt="">
            <p>
                “Thor: Amor e Trovão”, da Marvel Studios, encontra o Deus do Trovão numa jornada diferente de 
                tudo o que já enfrentou – a procura pela paz interior. Mas a reforma de Thor é interrompida por 
                um assassino galáctico conhecido como Gorr, o Carniceiro dos Deuses, que procura a extinção dos deuses. 
                Para combater a ameaça, Thor pede a ajuda da Rei Valkiria, de Korg e da ex-namorada Jane Foster, que – para
                surpresa de Thor – empunha inexplicavelmente o seu martelo mágico, Mjolnir, e se intitula a Poderosa Thor. 
                Juntos, eles embarcam numa angustiante aventura cósmica para descobrir o mistério da vingança do Carniceiro 
                dos Deuses e detê-lo antes que seja tarde demais.
            </p>
        </div>
        <div class="l-dir">
            <div class="img-dir">
                <div class="dentro-img"></div>
                <div class="texto">Nome do Filme/Serie</div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
        </div>
    </div>
</template>

<style>

.lds{
    display: flex;
}
/*--------------------------------------------------*/
.img-esq {
  margin-top: 20px;
  background-color: rgb(148, 71, 71);
  height: 475px;
  width: 800px;
  margin-left: 30px;
}

p{
    margin-left: 30px;
    margin-right: 10px;
}
/*-----------------------------------------------------*/
.img-dir {
  margin-top: 20px;
  background-color: rgb(148, 71, 71);
  height: 145px;
  width: 370px;
  margin-left: 70px;
  margin-right: 40px;
  border-radius: 10px;
}

/*-----------------------------------------------------*/

.dentro-img{
  background-color: rgb(56, 24, 24);
  height: 115px;
  width: 200px;
  justify-content: center;
  margin-top: 15px;
  position: absolute;
  margin-left: 15px;
}

.texto{
    margin-left: 225px;
    position: absolute;
    margin-top: 15px;
}

</style>