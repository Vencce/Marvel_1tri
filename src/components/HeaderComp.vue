<template>
  <header>
    <div>
      <RouterLink to="/">
        <img class="Header-Tit" src="@/assets/img/Marvel_logo.png" alt="">
      </RouterLink>
    </div>

    <div class="Span-sle">
      <span class="input-pia">Personagens</span>
      <span class="input-pia">|</span>
      <span class="input-pia">Filmes</span>
      <span class="input-pia">|</span>
      <span class="input-pia">Series</span>
      <span class="input-pia">|</span>
      <span class="input-pia">Jogos</span>
      <span class="input-pia">|</span>
      <span class="input-pia">Comics</span>
    </div>

    <div class="Header-Inp">
      <input placeholder="Buscar..." type="text" />
      <button type="submit" class="Header-Search-Btn">
        <img src="@/assets/img/Lupa.png" />
      </button>  
    </div>
  </header>
</template>

<style>

.input-pia{
  margin-left: 15px;
}

.Span-sle {
  padding-left: 205px;
  align-items: center;
}


/*--------------------------------------------  ---------------------------------------- */
header {
  background-color: black;
  height: 12%;
  font-size: 1.3rem;
  display: flex;
  color:white;
  align-items: center;
  font-family: "EB Garamond";
}

.Header-Tit{
  font-family: 'Bebas Neue', cursive;
  margin-left: 30px;
  margin-top: 5px;
  margin-bottom: 0px;
  width: 150px;
  height: 50px;
}

.Header-Inp {
  margin-left: 10%; 
}

.Header-Inp input{
  height: 30px;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  width: 300px;
  padding-left: 15px;
  border-radius: 14px;
  border-style: none;
  outline: none;
  border: none;
}

.Header-Search-Btn {
  background: transparent;
  border: none;
  outline: none;
  margin-left: -35px;
}

.Header-Search-Btn:focus {
  outline: 0;
}

.Header-Search-Btn img {
  width: 20px;
  height: 20px;
  object-fit: cover;
}

.Header-Inp ::placeholder{
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  padding-top: 3.5px;
  font-size: 15px;
}
</style>
