/**
 * Created by yiding on 2017/1/1.
 */
var dataService = new Vue({
    data:{
        graphData: null
    },
    methods:{
        getGraphDataFromBackend: function(){
            this.$http.get('/getGraph', []).then(function(response){
                this.graphData = JSON.parse(response.data);
                pipService.emitGraphDataReady()
            }, function(response){
                console.log('error raised');
            });
        },
        getGraphData: function(){
            if(this.graphData != null){
                return this.graphData;
            }else{
                return null;
            }
        }
    },
    created: function(){
        this.getGraphDataFromBackend();
    },
    watch:{
        graphData: {
            handler: function(){
                console.log('Graph data has been updated');
            },
            deep: true
        }
    }
})