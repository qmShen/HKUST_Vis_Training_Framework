/**
 * Created by yiding on 2016/12/31.
 */
var pipService = new Vue({
    data:{
        GREETING: 'greeting',
        GRAPHREADY: 'graphready'
    },
    methods:{
        emitChangeAttributes: function(msg){
            this.$emit(this.GREETING, msg)
        },
        onChangeAttributes: function(callback){
            this.$on(this.GREETING,function(msg){
                callback(msg);
            })
        },

        emitGraphDataReady: function(msg){
            this.$emit(this.GRAPHREADY, msg)
        },
        onGraphDataReady: function(callback){
            this.$on(this.GRAPHREADY,function(msg){
                callback(msg);
            })
        },
    }
})