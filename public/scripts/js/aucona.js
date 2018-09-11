// Change colors on Hover
$(".changeColor").mouseenter(function () {
	$(this).css("color", "red");
})

$(".changeColor").mouseleave(function () {
	$(this).css("color", "fff");
})

//Toggle Hamburger Menu for Secondary Nav
$("#nav-icon").click(function () {
	console.log("clickedHamburger")
	$("#hamburgerMenu").toggleClass("navShow");
	$(".headerBackgroundAbout").toggleClass("active");
	$("#top").toggleClass("active");
	$("#topWork").toggleClass("active");
});

$(document).ready(function () {
	$('#nav-icon').click(function () {
		$(this).toggleClass('open');
	});
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
// $('.box-wrapper').each(function (index, element) {
// 	setTimeout(function () {
// 		element.classList.remove('loading1');
// 	}, index * 500);
// 	setTimeout(function () {
// 		element.classList.remove('loading2');
// 	}, index * 500);
// });

$('.mySkillsHeader').each(function (index, element) {
	setTimeout(function () {
		element.classList.remove('loading');
	}, index * 500);
});

//Scroll to top of Page Function
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		$("#scrollBtn").fadeIn(1000);
		// document.getElementById("scrollBtn").style.display = "block";
		
	} else {
		$("#scrollBtn").fadeOut(1000);
		// document.getElementById("scrollBtn").style.display = "none";
	}
}

$("#scrollBtn").click(function () {
	$('html,body').animate({
		scrollTop: $("#top").offset().top
	},
		'slow');
});

// Select all links with hashes
// $('a[href*="#"]')
// 	// Remove links that don't actually link to anything
// 	.not('[href="#"]')
// 	.not('[href="#0"]')
// 	.click(function (event) {
// 		// On-page links
// 		if (
// 			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
// 			&&
// 			location.hostname == this.hostname
// 		) {
// 			// Figure out element to scroll to
// 			var target = $(this.hash);
// 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 			// Does a scroll target exist?
// 			if (target.length) {
// 				// Only prevent default if animation is actually gonna happen
// 				event.preventDefault();
// 				$('html, body').animate({
// 					scrollTop: target.offset().top
// 				}, 1000, function () {
// 					// Callback after animation
// 					// Must change focus!
// 					var $target = $(target);
// 					$target.focus();
// 					if ($target.is(":focus")) { // Checking if the target was focused
// 						return false;
// 					} else {
// 						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
// 						$target.focus(); // Set focus again
// 					};
// 				});
// 			}
// 		}
// 	});


setTimeout(function () {
	$('.skillsThumbnails1').addClass('magictime boingInUp');
}, 1000);

setTimeout(function () {
	$('.skillsThumbnails2').addClass('magictime boingInUp');
}, 1250);

setTimeout(function () {
	$('.skillsThumbnails3').addClass('magictime boingInUp');
}, 1500);

setTimeout(function () {
	$('.skillsThumbnails4').addClass('magictime boingInUp');
}, 1750);

setTimeout(function () {
	$('.skillsThumbnails5').addClass('magictime boingInUp');
}, 2000);

setTimeout(function () {
	$('.skillsThumbnails6').addClass('magictime boingInUp');
}, 2250);

setTimeout(function () {
	$('.caseStudyTitle').addClass('magictime boingInUp');
	$('.thumbnail').addClass('magictime spaceInDown');
	$('.loadContact').addClass('magictime spaceInDown');
}, 500);




	

