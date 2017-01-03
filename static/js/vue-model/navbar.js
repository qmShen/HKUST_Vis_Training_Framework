/**
 * Created by yiding on 2016/12/30.
 */

var navbar = new Vue({
	el: '#body-navbar',
	delimiters:['{{', '}}'],
	data: {
		buttons:[
            {'name': 'Dump', 'link': "http://www.huamin.org/"},
            {'name': 'Replace', 'link': "http://www.huamin.org/"}

        ],
        'example':'exe'
	}
})
