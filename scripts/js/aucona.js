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

//alternating text on homepage

$(function () {
	count = 0;
	personalAdj = ["UX Designer", "Frontend Developer"];
	setInterval(function () {
		count++;
		$(".altText").fadeOut(400, function () {
			$(this).text(personalAdj[count % personalAdj.length]).fadeIn(400);
		});
	}, 3000);
});

//Work Slide in Function
$('.box-wrapper').each(function (index, element) {

	setTimeout(function () {
		element.classList.remove('loading');
	}, index * 500);

});

