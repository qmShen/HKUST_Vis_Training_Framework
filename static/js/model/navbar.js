/**
 * Created by yiding on 2016/12/30.
 */

var navbar = new Vue({
	el: '#body-navbar',
	delimiters:['{{', '}}'],
	data: {
		buttons:[
            {'name': 'Button', 'link': "http://www.huamin.org/"},
            {'name': 'AnotherButton', 'link': "http://www.huamin.org/"}

        ],
	}
})
