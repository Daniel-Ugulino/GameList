<template>
  <div class="home">
    <form class="form" @submit.prevent="addGame">
      <label for="name">Nome do Jogo:</label>
      <input type="text" id="name" name="name" v-model="form.name">
      <label for="description">Descrição do Jogo:</label>

      <input type="text" id="description" name="description" v-model="form.description">
      <label for="plataform">Plataformas</label>

      <input type="text" id="plataform" name="plataform" v-model="form.plataform">

      <div> <label for="completed">Completo:</label><input name="completed" type="checkbox" id="completed" v-model="form.completed">
      </div>


      <label for="time_played">Tempo Jogado:</label><input name="time_played" type="text" id="time_played" v-model="form.time_played">
      <label for="category">Categoria</label>
      <select name="category" id="category" v-model="form.category">
        <option value="RPG">RPG</option>
        <option value="Corrida">Corrida</option>
        <option value="Esporte">Esporte</option>
        <option value="Luta">Luta</option>
        <option value="Simulação">Simulação</option>
        <option value="Estratégia">Estratégia</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'game_form',
  data() {
    return {
      form: {
        name: '',
        description: '',
        plataform: '',
        completed: false,
        time_played: '',
        category: ''
      }
    }
  },
  methods: {
    addGame() {
      var data = {
        name: this.form.name,
        description: this.form.description,
        plataform: this.form.plataform,
        completed: this.form.completed,
        time_played: this.form.time_played,
        category: this.form.category,
      };
      console.log(data)
    }
  }
}
</script>

<style>
.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #b7e4c7;
  width: 600px;
  height: 650px;
  border-radius: 15px;
}

.form input[type=text],
.form select {
  justify-content: center;
  width: 300px;
  border-style: hidden;
  border-bottom: 3px solid #000000;
  background-color: transparent;
  height: 30px;
  font-size: 1rem;
  text-align: center;
}

[type=checkbox] {
  width: 2rem;
  height: 2rem;
  color: rgb(8, 4, 4);
  -webkit-appearance: none;
  background: none;
  border: 2px solid rgb(12, 12, 12);
  border-radius: 10%;
  background-color: #FFFFFF;
  transition: background 300ms;
  cursor: pointer;
}

[type=checkbox]:checked {
  background-color: currentcolor;
}

label {
  font-weight: bold;
  text-decoration: underline;
  color: #000;
}

.form>div {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.form>button {
  width: 300px;
  height: 50px;
  background-color: transparent;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: 0.5s;
}

button:hover {
  cursor: pointer;
  background-color: white;

}
</style>
