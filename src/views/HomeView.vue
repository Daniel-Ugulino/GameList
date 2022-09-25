<template>
  <main class="home">
    <div>
      <h1>Lista de Jogos</h1>
      <table class="table">
        <thead>
          <tr class="tr">
            <th>Nome do Jogo</th>
            <th>Descricao do Jogo</th>
            <th>Plataforma</th>
            <th>Completo</th>
            <th>Categoria</th>
            <th>Tempo Jogado</th>
            <th>Funções</th>
          </tr>
        </thead>
        <Game></Game>
      </table>
    </div>
  </main>
</template>

<script>
import Game from '@/components/game.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { Game }
}
</script>


<style>
@import url("../assets/css/table.css");
</style>