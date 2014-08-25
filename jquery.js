/*
What is jQuery?
jQuery is a library, or set of helpful add-ons, to the JavaScript programming language.
It may seem counterintuitive to learn how to use a library before learning the actual language,
but there are a few good reasons for this.

It takes a while to become comfortable with JavaScript, and it's trickier to manipulate HTML
elements directly with JavaScript than with jQuery. In order to help you build awesome websites
faster, we're starting you off with jQuery.
jQuery provides a simple interface for the underlying JavaScript. It's easier for many users to
learn jQuery first, then dive into the nitty-gritty JavaScript details later.
jQuery is much better at giving you immediate, visual results than regular JavaScript. By the end of
this lesson, you'll have built your own interactive button!

Next, we'll need to start up our jQuery magic using the $(document).ready(); syntax you've seen.
It works like this:

$() says, "hey, jQuery things are about to happen!"
Putting document between the parentheses tells us that we're about to work our magic on the HTML document itself.
.ready(); is a function, or basic action, in jQuery. It says "hey, I'm going to do stuff as soon as
the HTML document is ready!"
Whatever goes in .ready()'s parentheses is the jQuery event that occurs as soon as the HTML document is ready.
So,

$(document).ready(something);
says: "when the HTML document is ready, do something!" (We'll show you how to replace something with an
action in the next exercise.)

Note that .ready(); ends with a semicolon. This tells jQuery that you're done giving it a command.

Almost there! Now we just need to include an action in the body of our function. In this case, we'll make a
header div for our HTML page slide into view.

Between the {}s of our function(), we'll want to turn our div into a jQuery object so jQuery can manipulate it.
Much like we use .ready() on $(document), we'll use the .slideDown() action on our div jQuery object.

Inside .slideDown's parentheses, we'll want to tell it how quickly to slide down. Let's enter 'slow' (include the quotes).


Great! Next, let's include our function keyword and two new actions together, mouseenter() and fadeTo().

mouseenter() does what you might expect: it produces a change when your mouse enters a given HTML element. For example,

$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').hide();
    });
});
would hide every <div> on the page as soon as you mouse over one. (We'll find out how to affect just one <div> among
many in the next lesson.) For now, we only have one <div>, so this setup is okay.

Instead of hide(), however, we'll place fadeTo() inside mouseenter(). fadeTo() takes two arguments, or inputs, between
its parentheses, separated by a comma: the speed at which to fade, and the opacity (or transparency) to fade to. For example,

fadeTo('fast', 0.25);
would quickly fade the target element to 25% of its original opacity, making it very light-colored.

*/


/* *************************************** */
// fadeTo code

$(document).ready(function(){
    $('div').mouseenter(function(){
        $('div').fadeTo('fast', 1);
    });
});


/* *************************************** */

/*
Excellent! Your button looks great now—it stands out when the user mouses over it.

However, you'll notice that when you take your cursor off the button, it stays dark.
What we really want is for our button to become light again when our mouse leaves.

You might have guessed that jQuery includes a mouseleave() action. If so, you're right!
(If you're curious, you can learn more about these actions in the jQuery documentation.)
*/

// Make it fade back

/* **************************************** */

$(document).ready(function(){
    $('div').mouseenter(function(){
        $('div').fadeTo('fast', 1);
    });

    $('div').mouseleave(function(){
        $('div').fadeTo('fast', 0.5);
    });
});

/* ***************************************** */
