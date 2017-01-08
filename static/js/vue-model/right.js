/**
 * Created by yiding on 2017/1/1.
 */

var right_view = new Vue({
    el: '#right-view',
    delimiters:['{{', '}}'],
    data: {
        records: null,
        node_head: ['name', 'value'],
        nodes: [],
        edges: [],
        styleObject: {
            'background': '#bdbdbd',
            'background-opacity': 0.1,
            'max-height': (window.innerHeight - 100) + 'px',
            'overflow-y': 'scroll',
        }
    },
    methods:{
        sayHello: function(){
            console.log('Hello world!');
        }
    },
    computed:{

    },
    created: function(){
    },
    mounted: function(){
        var _this = this;
        pipService.onGraphDataReady(function(graph){
            var graphData = dataService.getGraphData();
            _this.nodes = graphData.nodes;
            _this.edges = graphData.edges;
        });
    }
});


Vue.component('node-element', {
    props: ['item'],
    template: '<tr v-on:click = "clc"> <td>{{item.name}}</td> <td>{{item.group}}</td></tr>',
    methods:{
        clc: function(){
            //How

        }
    }
});
