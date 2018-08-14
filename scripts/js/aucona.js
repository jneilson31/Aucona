// Change colors on Hover
$(".changeColor").mouseenter(function () {
	$(this).css("color", "red");
})

$(".changeColor").mouseleave(function () {
	$(this).css("color", "fff");
})

//Toggle Hamburger Menu for Secondary Nav
$(".hamburger").click(function () {
	console.log("clickedHamburger")
	$("#hamburgerMenu").toggleClass("navShow");
});

// Code to change from Active to inactive
$('#hamburgerMenu a').click(function () {
	$('#hamburgerMenu li').removeClass('active');
	$(this).closest('li').addClass('active');
});

