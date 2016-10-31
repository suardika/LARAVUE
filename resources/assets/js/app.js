var Vue = require('vue/dist/vue.js');


    new Vue({
      el: '.container',
      data: {
        bgColor: {
          backgroundColor: "#00cc00"
        }
      }
    });

// new Vue({
//   el: '#app',
//   data: {
//     message: 'Greetings your Majesty!'
//   }
// })

    // Vue.component('chariot', {
    //     props: ['chariot', 'current'],
    //     template: "#chariot-template",
    //     methods: {
    //         rideChariot: function (chariot) {
    //             this.$emit('select', chariot)
    //         },
    //     },
    //     computed: {
    //         //is true when the chariot has more horses than the current one
    //         hasMoreHorses: function () {
    //             return this.current.horses < this.chariot.horses
    //         },
    //         //is true when the chariot is the current one
    //         isCurrent: function () {
    //             return this.current.name == this.chariot.name
    //         },
    //         //is true when there is no chariot current
    //         noChariot: function () {
    //             return this.current.name == null;
    //         },
    //         //define the action for each chariot
    //         action: function () {
    //             if (this.noChariot) {
    //                 action = 'Pick Chariot'
    //             } else if (this.isCurrent) {
    //                 action = 'Riding!'
    //             } else if (this.hasMoreHorses) {
    //                 action = 'Hire Horses'
    //             } else {
    //                 action = 'Dismiss Horses'
    //             }
    //             return action;
    //         }
    //     }
    // });
    // var vm = new Vue({
    //     el: '.container',
    //     data: {
    //         chariots: [
    //             {name: "Olympus", horses: 4},
    //             {name: "Sagitta", horses: 3},
    //             {name: "Icarus", horses: 2},
    //             {name: "Abraxas", horses: 1},
    //         ],
    //         //the current 'chariot'
    //         current: {}
    //     },
    //     methods: {
    //       updateChariot: function (chariot) {
    //         this.current = chariot
    //       }
    //     }
    // })

// Vue.component('story', {
//   template: "#story-template",
//   props: ['story', 'favorite'],
//   methods:{
//     upvote: function(){
//       this.story.upvotes += 1;
//       this.story.voted = true;
//     },
//     markAsFavorite: function(){
//       // 'update' is just the name of the custom event
//       // it could be anything. ex: fav-update
//       this.$emit('update', this.story)
//     },
//   },
//   computed:{
//     isFavorite: function(){
//       return this.story == this.favorite;
//     },
//   }
// });

// new Vue({
//   el: '#app',
//   data: {
//     stories: [
//       {
//         plot: 'My horse is amazing.',
//         writer: 'Mr. Weebl',
//         upvotes: 28,
//         voted: false,
//       },
//       {
//         plot: 'Narwhals invented Shish Kebab.',
//         writer: 'Mr. Weebl',
//         upvotes: 8,
//         voted: false,
//       },
//       {
//         plot: 'The dark side of the Force is stronger.',
//         writer: 'Darth Vader',
//         upvotes: 49,
//         voted: false,
//       },
//       {
//         plot: 'One does not simply walk into Mordor',
//         writer: 'Boromir',
//         upvotes: 74,
//         voted: false,
//       },
//     ],
//     favorite: {}
//   },
//   methods:{
//       updateFavorite: function(story){
//         this.favorite = story;
//       },
//     },
// })



// var bus = new Vue()

// Vue.component('food', {
//   template: '#food',
//   props: ['name'],
//   data: function () {
//     return {
//       votes: 0
//     }
//   },
//   methods: {
//     vote: function (event) {
//       // instead of using this.name
//       // we can access event's element's text
//       var food = event.srcElement.textContent;
//       this.votes++
//       bus.$emit('voted', food)
//     },
//     reset: function () {
//       this.votes = 0
//     }
//   },
//   created () {
//     bus.$on('reset', this.reset)
//   }
// })
// new Vue({
//   el: '.container',
//   data: {
//     votes: {
//       count: 0,
//       log: []
//     }
//   },
//   methods:
//   {
//     countVote: function (food) {
//       this.votes.count++
//       this.votes.log.push(food + ' received a vote.')
//     },
//     reset: function () {
//       this.votes = {
//         count: 0,
//         log: []
//       }
//       bus.$emit('reset')
//     }
//   },
//   created () {
//     bus.$on('voted', this.countVote)
//   }
// })



// var bus = new Vue()

// Vue.component('food', {
//   template: '#food',
//   props: ['name'],
//   data: function () {
//     return {
//       votes: 0
//     }
//   },
//   methods: {
//       vote: function () {
//           this.votes++
//           this.$emit('voted', event.srcElement.textContent)
//       }
//   }
// })
// new Vue({
//   el: '.container',
//   data: {
//     votes: 0,
//     log: []
//   },
//   methods:
//   {
//     countVote: function (food) {
//       this.votes++
//       this.log.push(food + ' received a vote.')
//     }
//   }
// })


// Vue.component('food', {
//   template: '#food',
//   props: ['name'],
//   methods: {
//     vote: function () {
//       this.$emit('voted')
//     }
//   },
// })

// new Vue({
//   el: '.container',
//   data: {
//     votes: 0
//   },
//   methods:
//   {
//     vote: function () {
//       this.votes++
//     },
//   },
// })


// new Vue({
//   el: '.container',
//   data: {
//     votes: 0
//   },
//   methods:
//   {
//     vote: function (writer) {
//       this.$emit('voted')
//     },
//   },
//   created () {
//     this.$on('voted', function(button) {
//       this.votes++
//     })
//   }
// })


// Vue.component('planet', {
//   template: "#planet-template",
//   props: ['planet'],
//   methods: {
//     visit: function(){
//       this.planet.visits++;
//     },
//   },
//   computed: {
//     canBeVisited: function () {
//       return this.planet.visits < 5
//     }
//   }
// });

// new Vue({
// 	el: '#app',
// 		data: {
// 		planets: [
// 			{
// 				name: 'Mercury',
// 				visits: 0
// 			},
// 			{
// 				name: 'Venus',
// 				visits: 0
// 			},
// 			{
// 				name: 'Mars',
// 				visits: 0
// 			},
// 			{
// 				name: 'Jupiter',
// 				visits: 0
// 			}
// 		]
// 	}
// })


// Vue.component('story', {
//     template: "#story-template",
//     props: ['story'],
//     methods:{
//         upvote: function(){
//             this.story.upvotes += 1;
//             this.story.voted = true;
//         },
//     }
// });

// new Vue({
//     el: '#app',
//     data: {
//         stories: [
//             {
//                 plot: 'My horse is amazing.',
//                 writer: 'Mr. Weebl',
//                 upvotes: 28,
//                 voted: false,
//             },
//             {
//                 plot: 'Narwhals invented Shish Kebab.',
//                 writer: 'Mr. Weebl',
//                 upvotes: 8,
//                 voted: false,
//             },
//             {
//                 plot: 'The dark side of the Force is stronger.',
//                 writer: 'Darth Vader',
//                 upvotes: 49,
//                 voted: false,
//             },
//             {
//                 plot: 'One does not simply walk into Mordor',
//                 writer: 'Boromir',
//                 upvotes: 74,
//                 voted: false,
//             },
//         ]
//     }
// })


// Vue.component('story', {
//     props: ['story'],
//     template: '#story-template'
// });

// new Vue({
//   el: '.container',
//   data: {
//     stories: [
//       {
//         body: "I crashed my car today!",
//         writer: "Alex"
//       },
//       {
//         body: "Yesterday, someone stole my bag!",
//         writer: "John"
//       },
//       {
//         body: "Someone ate my chocolate...",
//         writer: "John"
//       },
//       {
//         body: "I ate someone's chocolate!",
//         writer: "Alex"
//       },
//     ],
//     query: ' '
//   },
//   methods:{
//     storiesBy: function (writer) {
//       return this.stories.filter(function (story) {
//         return story.writer === writer
//       })
//     }
//   },
//   computed: {
//     search: function () {
//       var query = this.query
//       return this.stories.filter(function (story) {
//         return story.body.includes(query)
//       })
//     }
//   }
// })


// Vue.component('story', {
//     props: ['story'],
//     template: "#story-template"
// });

// new Vue({
//     el: '.container'
// })



// Vue.component('story', {
//     template: "#story-template"
// });

// new Vue({
//     el: '.container'
// })



// Vue.component('story', {
//     template: "#story-template"
// });

// new Vue({
//     el: '.container'
// })



// Vue.component('story', {
//     template: '<h1>My horse is amazing!</h1>'
// });

// new Vue({
//     el: '.container'
// })


// new Vue({
//     el: '.container',
//     data: {
//         people: [
//         {name: "Obelix", age: 33},
//         {name: "Asterix", age: 32},
//         {name: "Majestix", age: 82},
//         {name: "Methusalix", age: 103},
//         {name: "Julius Caesar", age: 66},
//         ]
//     },
//     methods: {
// 		orderedPeople: function () {
// 			return _.orderBy(this.people, 'age')
//     }
// },
// 	computed: {
// 		old: function() {
// 			return this.people.filter(function (item) {
// 				return item.age > 65;
// 			});
// 		}
// 	}
// })


// new Vue({
// 	el: '.container',
// 	data: {
// 	  stories: [
// 		{
// 			plot: "I crashed my car today!",
// 			writer: "Alex",
// 			upvotes: 28
// 		},
// 		{
// 			plot: "Yesterday, someone stole my bag!",
// 			writer: "John",
// 			upvotes: 8
// 		},
// 		{
// 			plot: "Someone ate my chocolate...",
// 			writer: "John",
// 			upvotes: 51
// 		},
// 		{
// 			plot: "I ate someone's chocolate!",
// 			writer: "Alex",
// 			upvotes: 74
// 		},
// 		],
// 		order : 'desc'
// 	},
// 	methods: {
// 		reverseOrder: function () {
// 			this.order = (this.order === 'desc') ? 'asc' : 'desc'
// 		}
// 	},
// 	computed: {
// 		orderedStories: function () {
// 			var order = this.order
// 			return _.orderBy(this.stories, 'upvotes', [order])
// 		}
// 	}
// })


// Vue.filter('snitch', function (heroes) {
// 	return heroes.isObvioulsy + ' is ' + heroes.firstname + ' ' + heroes.lastname + ' in real life!'
// })

// new Vue({
// 	el: '.container',
// 	data: {
// 		heroes:  [
// 			{ firstname: 'Bruce', lastname:  'Wayne', isObvioulsy: 'Batman'},
// 			{ firstname: 'Clark', lastname: 'Kent', isObvioulsy: 'Superman'},
// 			{ firstname: 'Jay', lastname: 'Garrick', isObvioulsy: 'Flash'},
// 			{ firstname: 'Peter', lastname: 'Parker', isObvioulsy: 'Spider-Man'}
// 		]
// 	}
// })


// new Vue({
// 	el: '.container',
// 	data: {
// 		stories: [
// 				{
// 					plot: "I crashed my car today!",
// 					writer: "Alex",
// 					upvotes: 28
// 				},
// 				{
// 					plot: "Yesterday, someone stole my bag!",
// 					writer: "John",
// 					upvotes: 8
// 				},
// 				{
// 					plot: "Someone ate my chocolate...",
// 					writer: "John",
// 					upvotes: 51
// 				},
// 				{
// 					plot: "I ate someone's chocolate!",
// 					writer: "Alex",
// 					upvotes: 74
// 				},
// 			]
// 		},
// 		computed: {
// 		famous: function() {
// 			return this.stories.filter(function(item){
// 			return item.upvotes > 25;
// 			});
// 		}
// 	}
// })


// new Vue({
//     el: '.container',
//     data: {
//       stories: [
//           {
//               plot: "I crashed my car today!",
//               writer: "Alex",
//               upvotes: 28
//           },
//           {
//               plot: "Yesterday, someone stole my bag!",
//               writer: "John",
//               upvotes: 8
//           },
//           {
//               plot: "Someone ate my chocolate...",
//               writer: "John",
//               upvotes: 51
//           },
//           {
//               plot: "I ate someone's chocolate!",
//               writer: "Alex",
//               upvotes: 74
//           },
//       ],
//         order : 1
//     },
//     computed: {
//       orderedStories: function () {
//         var order = this.order;
//         return this.stories.sort(function(a, b) {
//           return (a.upvotes - b.upvotes) * order;
//         })
//       }
//     }
// })


// new Vue({
//   el: '.container',
//   data: {
//     stories: [
//       {
//         plot: "I crashed my car today!",
//         writer: "Alex"
//       },
//       {
//         plot: "Yesterday, someone stole my bag!",
//         writer: "John"
//       },
//       {
//         plot: "Someone ate my chocolate...",
//         writer: "John"
//       },
//       {
//         plot: "I ate someone's chocolate!",
//         writer: "Alex"
//       },
//     ],
//     query: ''
//   },
//   methods:{
//     storiesBy: function (writer) {
//       return this.stories.filter(function (story) {
//         return story.writer === writer
//       })
//     }
//   },
//   computed: {
//     search: function () {
//       var query = this.query
//       return this.stories.filter(function (story) {
//         return story.plot.includes(query)
//       })
//     }
//   }
// })


// var vm = new Vue({
//     el: '.container',
//     data: {
//         candidates: [
//             {name: "Mr. Black", votes: 140},
//             {name: "Mr. White", votes: 135},
//             {name: "Mr. Pink", votes: 145},
//             {name: "Mr. Brown", votes: 130},
//         ]
//     },
//     computed: {
//         mayor: function () {
//             //first we sort the array descending
//             var candidatesSorted = this.candidates.sort(function (a, b) {
//                 return b.votes - a.votes;
//             });
//             //the mayor will be the first item
//             return candidatesSorted[0];
//         }
//     },
//     methods: {
//         //this method runs when the key 'delete' is pressed
//         clear: function () {
//             //Turn votes of all candidate to 0 using map() function.
//             this.candidates = this.candidates.map(function (candidate) {
//                 candidate.votes = 0;
//                 return candidate;
//             })
//         }
//     }
// })


// new Vue({
//   el: '#app2',
//   data: {
//     a: 1,
//     b: 2,
//     operator: "+",
//   },
//   computed: {
//     c: function () {
//       switch (this.operator) {
//         case "+":
//         return this.a + this.b
//         break;
//         case "-":
//         return this.a - this.b
//         break;
//         case "*":
//         return this.a * this.b
//         break;
//         case "/":
//         return this.a / this.b
//         break;
//       }
//     }
//   },
// });

// new Vue({
// 	el: '.container',
// 	data: {
// 		a: 1,
// 		b: 2,
// 		c: 3,
// 		operator: "+",
// 	},
// 	methods:{
// 		calculate: function(event){
// 				event.preventDefault();
// 				switch (this.operator) {
// 				case "+":
// 				this.c = this.a + this.b
// 				break;
// 				case "-":
// 				this.c = this.a - this.b
// 				break;
// 				case "*":
// 				this.c = this.a * this.b
// 				break;
// 				case "/":
// 				this.c = this.a / this.b
// 				break;
// 			}
// 		}
// 	},
// });

// new Vue({
//     el: '.container',
//     data: {
//         upvotes: 0
//     },
//     // define methods under the **`methods`** object
//     methods: {
//         upvote: function(){
//             // **`this`** inside methods points to the Vue instance
//             this.upvotes++;
//         }
//     }
// })

// new Vue({
// el: '.container',
// 	data: {
// 	quotes:
// 		{
// 			name: "Kostas",
// 			height: "1.73m",
// 			weigh: "65kg",
// 			eyeColor: "brown",
// 			favoriteFood: "Ntolmas"
// 		},
// 	}
// })

// new Vue({
//     el: '.container',
//     data: {
//         story: {
//             plot: "Someone ate my chocolate...",
//             writer: 'John',
//             upvotes: 47
//         }
//     }
// })


// new Vue({
//     el: '.container',
//     data: {
//         stories: [
//             "I crashed my car today!",
//             "Yesterday, someone stole my bag!",
//             "Someone ate my chocolate...",
//         ]
//     }
// })

// new Vue({
//     el: '.container',
//     data: {
//         stories: [
//             {
//                 plot: "I crashed my car today!",
//                 writer: "Alex"
//             },
//             {
//                 plot: "Yesterday, someone stole my bag!",
//                 writer: "John"
//             },
//             {
//                 plot: "Someone ate my chocolate...",
//                 writer: "John"
//             },
//             {
//                 plot: "I ate someone's chocolate!",
//                 writer: "Alex"
//             },
//         ]
//     }
// })

// new Vue({
//     el: '.container'
// })

// 3
// new Vue({
//     el: '#app3',
//     data: {
//          message: 'Our king is dead! Send help!'
//     }
// })

// new Vue({
//   el: '#app2',
//   data: {
//     message: 'Our king is dead! Send help!'
//   }
// })

// new Vue({
//     el: '#app',
//     data: {
//          message: 'Our king is dead! Send help!'
//     }
// })

// new Vue({
//     el: '.container',
//     data: {
//         //empty variable each binded to input
//         name: "",
//     },
// })


// THE MAJESTY VUE JS 2


 /*****************
 *    Component   *
 * ***************/

// Vue.component('task-list', {
//     template: '#task-list-template',
//     props: ['tasks-data'],
//     data: function () {
//     	return { tasks: [] };
//     },
//     computed: {
//         remaining: function () { 
//             return this.tasks.filter(
//                 this.inProgress
//             ).length;
//         }
//     },
//     created: function () {
//     	this.tasks = this.tasksData; // Set default properties
//     },
//     methods: {
//         /**
//          * Toggle the completed status of a task
//          * @param item
//          */
//         toggleCompletedStatus: function (item) {
//             return item.completed = !item.completed;
//         },
//         /**
//          * Returns true when task is in progress (not completed)
//          * @param item
//          */
//         inProgress: function (item) {
//             return !item.completed;
//         }
//     }
// });

 /*************
 *  ViewModel *
 * ***********/

// new Vue({
//     el: '#app'
// });


// Vue.component('tasks', {
// 	props: ['list'],
// 	template: '#tasks-template'
// });

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



