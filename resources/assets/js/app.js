var Vue = require('vue/dist/vue.js');

Vue.component('counter', {
	template:'#counter-template',
	data: function(){
		return {count:0}; 
	}
});

new Vue({
	el: '#app',
});


// Vue.component('counter', {
// 	template:'<h1>Hellow  World!</h1><button>'
// });
// new Vue({
// 	el: '#app',
// });


// new Vue({
// 	el: '#app',

// 	data: function () {
// 		return {
// 		  count: 0
// 		}
// 	},

// 	methods: {
// 		updateCount: function () {
// 			this.count += 5;
// 		}
// 	}
// });


// new Vue({
// 	el: '#app',
// 	methods: {
// 		handleIt: function() {
// 			alert('Handled');
// 		}
// 	}
// });

// 6.2
// new Vue({
// 	el: '#app',
// 	methods: {
// 		handleIt: function(e) {
// 			alert('Handled');
// 			e.preventDefault();
// 		}
// 	}
// });

// 6.1
// new Vue({
// 	el: '#app',
// 	methods: {
// 		handleIt: function() {
// 			alert('Handled');
// 		}
// 	}
// });


// 5
// new Vue({
// 	el: '#app',
// 	data: {
// 		message: ''
// 	}
// });


// 4
// new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'Hellow Made Robert'
// 	}
// });


// 3
// new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'Hellow Made Robert'
// 	}
// });


// 2
// var data = {
// 	message: 'Hallow Made Robert!'
// };
// new Vue({
// 	el: '#app',
// 	data: data
// });


// 1
// new Vue({
//     el: '#app',
 
//     data: {message: 'Hello World!'},
 
//     filters: {
//         reverse: require('./filters/reverse')
//     }
 
// })



