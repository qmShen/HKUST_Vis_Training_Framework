/**
 * Created by yiding on 2016/12/30.
 */

var controlModel = new Vue({
    el: '#control-view',

    data: {
        features: [
            {name: "LinkDistance", 'type': 'range', 'value': 10, 'min': 1, 'max': 500, 'step': 1},
            {name: "Charge", 'type': 'range', 'value': 11, 'min': 1, 'max': 800, 'step': 1},
            {name: "Gravity", 'type': 'range', 'value': 0.2, 'min': 0, 'max': 1, 'step': 0.001}
        ]
    },
    watch: {
        features: {
            handler: function (newValues, oldValues) {
                let changedValues = [];
                for(var i = 0, ilen = newValues.length; i < ilen; i++){
                    if(newValues[i]['value'] != oldValues[i]['value']){
                        changedValues[i] = {'name': newValues[i]['name'], 'value': newValues[i]['value']};
                    }else{
                        changedValues[i] = {'name': newValues[i]['name'], 'value': newValues[i]['value']};
                    }
                }
                pipService.emitChangeAttributes(changedValues);
            },
            deep: true
        }
    }
});
