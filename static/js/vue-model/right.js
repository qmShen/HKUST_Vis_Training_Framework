/**
 * Created by yiding on 2017/1/1.
 */

var navbar = new Vue({
	el: '#right-view',
	delimiters:['{{', '}}'],
	data: {
		buttons:[
            {'name': 'Dump', 'link': "http://www.huamin.org/"},
            {'name': 'Replace', 'link': "http://www.huamin.org/"}
        ],
	}
})
