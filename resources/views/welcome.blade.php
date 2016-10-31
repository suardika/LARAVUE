<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.4/lodash.min.js"></script> -->
        <style type="text/css">
            form span,
            form textarea,
            form button,
            form pre {
                margin-top: 10p x;
            }
            .error {
                color: red;
            }

            .centered {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .plan__name, .plan__price {
                float: left;
                width: 10%;
            }
            #app div {
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .completed { text-decoration: line-through; }
        </style>

    </head>
    <body>

      <div class="container" :style="bgColor">
        <div class="centered">
          <h1>Paint this background!</h1>
          <input type="color" v-model="bgColor.backgroundColor" />
        </div>
      </div>

<!--   <div id="app">
    <h1>@{{ message }}</h1>
    <input v-model="message">
  </div> -->

<!-- <div class="container">
    <h1>Chariot shopping</h1>
    <ul class="list-group">
        <chariot v-for="chariot in chariots" :chariot="chariot" :current="current" @select="updateChariot"></chariot>
    </ul>
    <pre>@{{ $data }}</pre>
</div>

<template id="chariot-template">
    <li class="list-group-item">
        <h4>"@{{ chariot.name }}" chariot has <strong>@{{ chariot.horses }}</strong> horse(s)!</h4>
        <button @click="rideChariot(chariot)" class="btn btn-primary" :disabled="isCurrent">
            @{{ action }}
        </button>
    </li>
</template> -->



<!--         <div id="app">
            <div class="container">
            <h1>Let's hear some stories!</h1>
            <ul class="list-group">
                <story v-for="story in stories"
                    :story="story"
                    :favorite="favorite"
                    @update="updateFavorite">
                </story>
            </ul>
            <pre>
                @{{ $data }}
            </pre>
            </div>
        </div>


        <template id="story-template">
            <li  class="list-group-item">
                @{{ story.writer }} said "@{{ story.plot }}".
                Story upvotes @{{ story.upvotes }}.
                <button v-show="!story.voted" @click="upvote"
                    class="btn btn-default">
                    Upvote
                </button>
                <button v-show="!isFavorite" @click="markAsFavorite"
                    class="btn btn-primary">
                    Favorite
                </button>
                <span v-show="isFavorite"
                    class="glyphicon glyphicon-star pull-right" aria-hidden="true">
                </span>
            </li>
        </template>
 -->


<!--   <div class="container text-center">
    <h1>Food Battle</h1>
    <p style="font-size: 140px;">
      @{{ votes.count }}
    </p>
    <button class="btn btn-danger" @click="reset">Reset votes</button>
    <hr>

    <div class="row">
      <food name="Cheeseburger"></food>
      <food name="Double Bacon Burger"></food>
      <food name="Whooper"></food>
    </div>
    <hr>

    <h1>Log:</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="vote in votes.log"> @{{ vote }} </li>
    </ul>
  </div>

    <template id="food">
        <div class="text-center col-lg-4">
            <p style="font-size: 40px;">
                @{{ votes }}
            </p>
            <button class="btn btn-default" @click="vote">@{{ name }}</button>
        </div>
    </template> -->


<!--   <div class="container text-center">
    <p style="font-size: 140px;">
      @{{ votes }}
    </p>

    <div class="row">
      <food @voted="countVote" name="Cheeseburger"></food>
      <food @voted="countVote" name="Double Bacon Burger"></food>
      <food @voted="countVote" name="Rodeo Burger"></food>
    </div>
    <h1>Log:</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="vote in log"> @{{ vote }} </li>
    </ul>
  </div>

    <template id="food">
      <div class="text-center col-lg-4">
        <p style="font-size: 40px;">
          @{{ votes }}
        </p>
        <button class="btn btn-default" @click="vote">@{{ name }}</button>
      </div>
    </template> -->

<!--         <div class="container text-center">
            <p style="font-size: 140px;">
                @{{ votes }}
            </p>
            <food @voted="vote" name="Cheeseburger"></food>
        </div>
        <template id="food">
            <button class="btn btn-default" @click="vote">@{{ name }}</button>
        </template> -->

<!--         <div class="container text-center">
            <p style="font-size: 140px;">
                @{{ votes }}
            </p>
            <button class="btn btn-primary" @click="vote">
                Vote
            </button>
        </div> -->


<!--     <div id="app">
        <div class="container">
            <h1>Where would like to go?</h1>
            <ul class="list-group">
                <planet v-for="planet in planets" :planet="planet"></planet>
            </ul>
        </div>
    </div>

    <template id="planet-template">
        <li  class="list-group-item">
                Planet: @{{ planet.name }}
                Visited @{{ planet.visits }} time(s).
            <button v-show="canBeVisited" @click="visit" class="btn btn-default">
                Visit
            </button>
            <span v-show="planet.visits > 0" class="fa fa-rocket fa-2x pull-right" aria-hidden="true">
            </span>
        </li>
    </template> -->


<!--         <div id="app">
            <div class="container">
                <h1>Let's hear some stories!</h1>
                <ul class="list-group">
                    <story v-for="story in stories" :story="story"></story>
                </ul>
                    <pre>@{{ $data }}</pre>
            </div>
        </div>
        <template id="story-template">
            <li  class="list-group-item">
                @{{ story.writer }} said "@{{ story.plot }}".
                Story upvotes @{{ story.upvotes }}.
                <button v-show="!story.voted" @click="upvote"
                      class="btn btn-default"
                >
                    Upvote
                </button>
            </li>
        </template> -->

<!--     <div class="container">
        <h1>Lets hear some stories!</h1>
        <div>
            <h3>Alex's stories</h3>
            <ul class="list-group">
                <story v-for="story in storiesBy('Alex')"
                    :story="story">
                </story>
            </ul>
            <h3>John's stories</h3>
            <ul class="list-group">
                <story v-for="story in storiesBy('John')"
                    :story="story">
                </story>
            </ul>
            <div class="form-group">
                <label for="query">What are you looking for?</label>
                <input v-model="query" class="form-control">
            </div>
            <h3>Search results:</h3>
            <ul class="list-group">
                <story v-for="story in search"
                    :story="story">
                </story>
            </ul>
        </div>
    </div>

    <template id="story-template">
        <li class="list-group-item">
            @{{ story.writer }} said "@{{ story.body }}"
        </li>
    </template>
 -->


<!--     <div class="container">
        <story v-bind:story="{plot: 'My horse is amazing.', writer: 'Mr. Weebl'}">
        </story>
        <story v-bind:story="{plot: 'Narwhals invented Shish Kebab.', writer: 'Mr. Weebl'}"
        >
        </story>
        <story v-bind:story="{plot: 'The dark side of the Force is stronger.', writer: 'Darth Vader'}"
        >
        </story>
    </div>

    <template id="story-template">
      <h1>@{{ story.writer }} said "@{{ story.plot }}"</h1>
    </template> -->



<!--         <div class="container">
            <story></story>
            <story></story>
            <story></story>
            <story></story>
        </div> -->

    <!-- </body> -->

<!--     <template id="story-template">
        <h1>My horse is amazing!</h1>
    </template> -->


<!--     <div class="container">
        <story></story>
    </div> -->


<!-- 7 -->
<!-- 
    <div class="container">
        <h1>People of Gaul</h1>
        <ul class="list-group">
            <li v-for="person in orderedPeople()" class="list-group-item">
                @{{person.name}} @{{person.age}}
            </li>
        </ul>
        <h1>"Old" People of Gaul</h1>
        <ul class="list-group">
            <li v-for="person in old" class="list-group-item">
                @{{person.name}} @{{person.age}}
            </li>
        </ul>
        <pre>@{{ $data }}</pre>
    </div>
 -->

<!--     <div class="container">
        <h1>Let's hear some stories!</h1>
        <ul class="list-group">
            <li v-for="story in orderedStories"
                class="list-group-item"
            >
                @{{ story.writer }} said "@{{ story.plot }}"
                and upvoted @{{ story.upvotes }} times.
            </li>
        </ul>
        <ul class="list-group">
            <li v-for="story in _.orderBy(stories, ['upvotes'], [order])" class="list-group-item">
                @{{ story.writer }} said "@{{ story.plot }}"
                and upvoted @{{ story.upvotes }} times.
            </li>
        </ul>
        <button class="btn btn-default" v-on:click="reverseOrder">Reverse Order</button>
        <pre>
            @{{ $data }}
        </pre>
    </div>
 -->

<!--     <div class="container">
        <h1>Real identities of Super Heroes!</h1>
        <ul class="list-group">
            <li v-for="hero in heroes"
                class="list-group-item"
            >
                @{{hero | snitch}}
            </li>
        </ul>
    </div> -->


<!--     <div class="container">
        <h1>Let's hear some famous stories! (@{{famous.length}})</h1>
        <ul class="list-group">
            <li v-for="story in famous"
                class="list-group-item"
            >
                @{{ story.writer }} said "@{{ story.plot }}"
                and upvoted @{{ story.upvotes }} times.
            </li>
        </ul>
    </div> -->

<!--     <div class="container">
        <h1>Let's hear some stories!</h1>
        <ul class="list-group">
            <li v-for="story in orderedStories"
                class="list-group-item"
            >
                @{{ story.writer }} said "@{{ story.plot }}"
                and upvoted @{{ story.upvotes }} times.
            </li>
        </ul>
        <button @click="order = order * -1">Reverse Order</button>
        <pre>
            @{{ $data }}
        </pre>
    </div> -->


<!--     <div class="container">
        <h1>Let's hear some stories!</h1>
        <div>
            <h3>Alex's stories</h3>
            <ul class="list-group">
                <li v-for="story in storiesBy('Alex')"
                    class="list-group-item"
                >
                    @{{ story.writer }} said "@{{ story.plot }}"
                </li>
            </ul>
            <h3>John's stories</h3>
            <ul class="list-group">
                <li v-for="story in storiesBy('John')"
                    class="list-group-item"
                >
                    @{{ story.writer }} said "@{{ story.plot }}"
                </li>
            </ul>
        </div>
        <div class="form-group">
            <label for="query">
                What are you looking for?
            </label>
            <input v-model="query" class="form-control">
        </div>
        <h3>Search results:</h3>
        <ul class="list-group">
            <li v-for="story in search"
                class="list-group-item"
            >
                @{{ story.writer }} said "@{{ story.plot }}"
            </li>
        </ul>
        <pre>
            @{{ $data }}
        </pre>
    </div> -->

<!--     <div class="container">
        <h1>People of Vue</h1>
        <ul class="list-group">
            <li v-for="candidate in candidates" class="list-group-item">
                @{{candidate.name}} @{{candidate.votes}}
                <button class="btn btn-default" @click="candidate.votes++">Vote</button>
            </li>
        </ul>
        <input @keyup.delete="clear" class="form-control" placeholder="press 'delete' to reset "></input>
        <h2>Our mayor is @{{mayor.name}}!</h2>
        <pre>@{{ $data }}</pre>
        <pre>@{{ mayor }}</pre>
    </div>
 -->
<!-- <div id="app2" class="container">
    <h1>Type 2 numbers and choose operation.</h1>
    <form class="form-inline">
        <input v-model.number="a"  class="form-control">
        <select v-model="operator" class="form-control">
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <input v-model.number="b" class="form-control">
    </form>
    <h2>Result: @{{a}}  @{{operator}}  @{{b}} = @{{c}}</h2>
    <pre>
        @{{ $data }}
    </pre>
</div> -->

<!-- <div class="container">
    <h1>Type 2 numbers and choose operation.</h1>
    <form class="form-inline">
        <input v-model.number="a"  class="form-control">
        <select v-model="operator" class="form-control">
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <input v-model.number="b" class="form-control">
        <button type="submit" 
            @click="calculate"
            class="btn btn-primary"
        >
            Calculate
        </button>
    </form>
    <h2>Result: @{{a}}  @{{operator}}  @{{b}} = @{{c}}</h2>
    <pre>
        @{{ $data }}
    </pre>
</div> -->

<!--     <div class="container">
        <button v-on:click="upvote">
            Upvote! @{{upvotes}}
        </button>
    </div> -->


<!--     <div class="container">
        <h1>This is me!</h1>
        <div>
            <ul class="list-group">
                <li v-for="(value, key, index) in quotes"
                class="list-group-item"
                >
                @{{ index }}:  @{{ key }} = @{{ value }}
                </li>
            </ul>
        </div>
        <pre>
            @{{ $data }}
        </pre>
    </div> -->

<!--     <div class="container">
        <h1>Let's hear some stories!</h1>
        <ul class="list-group">
            <li v-for="(index, value, key) in story"
                class="list-group-item"
            >
                @{{key}} : @{{value}} : @{{index}}
            </li>
        </ul>
    </div> -->

<!--     <div class="container">
        <h1>Let's hear some stories!</h1>
        <div>
            <ul class="list-group">
                <li v-for="story in stories" class="list-group-item">
                    Someone said "@{{ story }}"
                </li>
            </ul>
        </div>
        <pre>
            @{{ $data }}
        </pre>
    </div> -->

<!--     <div class="container">
        <h1>Let's hear some stories!</h1>
        <div>
          <ul class="list-group">
              <li v-for="(story, index) in stories"
                  class="list-group-item"
                  >
                  @{{index}} @{{ story.writer }} said "@{{ story.plot }}"
              </li>
          </ul>
        </div>
        <pre>
            @{{ $data }}
        </pre>
    </div> -->

<!--     <div class="container">
        <h1>The multiplication table of 4.</h1>
        <ul class="list-group">
            <li v-for="i in 11" class="list-group-item">
                @{{ i }} times 4 equals @{{ i * 4 }}.
            </li>
        </ul>
    </div> -->

<!-- 3 -->
<!-- <div id="app3">
    <h1 v-if="!message">You must send a message for help!</h1>
    <h2 v-else>You have sent a message!</h2>
    <textarea v-model="message"></textarea>
    <button v-show="message">
        Send word to allies for help!
    </button>
    <pre>
        @{{ $data }}
    </pre>
</div>

<div id="app2">
    <template v-if="!message">
        <h1>You must send a message for help!</h1>
        <p>Dispatch a messenger immediately!</p>
        <p>To nearby kingdom of Hearts!</p>
    </template>
    <textarea v-model="message"></textarea>
    <button v-show="message">
        Send word to allies for help!
    </button>
    <pre>
        @{{ $data }}
    </pre>
</div>

<div id="app" style="text-align:center;">
    <h1>You must send a message for help!</h1>
    <textarea v-model="message"></textarea>
    <br>
    <button v-show="message">
        Send word to allies for help!
    </button>
    <pre>@{{ $data }}</pre>
</div> -->

<!--     <div class="container">
        <h2>Hello @{{name}}</h2>
        <form class="form-inline">
            <div class="form-group">
                <label for="name">Enter your name:</label>
                binded input to 'name'
                <input v-model="name" type="text" class="form-control" id="name" placeholder="Name">
            </div>
        </form>
        displays all data within Vue instance filtered through JSON
        <pre>@{{ $data }}</pre>
    </div> -->

<!-- THE MAJESTY VUE JS 2 -->

<!--     <div id="app">
      <task-list :tasks-data="[{body: 'Hello all', completed: false},{body: 'Goodbye all', completed: false}]"></task-list> 
    </div>
    <template id="task-list-template">
        <div>
            <h3>Remaining task @{{ remaining }}</h3>
            <ul>
                <li v-for="task in tasks" @click="toggleCompletedStatus(task)">
                    @{{ task.body }}
                </li>
            </ul>
        </div>
    </template>

    <div id="app" class="container">
        <tasks :list="tasks"></tasks>
    </div>
    <template id="tasks-template">
        <div>
            <h1>My Task (@{{ remaining }})</h1>
            <ul>
                <li :class="{'completed': task.completed }"
                    v-for="task in list"
                    @click="task.completed = ! task.completed"
                >
                    @{{ task.body }}
                </li>
            </ul>
        </div>          
    </template>   -->

<!-- not working -->
<!--         <div id="app" class="container">
            <tasks :list="tasks"></tasks>
            <tasks :list="tasks"></tasks>
            <tasks :list="[{ body: 'do this', completed: false }]"></tasks>
        </div>
        <template id="tasks-template">
            <ul>
                <li :class="{'completed': task.completed }"
                    v-for="task in list"
                    @click="task.completed = ! task.completed"
                >
                    @{{ task.body }}
                </li>
            </ul>            
        </template> -->

 <!--        <div id="app" class="container">
            <ul>
                <li :class="{'completed': task.completed }"
                    v-for="task in tasks"
                    @click="task.completed = ! task.completed"
                >
                    @{{ task.body }}
                </li>
            </ul>
        </div>     -->

<!--         <div id="app" class="container">
            <ul>
                <li :class="{'completed': task.completed }"
                    v-for="task in tasks"
                    @click="toggleCompletedFor(task)"
                >
                    @{{ task.body }}
                </li>
            </ul>
        </div>     -->    


<!--         <div id="app" class="container">
            <ul>
                <li v-for="task in tasks">@{{ task }}</li>
            </ul>
        </div> -->


<!--         <div id="app" class="container">
            <pre>
                @{{ $data }}
            </pre>
            <div v-for="plan in plans">
                <plan :plan="plan" :active="active" @activate="handleActivation"></plan>
            </div>
        </div>

        <template id="plan-template">
            <div>
                <span class="plan__name">
                    @{{ plan.name }}
                </span>
                <span class="plan__price">
                    @{{ plan.price }}/month
                </span>
                <button class="btn btn-default" v-if="!isActive" @click="setActivePlan">
                    @{{ isUpgrade ? 'Upgrade' : 'Downgrade' }}
                </button>
                <button class="btn btn-primary" v-else>Selected</button>
            </div>
        </template> -->


<!--         <div id="app" class="container">
            <div v-for="plan in plans">
                <plan :plan="plan"></plan>                
            </div>
        </div>

        <template id="plan-template">
            <div>
                @{{ $data }}
                <span class="plan__name">
                    @{{ plan.name }}
                </span>
                <span class="plan__price">
                    @{{ plan.price }}/month
                </span>
                <button @click="setActivePlan">
                    Upgrade
                </button>
            </div>
        </template>  -->

<!--         <div class="container">
             <h1>@{{ fullname }}</h1>
             <input type="text" v-model="first" placeholder="First Name">
             <input type="text" v-model="last" placeholder="Last Name">
        </div>     -->

<!--         <div class="container">
             <h1>@{{ first }} @{{ last }}</h1>
        </div>     -->         

<!--         <div class="container">
            <h1>Skill: @{{ skill }}</h1>
            <input type="text" v-model="points">
        </div>              
 -->
<!--         <div class="container">
            <h1>Skill: @{{ points <= 100 ? 'Beginner' : 'Intermediate'}}</h1>
        </div>      -->   

<!--         <div class="container">
            <h1>Skill: @{{ skill }}</h1>
        </div> -->

<!--     <div id="app">
        <counter subject="Likes"></counter>
        <counter subject="Dislikes"></counter>
    </div> 
    <template id="counter-template">
        <section>
            <h1>@{{ subject }}</h1> 
            <button @click="count += 1">@{{ count }}</button>
        </section>
     </template> -->

<!--     <div id="app">
        <counter></counter>
        <counter></counter>
    </div>  -->

<!--     <div id="app" class="centered">
        <button type="submit" @click="count +=1">
           Likes: @{{ count }}
        </button>        

        <button type="submit" @click="count +=1">
           Dislike: @{{ count }}
        </button>
    </div>  -->

<!--     <div id="app" class="centered">
        <button type="submit" @click="count +=1">
           Increment Counter: @{{ count }}
        </button>
    </div>    -->    

<!--     <div id="app" class="centered">
        <button type="submit" @click="updateCount">
           Increment Counter: @{{ count }}
        </button>
    </div>       -->

<!--     <div id="app">
        <form action="/done" @submit.prevent="handleIt">
            <button type="submit">
                Submit me!
            </button>
        </form>
    </div>     -->

<!--    <div id="app">
        <form action="/done" @submit="handleIt">
            <button type="submit" @click="doSomething">
                Submit me!
            </button>
        </form>
    </div> 
 -->
<!--     <div id="app">
        // use prevent  or stop
        <form action="/done" v-on:submit.prevent="handleIt">
            <button type="submit">
                Submit me!
            </button>
        </form>
    </div> -->

<!-- 6.1 - 6.2  -->
<!--     <div id="app">
        <form action="/done" v-on:submit="handleIt">
            <button type="submit">
                Submit me!
            </button>
        </form>
    </div> -->

<!-- 5 -->
<!--         <div class="container col-md-6">
            <div id="app">
                <form class="form-group">
                    vshow or v-if
                    <span class="error" v-show="!message">
                        You must enter a message
                    </span>
                    <textarea class="form-control" rows="5" v-model="message"></textarea>
                    <button class="btn btn-default" type="submit" v-show="message">
                        send message
                    </button>
                    <pre>@{{ $data }}</pre>
                </form>
                
            </div>
        </div> -->
     
<!-- 4
        <div id="app">
            <h1>@{{ message }}</h1>
            <input v-model="message">
            <pre>
                @{{ $data }}
            </pre>
        </div>    -->      

<!-- 3 -->
<!--         <div id="app">
            <h1>@{{ message }}</h1>
            <input v-model="message">
        </div>  -->

<!-- 1-2 -->
<!--         <div id="app">
            @{{ message | reverse }}
        </div> -->

        <script src="/js/app.js"></script>
    </body>
</html>
