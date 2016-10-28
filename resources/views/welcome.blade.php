<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
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

        </style>

    </head>
    <body>

    <div id="app">
        <counter></counter>
        <counter></counter>
    </div> 

    <template id="counter-template">
        <section>
            <h1>Heading</h1> 
            <button @click="count += 1">Increment: @{{ count }}</button>
        </section>
     </template>

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
