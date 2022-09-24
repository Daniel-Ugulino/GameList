<template>
    <tbody>
        <tr v-for="(game, index) in list" :key="index">
            <td>{{game.name}}</td>
            <td>{{game.description}}</td>
            <td>{{game.plataforms}}</td>
            <td v-if="game.completed == true" style="color:#8B0000;">Completo</td>
            <td v-else style="color:#0000CD	;">Incompleto</td>
            <td>{{game.time_played}} Horas</td>
            <td>{{game.category}}</td>
            <td>
                <router-link to="/update" class="a" @onclick="addgame(index)">Update</router-link> |
                <a class="a" @onclick="console.log(game.name)">Delete</a>
            </td>
        </tr>
    </tbody>
    {{test}}
</template>

<script>
// @ is an alias to /src

export default {
    name: 'game_form',
    data() {
        return {
            list: this.$store.state.list,
            test:"aa"
        }
    },
    computed: {
        getGame() {
            return this.list
        }
    },
    methods: {
        addgame() {
            this.test = "a"
        }
    }
}
</script>
