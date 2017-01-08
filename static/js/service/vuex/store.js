/**
 * Created by yiding on 2017/1/6.
 */

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: 'a', done: true },
            { id: 2, text: 'b', done: false },
            { id: 3, text: 'c', done: false },
            { id: 4, text: 'd', done: true },
            { id: 5, text: 'e', done: true }
        ]
    },
    mutations: {
        increment (state) {
            console.log('hello');
            console.log('state', Vuex.mapState);
            state.count++
        }
    },
    getters: {
        doneTodos: function(state) {
            return state.todos.filter(todo => todo.done)
        }
    }
})