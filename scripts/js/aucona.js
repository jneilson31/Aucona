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
$('.navIcons').click(function () {
	$('.navIcons').removeClass('active');
	$(this).addClass('active');
});

// Fade Out Icons for name replacement
$('#home').click(function () {
	$(this).css("opacity", "0");
});


