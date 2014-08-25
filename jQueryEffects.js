/*
Introducing: jQuery UI
All right! Time to blaze new jQuery trails with a new jQuery library: jQuery UI.

jQuery UI includes a number of ultra-fancy animations you can use to make your websites do incredible things.

For instance, remember when we lamented that jQuery didn't include a .blowUp() effect for our planet Krypton? Well, that's still true.
But jQuery UI has an .effect() effect, and we are totally going to give it the input 'explode'.

Note that we've included an extra <script> tag in our HTML documents; this is used to include jQuery UI in our webpages.
We don't have to do this with regular jQuery, since Codecademy automatically includes it for us.



.bounce()
Cool, right? But we can do much more than just blow things up.

Another possible effect is 'bounce'. We give this as an input to .effect() just like 'explode',
but we add an extra input to tell it how many times to bounce. This code will make our target 'div' bounce twice in 200 milliseconds:

$('div').effect('bounce', {times:2}, 2



.slide()
We can also make Krypton .slide() into view. Not surprisingly, we do this by calling the .effect() effect and passing in 'slide' as an input.

If you want to see everything jQuery UI can do, you can check out the documentation here!



Drag Racing
jQuery UI includes a .draggable() function that can make any HTML element draggable—you can click on it and move it anywhere on the page!

We thought you might be tired of <div> blocks, so we made you a CSS car. We worked super hard on it.



Call the .resizable() function on your 'div'. Click Save & Submit Code, then go to the Result tab and resize your <div> to your heart's content!



jQuery UI, is There Anything You Can't Do?
All right! Time to use jQuery UI to create that awesome-looking accordion-style dropdown menu we saw in the last section.
For this, we'll be using jQuery UI's built-in .accordion() function. (Handy, no?)

First, however, we'll need some additional HTML elements.
*/


// HTML

<!DOCTYPE html>
<html>
    <head>
		<title></title>
        <link rel='stylesheet' type='text/css' href='http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	</head>
	<body>
        <div id="menu">
            <h3>Section 1</h3>
            <div>
                <p>I am the first section!</p>
            </div>
            <h3>Section 2</h3>
            <div>
                <p>I am the second section!</p>
            </div>
            <h3>Section3</h3>
            <div>
                <p>I am section 3!</p>
            </div>

        </div>
	</body>
</html>


// jQuery

$(document).ready(function(){
    $('#menu').accordion({collapsible: true});
});
