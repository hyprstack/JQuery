/*
Functions are the basic unit of action in jQuery. The main entry point of most jQuery
applications is a block of code that looks like this:

$(document).ready(function() {
    Do something
});
Let's go through it bit by bit.

$(document) is a jQuery object. The $() is actually a function in disguise; it turns the document into a jQuery object.
.ready() is a type of function; you can think of it as sort of a helper that runs the code inside
its parentheses as soon as the HTML document is ready.
function(){} is the action that .ready() will perform as soon as the HTML document is loaded.
(In the above example, the Do something placeholder is where those actions would go.)

A function is made up of three parts: the function keyword, any inputs that function takes (they go between the ()s and
are separated by commas if there are more than one), and whatever actions the function should perform (these go between
the {}s). The general form is:

function(input1, input2, etc) {
    Do a thing
    Do another thing
    Do yet another thing!
}
One of the nice things about jQuery is that you can give a function just about anything as an input—even another function!
That's why .ready() can take function between its parentheses; it's taking a function as input.

Variables
Variables are a place for us to store information for use at a later time. Variables can hold any type of information you
work with, so just think of them as containers.

The single = sign is used to assign values. For instance, in jQuery, you can write

var lucky = 7;
var name = "Codecademy";
var $p = $('p');
Our first variable contains a number, 7, while the second variable contains some text, "Codecademy". Our 3rd variable stores
the result of a jQuery selector $('p') in the variable $p . As you can see, this is just a handy way to save this information for later.

Why would we do this? Well, up until now we haven't had to modify anything more than once. If we wanted to change the webpage
based on new information, we would need to store that information in variables. Maybe you want to create a loading page and
have it vanish as you receive that information. It'd be a good idea to use variables.


*/

// Write your jQuery code on line 3!
$(document).ready(function() {
    var $target = $('#chumps'); //selects the element with id"chumps"
    $target.fadeOut('fast');
});


/*
Now that you know more about how functions work, you understand that when we have something like

$(document).ready(function() {
    $('div').hide();
});
we're passing .ready() a function (which itself takes no inputs; that's why its () are empty) and
that function's job is to .hide() the div jQuery object.

We don't have to limit ourselves to selecting HTML elements like <p> and <div>; essentially, we can put
any CSS selector in quotes and pass it into $().
This means we can select classes, too!

Recall that we can select classes in CSS by using a dot (.). If we have class="red" in our HTML, we can
target it in CSS with .red. In jQuery, all we need to do is put '.red' in quotes, and we can pass it to
$() to make a jQuery object.
*/

/*
We don't have to limit ourselves to selecting HTML elements like <p> and <div>; essentially, we can put any CSS selector
in quotes and pass it into $(). This means we can select classes, too!

Recall that we can select classes in CSS by using a dot (.). If we have class="red" in our HTML, we can target
it in CSS with .red. In jQuery, all we need to do is put '.red' in quotes, and we can pass it to $() to make a jQuery object.
*/

$(document).ready(function() {
    $('button').click(function() { //selects the button and assigns the click event to it
        $('.vanish').fadeOut('slow'); //selects the elements with the vanish class and makes them fade out slowly when button is clicked
    });
});


/*

If we can select by class, it follows that we can also select by ID. We do this by putting the ID name (in quotes) inside $().
Just as we need the . for classes, we need the # for IDs. We could target id="header" like so:

$('#header');
The semicolon at the end is important—it's how jQuery knows we're done giving it a command. For now, a good rule of thumb is that
you should put semicolons at the end of any line that does not end with an open {. (The editor will try to help you out with your
semicolon placement, so pay attention to its warnings.) Examples of correct and incorrect semicolon use are in the Hint.

*/

$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow'); //selects the element with Id 'blue' and makes it fade out when button is clicked
    });
});


/*
Anything you can target with CSS, you can modify with jQuery. For example, we can apply a fadeTo() to a p selector like this:

$('p').fadeTo('slow', 0);
We can apply a fadeTo() to an li selector like this:

$('li').fadeTo('slow', 0);
We can apply a fadeTo() to both the p and li selectors like this:

$('p, li').fadeTo('slow', 0);
This is called a compound selector.

Let's use a compound selector to apply a fadeTo() to both the .pink and .red selectors.

*/

$(document).ready(function(){
    $('.pink, .red').fadeTo('slow', 0); //selects the elements belonging to the red and pink classes and applies a fade function to them
});


/*
'this' is Important!
In the last lesson, we had some code that looked like this:

$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').hide();
    });
});
The second line is good: this tells us that when we mouse into a div, we should take a certain action. However, $('div').hide();
won't just hide the div you mouse into; it will hide all the divs on the page. How can we tell jQuery we only want to affect this particular div?

With this, of course!

The this keyword refers to the jQuery object you're currently doing something with. Its complete rules are a little tricky,
but the important thing to understand is if you use an event handler on an element—that's the fancy name for actions like .click()
and .mouseenter(), since they handle jQuery events—you can call the actual event that occurs (such as fadeOut()) on $(this), and
the event will only affect the element you're currently doing something with (for example, clicking on or mousing over).
*/
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow'); //only the div you click on will be affected.
    });
});


/* **********

Perfect! Just one more step: we need to tell .click() what to do. In this case,
when our pull tab is clicked, we want our sliding panel (with the class .panel) to open or close.

The jQuery event we need to toggle our sliding panel is (you guessed it): .slideToggle()!
We'll pass it one input, which is the speed of our slide animation.
************* */


//HMTL
<!DOCTYPE html>
<html>
    <head>
        <title>Slide Panel</title>
        <script type="text/javascript" src="script.js"></script>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"></link>
    </head>
    <body>
        <div class="panel">
        <br />
        <br />
        <p>Now you see me!</p>
        </div>
        <p class="slide"><div class="pull-me">Slide Up/Down</div></p>
    </body>
</html>


//CSS
body {
    margin:0 auto;
    padding:0;
	width:200px;
    text-align:center;
}
.pull-me{
    -webkit-box-shadow: 0 0 8px #FFD700;
    -moz-box-shadow: 0 0 8px #FFD700;
    box-shadow: 0 0 8px #FFD700;
    cursor:pointer;
}
.panel {
	background: #ffffbd;
    background-size:90% 90%;
    height:300px;
	display:none;
    font-family:garamond,times-new-roman,serif;
}
.panel p{
    text-align:center;
}
.slide {
	margin:0;
	padding:0;
	border-top:solid 2px #cc0000;
}
.pull-me {
	display:block;
    position:relative;
    right:-25px;
    width:150px;
    height:20px;
	font-family:arial,sans-serif;
    font-size:14px;
	color:#ffffff;
    background:#cc0000;
	text-decoration:none;
    -moz-border-bottom-left-radius:5px;
    -moz-border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
}
.pull-me p {
    text-align:center;
}


//JQuery
$(document).ready(function(){
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
    });
});
