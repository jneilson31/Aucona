// Hovering over letters will change the Color

$(".changeColor").mouseenter(function () {
	$(this).css("color", "red");
})

$(".changeColor").mouseleave(function () {
	$(this).css("color", "white");
})


$(".hamburger").click(function () {
	console.log("clickedHamburger")
	$("#hamburgerMenu").toggleClass("navShow");
});

$('.navIcons').click(function () {
	$('.navIcons').removeClass('active');
	$(this).addClass('active');
});

