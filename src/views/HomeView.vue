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
            <th>Links</th>
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
.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main>h1 {
  margin: 20px;
}

.table {
  width: 1700px;
  word-wrap: break-word;
  table-layout: fixed;
}

.table th {
  background-color: #b7e4c7;
  color: #1d1d1d;
  padding: 10px;
  text-decoration: underline;
}

.table td {
  text-align: center;
  width: 150px;
  background-color: #d1d1d1;
  color: #252525;
  padding: 20px;
}

.a {
  color: #1d1d1d;
}

.a:hover {
  font-weight: bold;
}
</style>