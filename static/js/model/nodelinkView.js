/**
 * Created by yiding on 2017/1/1.
 */

var nodeLinkView = new Vue({
    el: '#nodelink',
    delimiters:['{{', '}}'],
    data: {
        linkDistance: 50,
        charge: 120,
        gravity: 0.1,
        graphData: null,
    },
    methods:{
        updateForce: function(msg){
            this.linkDistance = msg[0]['value'];
            this.charge = msg[1]['value'];
            this.gravity = msg[2]['value'];
            this.graphRenderHandler.setCharge(this.charge);
            this.graphRenderHandler.setGravity(this.gravity);
            this.graphRenderHandler.setLinkDistance(this.linkDistance);
            this.graphRenderHandler.updateForce();
        },

        getGraphData: function(graph){
            return dataService.getGraphData();
        },

        initDrawNodeLink: function(graph){
            var container_svg = d3.select(this.$el).select('section').append('svg').attr('width', '100%').attr('height', this.height);
            var graphRenderHandler = new NodeLink(container_svg[0][0], graph);
            graphRenderHandler.run();
            this.graphRenderHandler = graphRenderHandler;
        }
    },
    computed:{
        width: function(){
            return d3.select(this.$el).select('section')[0][0].clientWidth;
        },
        height: function(){
            var width = d3.select(this.$el).select('section')[0][0].clientWidth;
            var height = window.innerHeight - 100;
            return width < height? width: height ;
        }
    },
    mounted: function(){
        var _this = this;
        pipService.onChangeAttributes(function(msg){
            _this.updateForce(msg)
        });
        pipService.onGraphDataReady(function(graph){
            _this.graphData = dataService.getGraphData();
            _this.initDrawNodeLink(_this.graphData);
        })
    }
});
