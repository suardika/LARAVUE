var Vue = require('vue/dist/vue.js');

Vue.component('tasks', {
	props: ['list'],
	template: '#tasks-template'
});

new Vue({
	el: '#app',
	data: {
		tasks: [
			{ body: 'Go to the store', completed: false },
			{ body: 'Go to the bank', completed: false },
			{ body: 'Go to the doctor', completed: true }
		]
	}
}); 

// new Vue({
// 	el: '#app',
// 	data: {
// 		tasks: [
// 			{ body: 'Go to the store', completed: false },
// 			{ body: 'Go to the bank', completed: false },
// 			{ body: 'Go to the doctor', completed: true }
// 		]
// 	}
// }); 


// new Vue({
// 	el: '#app',
// 	data: {
// 		tasks: [
// 			{ body: 'Go to the store', completed: false },
// 			{ body: 'Go to the bank', completed: false },
// 			{ body: 'Go to the doctor', completed: true }
// 		]
// 	},
// 	methods: {
// 		toggleCompletedFor: function(task) {
// 			task.completed = ! task.completed;
// 		}
// 	}
// }); 


// new Vue({
// 	el: '#app',
// 	data: {
// 		tasks: [
// 			'Go to the store',
// 			'Go to the bank',
// 			'Go to the doctor',
// 		]
// 	}
// }); 


// var bus = new Vue();
// Vue.component('plan', {
//     template: '#plan-template',
//     props: ['plan', 'active'],

//     computed: {
//         isActive: function() {
//             return this.plan.price === this.active.price;
//         },

//         isUpgrade: function() {
//             return this.plan.price > this.active.price;
//         }
//     },

//     methods: {
//         setActivePlan: function() {
//             bus.$emit('activate', this.plan);
//         }
//     }
// });
// new Vue({
//     el: '#app',
//     data: {
//         plans: [
//             { name: 'Enterprise', price: 100},
//             { name: 'Pro', price: 50},
//             { name: 'Personal', price: 10},
//             { name: 'Free', price: 0}
//         ],
//         active: { name: 'Free', price: 0}
//     },
//     methods: {
//         handleActivation: function(plan) {
//             this.active = plan;
//             console.log(plan);
//         }
//     },
//     created: function() {
//         bus.$on('activate', this.handleActivation);
//     },
//     destroyed: function() {
//         bus.$off('activate', this.handleActivation);
//     }
// });


// depricated
// new Vue({
// 	el: '#app',
// 	data: {
// 		plans: [
// 			{ name: 'Enterprice', price: 100 },
// 			{ name: 'Pro', price: 50 },
// 			{ name: 'Personal', price: 10 }, 
// 			{ name: 'Free', price: 0 }
// 		],
// 		active: {}
// 	},
// 	components: {
// 		plan: {
// 			template: '#plan-template',
// 			props: ['plan', 'active'],

// 			methods: {
// 				setActivePlan: function() {
// 					this.active = this.plan;
// 				}
// 			}
// 		}
// 	}
// });


// new Vue({
// 	el: '#app',
// 	data: {
// 		plans: [
// 			{ name: 'Enterprice', price: 100 },
// 			{ name: 'Pro', price: 50 },
// 			{ name: 'Personal', price: 10 }, 
// 			{ name: 'Free', price: 0 }
// 		]
// 	},
// 	components: {
// 		plan: {
// 			template: '#plan-template',
// 			props: ['plan'],
// 			data: function() {
// 				return {
// 					active: false
// 				};
// 			},
// 			methods: {
// 				setActivePlan: function() {
// 					this.active = this.plan;
// 				}
// 			}
// 		}
// 	}
// }); 


// new Vue({
// 	el: '.container',
// 	data: {
// 		first: 'Jeffrey',
// 		last: 'Way'
// 	},
// 	computed: {
// 		fullname: function() {
// 			return this.first + ' ' + this.last;
// 		}
// 	}
// }); 


// new Vue({
// 	el: '.container',
// 	data: {
// 		first: 'Jeffrey',
// 		last: 'Way',
// 		fullname: 'Jeffrey Way'
// 	},
// 	watch: {
// 		first: function(first) {
// 			// alert(first);
// 			this.fullname = first + ' ' + this.last;
// 		},
// 		last: function(last) {
// 			this.fullname = this.first + ' ' + last;
// 		}
// 	}
// }); 


// new Vue({
// 	el: '.container',
// 	data: {
// 		points:50,
// 	},
// 	computed: {
// 		skill: function() {
// 			if (this.points <= 100) {
// 				return 'Beginner';
// 			}
// 			return 'Advanced';
// 		}
// 	}
// }); 


// new Vue({
// 	el: '.container',
// 	data: {
// 		points:300,
// 	},
// 	computed: {
// 		skill: function() {
// 			return 'Advanced';
// 		}
// 	}
// }); 


// new Vue({
// 	el: '.container',
// 	data: {
// 		points:300,
// 		skill: '',
// 	}
// }); 


// new Vue({
// 	el: '.container',
// 	data: {
// 		skill: 'Beginner',
// 	}
// }); 


// new Vue({
// 	el: '#app',
// 	components: {
// 		counter: {
// 			template:'#counter-template',
// 			props:['subject'],
// 			data: function(){
// 				return {count:0}; 
// 			}
// 		}
// 	}
// }); 


// Vue.component('counter', {
// 	template:'#counter-template',
// 	props:['subject'],
// 	data: function(){
// 		return {count:0}; 
// 	}
// });

// new Vue({
// 	el: '#app',
// });


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



