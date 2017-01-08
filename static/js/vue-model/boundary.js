/**
 * Created by yiding on 2017/1/5.
 */

Vue.component('my-button', {
    props: ['son_sum'],
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    watch: {
        counter: function(a,b){
            // this.$store.commit('increment');
            this.$emit('addone');

        },
        sum: {
            handler: function(){
                console.log('Changed');
            },
            deep: true
        },
    }
});
Vue.component('my-component', {
    props: ['sum'],
    template: '<div>' +
    '<h1>son</h1>' +
    '<slot></slot>' +
    '</div>',

    watch: {
        sum: function(){
            console.log('sum changed');
        }
    },
    computed: {
        new_sum : function(){
            return this.sum;
        }
    }

});
Vue.component('anchored-heading', {
    render: function (createElement) {
        return createElement(
            'h' + this.level,   // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});
Vue.directive('demo', function (el, binding) {
    console.log(binding.value.color); // => "white"
    console.log(binding.value.text);  // => "hello!"
    el.style.backgroundColor = binding.value
});
new Vue({
    el: '#boundary',
    data: {
        sum: 0,
        currentView: 'home',
        selects: ['home', 'post', 'get'],
        level: 1,
        message: 'test message',
        sumObj: {
            sum: 0
        }
    },

    methods:{
        increaseOne: function(){
            this.sum += 1;
            this.level += 1;
        },
        clc: function(){
            this.sum += 1
        },
        clc2: function(){
            this.sumObj.sum += 1;
            console.log('this', this.sumObj.sum)
        },
        changeComponent: function(){
            this.currentView = this.selects[Math.floor(Math.random() * 10)  % 3]
        }
    },
    created: function(){
        console.log( window.location.pathname)
    },
    watch: {
        sum: function(){
            console.log('monitored in father');
        }
    },
    components:{
        home: Vue.extend({ template:'<p> home </p>'}),
        post: Vue.extend({ template: '<p> post</p>'}),
        get: Vue.extend({template: '<p> get</p>'})
    },
    store,
    // computed: Vuex.mapState({
    //     // 箭头函数可使代码更简练
    //     count: function(state){
    //         return state.count;
    //     },
    //     // 传字符串参数 'count' 等同于 `state => state.count`
    //     countAlias: 'count',
    //
    //     // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    //     countPlusLocalState: function(state) {
    //         return state.count + 3
    //     },
    //     allVd: function(){
    //         return this.sum;
    //     },
    //
    // }),
    computed: {
        doneTodosCount () {
            return this.$store.getters.doneTodosCount
        }
    },
    mounted: function(){
        console.log('mounted', this.doneTodosCount );
    }
});
