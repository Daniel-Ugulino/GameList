<template>
    <tbody>
        <tr v-for="(game, index) in allGames" :key="index">
            <td>{{game.name}}</td>
            <td>{{game.description}}</td>
            <td>{{game.plataforms}}</td>
            <td v-if="game.completed == true" style="color:#0000CD;">Completo</td>
            <td v-else style="color:#8B0000;">Incompleto</td>
            <td>{{game.category}}</td>
            <td>{{game.time_played}} Horas</td>
            <td>
                <router-link v-bind:to="{name:'update', params:{id:index}}" >Update</router-link> |
                <label v-on:click="delete_Game(index)">Delete</label>
            </td>
        </tr>
    </tbody>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
    name: 'game_form',
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["allGames"])
    },
    methods: {
        ...mapActions(["deleteGame"]),
        delete_Game(index) {
            this.deleteGame(index)
        },
    }
}
</script>
