/*
Creating HTML Elements
Dynamically adding elements to our HTML page is a powerful tool—it lets us modify not only the formatting,
but the actual structure of our websites in response to a user's actions. For example, when you get a Gchat,
each message is actually a new <div> being dynamically added to the page. Cool, right?

If you think about it, we've sort of done this already: all we're doing is setting a variable equal to a jQuery object.
In this case, however, instead of just having something like:

$p = $('p');
We'll want to pass in an entire HTML element in quotes:

$p = $("<p>I'm a new paragraph!</p>");
When we put text in quotes like this, we call it a string (as in a "string of characters"). From now on, when we say "string,"
you can think "text" or "phrase." Strings are always in single or double quotes.

Inserting Elements
We can insert our newly created elements using a few jQuery actions.

.append() inserts the specified element as the last child of the target element. .prepend() inserts the specified
element as the first child of the target element. If we have a div of class .info,

$(".info").append("<p>Stuff!</p>");
$(".info").prepend("<p>Stuff!</p>");
will add a paragraph containing the text "Stuff!" inside all divs of class .info. .append() will make the paragraph the
last child of each div; .prepend() will make the paragraph the first child of each div. (Note: see the Hint if you're using single quotes.)

.appendTo() does the same as .append(), but it just reverses the order of "what to add" and "where to add it." The code

$('<p>Stuff!</p>').appendTo('.info');
has the same effect as the .append() code above. .prependTo() has a similar relationship to .prepend().

Before and After
We can specify where in the DOM we insert an element with the .before() and .after() functions. The syntax looks like this:

$('target').after('<tag>To add</tag>');
Where 'target' is the element after which you want to add something and the bit between <tag>s is the HTML element you want to add.
You can add <h1>s, <div>s, or any other valid HTML you like.

Moving Elements Around
Moving elements around in the DOM is a snap—all we need to do is use the jQuery functions we just learned on existing elements instead of creating new ones.

var $paragraph = $("p"); // existing element
$("div").after($paragraph); // Move it!
// Same as:
$("div").after($("p"));
We can select an element using $("p") and assign it to a variable
We can move the position in the DOM by using the variable in our after() statement
Note: This does not copy the element from one location to another, it moves the original element effectively saving you from having to
delete the original

Removing Elements
Adding elements to our HTML documents is great, but without the ability to remove them, our pages can quickly become cluttered.
Thankfully, we have two jQuery functions, .empty() and .remove(), that help us delete content from our pages.

.empty() deletes an element's content and all its descendants. For instance, if you .empty() an 'ol', you'll also remove all its 'li's
and their text.

.remove(), not only deletes an element's content, but deletes the element itself.

Adding and Removing Classes
We don't have to limit ourselves to adding or removing entire elements, though—we can fine-tune our jQuery superpowers to alter classes, CSS, and even the contents of our HTML elements.

Let's start with classes. jQuery includes two functions, .addClass() and .removeClass(), that can be used to add or remove a class from an element. This is great if, for example, you have a highlighted class that you want to apply to an element when clicked.

The syntax looks like this:

$('selector').addClass('className');
$('selector').removeClass('className');
where 'selector' is the HTML element you want and 'className' is the class name you want to add or remove.

Remember: You aren't selecting anything, you are modifying your element. This means that you do not need # or . before your class.

Adding and Removing Classes
We don't have to limit ourselves to adding or removing entire elements, though—we can fine-tune our jQuery superpowers to alter classes, CSS, and even the contents of our HTML elements.

Let's start with classes. jQuery includes two functions, .addClass() and .removeClass(), that can be used to add or remove a class from an element. This is great if, for example, you have a highlighted class that you want to apply to an element when clicked.

The syntax looks like this:

$('selector').addClass('className');
$('selector').removeClass('className');
where 'selector' is the HTML element you want and 'className' is the class name you want to add or remove.

Remember: You aren't selecting anything, you are modifying your element. This means that you do not need # or . before your class.


*/

$(document).ready(function(){
    $('#text').click(function(){  //attatches the click event to the div with the text id
        $('#text').addClass('highlighted'); //adds the highighted class to the div with the text id when clicked
    });
});


/*
Toggling Classes
What if we want to toggle a class back and forth, though? That is, what if we want jQuery to automatically check to see
whether our #text is .highlighted, so that when we click on it, it adds the class if it isn't there and removes it if it is?

As you probably guessed, jQuery includes a .toggleClass() function that does exactly this. If the element it's called on
has the class it receives as an input, .toggleClass() removes that class; if the target element doesn't have that class, .toggleClass() adds it.
*/

$(document).ready(function(){
    $('#text').click(function(){
        $('#text').toggleClass('highlighted'); //clicking the element changes (toggles) it from highlighted to not-highlighted and vice-versa
    });
});
