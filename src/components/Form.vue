<template>
  <div class="home">
    <form class="form" @submit.prevent="sendGame" ref="form">

      <label for="name">Nome do Jogo:</label>
      <input type="text" id="name" name="name" v-model="name">

      <label for="description">Descrição do Jogo:</label>

      <input type="text" id="description" name="description" v-model="description">
      <label for="plataform">Plataformas</label>

      <div id="checkbox">
        <label for="plataform">Switch</label>
        <input type="checkbox" name="plataforms" value="Switch " v-if="plataforms.includes('Switch')" checked>
        <input type="checkbox" name="plataforms" value="Switch " v-else>

        <label for="plataform">PC</label>
        <input type="checkbox" name="plataforms" value="PC " v-if="plataforms.includes('PC')" checked>
        <input type="checkbox" name="plataforms" value="PC " v-else>

        <label for="plataform">PS5</label>
        <input type="checkbox" name="plataforms" value="PS5 " v-if="plataforms.includes('PS5')" checked>
        <input type="checkbox" name="plataforms" value="PS5 " v-else>

        <label for="plataform">Xbox</label>
        <input type="checkbox" name="plataforms" value="Xbox " v-if="plataforms.includes('Xbox')" checked>
        <input type="checkbox" name="plataforms" value="Xbox " v-else>
      </div>

      <div> <label for="completed">Completo:</label>
        <input name="completed" type="checkbox" id="completed" v-model="completed">
      </div>

      <label for="time_played">Tempo Jogado:</label>
      <input name="time_played" type="number" id="time_played" v-model="time_played">

      <label for="category">Categoria</label>
      <select name="category" id="category" v-model="category">
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
import { useVuelidate } from '@vuelidate/core'
import { required, numeric } from '@vuelidate/validators'
import { mapActions } from "vuex";

export default {
  name: 'game_form',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      name: this.$route.params.id > -1 ? this.$store.state.list[this.$route.params.id].name : "",
      description: this.$route.params.id > -1 ? this.$store.state.list[this.$route.params.id].description : "",
      plataforms: this.$route.params.id > -1 ? this.$store.state.list[this.$route.params.id].plataforms : "",
      completed: this.$route.params.id > -1 ? this.$store.state.list[this.$route.params.id].completed : "",
      time_played: this.$route.params.id > -1 ? this.$store.state.list[this.$route.params.id].time_played : "",
      category: this.$route.params.id > -1 ? this.$store.state.list[this.$route.params.id].category : "",
    }
  },

  validations() {
    return {
      name: { required },
      description: { required },
      plataforms: { required },
      time_played: { required, numeric },
      category: { required },
    }
  },
  methods: {
    ...mapActions(["addGame", "updateGame"]),

    getCheckbox() {
      let boxes = document.getElementsByName("plataforms")
      let values = ""
      boxes.forEach(index => {
        if (index.checked) {
          values += index.value
        }
      })
      this.plataforms = values
    },

    resetColor() {
      const form = document.querySelector("form").children;
      const div = document.querySelector("#checkbox").children;
      for (var i = 0; i < form.length; i++) {
        form[i].style = "border-color:#000000;"
      }
      for (var j = 0; j < div.length; j++) {
        div[j].style = "border-color:#000000;"
      }
    },

    reset() {
      this.$refs.form.reset()
    },

    errorform() {
      this.v$.$errors.forEach(error => {
        const prop = document.getElementsByName(error.$property)
        prop[0].style = "border-color:#8B0000;"
        if (prop.length == 4) {
          prop[0].style = "border-color:#8B0000;"
          prop[1].style = "border-color:#8B0000;"
          prop[2].style = "border-color:#8B0000;"
          prop[3].style = "border-color:#8B0000;"
        }
      });
      alert("Formulario Incorreto ou Incompleto")
    },

    async sendGame() {
      this.getCheckbox()
      this.resetColor()
      const isFormCorrect = await this.v$.$validate()

      if (isFormCorrect) {
        if (this.$store.state.list.length >= 12) {
          alert("limite maximo de jogos atingidos, delete algum jogo da lista")
        }
        // Update
        else {
          if (this.$route.params.id > -1) {
            alert("Jogo Atualizado")
            this.$store.state.current_id = this.$route.params.id
            this.updateGame(this)
            window.location.href = "http://localhost:8080/?#/";
          }
        // Insert
          else {
            alert("Jogo Cadastrado")
            this.addGame(this)
            this.reset()
          }
        }

      }
      else {
        this.errorform()
      }
    }
  }
}
</script>

<style>
@import url("../assets/css/form.css");
</style>
