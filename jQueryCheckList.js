/*
Set Up
All right! It's time to apply our newfound knowledge. In this section, we'll build an
interactive "to do" list that will add items to a checklist and remove them as they're checked off.

We've provided the necessary HTML and CSS; you'll provide the jQuery.
*/
// HTML

<!DOCTYPE html>
<html>
    <head>
    	<title>To Do</title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
	</head>
	<body>
		<h2>To Do</h2>
		<form name="checkListForm">
			<input type="text" name="checkListItem"/>
		</form>
		<div id="button">Add!</div>
		<br/>
		<div class="list"></div>
	</body>
</html>


//CSS

h2 {
    font-family:arial;
}

form {
    display: inline-block;
}

#button{
    display: inline-block;
    height:20px;
	width:70px;
	background-color:#cc0000;
	font-family:arial;
	font-weight:bold;
	color:#ffffff;
	border-radius: 5px;
	text-align:center;
	margin-top:2px;
}

.list {
	font-family:garamond;
	color:#cc0000;
}


// jQuery

$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });

    $(document).on('click', '.item', function(){
        $(this).remove();
    });
});
