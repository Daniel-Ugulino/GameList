import { createStore } from 'vuex'

export default createStore({
    state: {
        list: [{
                name: "Mario Kart",
                description: "Jogo de corrida do Mario",
                plataforms: "Switch",
                completed: true,
                time_played: 45,
                category: "Corrida"
            }, {
                name: "Pokemon Shield",
                description: "Jogo de Pokemon da 8 geração",
                plataforms: "Switch",
                completed: true,
                time_played: 75,
                category: "RPG"
            }, {
                name: "Skyrim",
                description: "RPG de Ação Medieval Mundo aberto",
                plataforms: "Switch  PC  PS5  Xbox",
                completed: false,
                time_played: 110,
                category: "RPG"
            }, {
                name: "Xenoblade 2",
                description: "RPG MMO de turnos de fantasia",
                plataforms: "Switch",
                completed: true,
                time_played: 200,
                category: "RPG"
            }, {
                name: "F1",
                description: "Simulador de Corrida da Formula 1",
                plataforms: "PC  PS5  Xbox",
                completed: false,
                time_played: 15,
                category: "Simulação"
            },
            {
                name: "FIFA",
                description: "Simulador de Futebol",
                plataforms: "PC  PS5  Xbox",
                completed: false,
                time_played: 80,
                category: "Luta"
            },
            {
                name: "Mortal Kombat 11",
                description: "Jogo de luta",
                plataforms: "Switch  PC  PS5  Xbox",
                completed: true,
                time_played: 80,
                category: "Esportes"
            },
            {
                name: "League of Legends - LOL",
                description: "Jogo de estrategia de 5 players online",
                plataforms: "PC",
                completed: false,
                time_played: 50,
                category: "Estratégia"
            }
        ],
        current_id: ""
    },
    getters: {
        allGames: (state) => state.list,
        Game: (state) => state.list[state.current_id]
    },
    mutations: {
        add_Game(state, game) {
            state.list.push(game)
        },
        delete_Game(state, index) {
            state.list.splice(index, 1);
        },
        update_Game(state, game) {
            const id = state.current_id
            state.list[id].name = game.name
            state.list[id].description = game.description
            state.list[id].plataforms = game.plataforms
            state.list[id].time_played = game.time_played
            state.list[id].completed = game.completed
            state.list[id].category = game.category
        }
    },
    actions: {
        addGame({ commit }, game) {
            commit("add_Game", game);
        },
        deleteGame({ commit }, index) {
            commit("delete_Game", index);
        },
        updateGame({ commit }, game, id) {
            commit("update_Game", game, id)
        }
    },
    modules: {}
})