import { createStore } from 'vuex'

export default createStore({
    state: {
        list: [{
                name: "Mario Kart",
                description: "Jogo de corrida do Mario",
                plataforms: "Nintendo Switch",
                completed: true,
                time_played: 45,
                category: "Corrida"
            }, {
                name: "Pokemon Shield",
                description: "Jogo de Pokemon da 8 geração",
                plataforms: "Nintendo Switch",
                completed: true,
                time_played: 75,
                category: "RPG"
            }, {
                name: "Skyrim",
                description: "RPG de Ação Medieval Mundo aberto",
                plataforms: "Nintendo | Switch | PC | PS5 | Xbox",
                completed: false,
                time_played: 110,
                category: "RPG"
            }, {
                name: "Xenoblade 2",
                description: "RPG MMO de turnos de fantasia",
                plataforms: "Nintendo Switch",
                completed: true,
                time_played: 200,
                category: "RPG"
            }, {
                name: "F1",
                description: "Simulador de Corrida da Formula 1",
                plataforms: "PC | PS5 | Xbox",
                completed: false,
                time_played: 15,
                category: "Simulação"
            },
            {
                name: "FIFA",
                description: "Simulador de Futebol",
                plataforms: "PC | PS5 | Xbox",
                completed: false,
                time_played: 80,
                category: "Luta"
            },
            {
                name: "Mortal Kombat 11",
                description: "Jogo de luta",
                plataforms: "Nintendo | Switch | PC | PS5 | Xbox",
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
        ]
    },
    getters: {},
    mutations: {
        addGame() {},
        deleteGame() {

        },
        updateGame(game) {
            console.log(game)
        }
    },
    actions: {},
    modules: {}
})