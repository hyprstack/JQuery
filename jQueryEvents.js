/*
Review of jQuery Events
You know a lot about jQuery events already, but it never hurts to review the basics.

The setup almost always looks like this:

$(document).ready(function() {
    $('thingToTouch').event(function() {
        $('thingToAffect').effect();
    });
});
where "thing to touch" is the HTML element you'll click on, hover over, or otherwise interact with, and
"thing to affect" is the HTML element that fades away, changes size, or undergoes some other transformation.

Sometimes these elements are one and the same—you might hover over a <div> to change its opacity. Other times,
you might interact with a separate element; for example, you might click on a button to resize a <div>.

Sometimes if you want an effect to occur right away, without an event like .click() or .hover(), you'll skip the
second line in the above:

$(document).ready(function() {
    $('thingToAffect').effect();
});



Combining .click() and .hover()
Well done! Let's add one more jQuery event to our "destruction of Krypton" simulation.
Krypton didn't just vanish, it exploded! Let's make it turn red.

$('div').hover(function(){
  $('div').addClass('green');
});
Following the pattern we have been learning, we target Krypton, our $('div')
We then apply our hover event to our target.
Finally, we execute the code inside the function(){} which adds a class of green to our target.



The .dblclick() Event
Now that we've reviewed our jQuery event handlers, let's learn a new one.

We might want to cause a jQuery effect when a user double clicks on an element, rather than just single-clicking.
We can do this with the .dblclick() event handler.




Hover
What if you wanted to create an effect when your mouse is on top of an object, then have that effect vanish when your mouse moved away?
You might notice this effect in use on many site's navigation bars!

$('div').hover(
    function(){
      $(this).addClass('highlight');
   },
   function(){
      $(this).removeClass('highlight');
   }
);
We first select the element we want to modify $('div')
Secondly notice that our hover effect is able to take two functions(){} separated by a comma. The comma is very important!
The first function(){} we pass will be run when we first mouse over our target. Here we apply a class of highlight
The second function(){} will be called when our mouse leaves the object. This is where we remove the class highlight
Your second function(){} doesn't have to be the opposite of the first function(){}, but it would be very common!



The .keydown() Event
You're not limited to mouse events in jQuery—you can trigger events using the keyboard, as well!

The .keydown() event is triggered whenever a key on the keyboard is pressed. It only works on whatever page element has focus, so you'll need to click on the window containing your div before pressing a key in order for you to see its effects.

Let's go ahead and combine our new event with a new effect: .animate()! We'll use this to move an object on the screen whenever we press a key.

The .animate() effect takes two inputs: the animation to perform, and the time in which to perform the animation. Here's an example:

$(document).ready(function() {
   $('div').animate({left:'+=10px'},500);
});
This will take the first div it finds and move it ten pixels to the right. Remember, increasing the distance from the left margin moves
something to the right; the += bit is just a shorthand for "take the existing number and add ten to it."
In this case, it add ten pixels to the current distance from the left margin.




Using .keydown()
Good! Now we want to add a line of jQuery that will handle the keydown event.

Instructions
Inside your $(document).ready() setup, call the .keydown() event on $(document). Pass .keydown() a function(){} as an input.
Here's the twist: your function should take a single input, key, which will help jQuery figure out which key was pressed.




Filling Out the Cases
Great work! Now it's time to animate our character based on the user's input from the keyboard.

Every key press on a keyboard is translated into a number for the computer to use. Don't worry about memorizing them,
for now we've given you the basics in script.js

// Left arrow key pressed
case 37:
  ('img').animate({left: "-=10px"}, 'fast');
The left arrow key on our keyboards translates to number 37 to the computer. When that key is pressed, we animate our
image to the left by subtracting 10px
To move up we subtract 10px from the top
To move right we add 10px to the left 4, Finally, to move down we add 10px to the top
Can you fill in Up, Down, and Right? What happens if you add pixels +=10px instead of subtracting?


*/

// HTML

<!DOCTYPE html>
<html>
    <head>
		<title>Super Mario!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
		<script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <img src="http://i1061.photobucket.com/albums/t480/ericqweinstein/mario.jpg"/>
	</body>
</html>


// CSS

img {
    position: relative;
}

// jQuery

$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			// Down Array Pressed
			case 40:
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});
