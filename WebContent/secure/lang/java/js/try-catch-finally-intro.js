
var intro;
	var typing_interval = 1;
	var typing_interval_autoNextStep = 30;

var tryCatchFinallyIntroReady = function() {
	intro = introJs();
	
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#mainMethodBlock",
			intro : "The above code demonstrates the working of <span class='ct-code-b-yellow'>try</span>, <span class='ct-code-b-yellow'>catch</span> and <span class='ct-code-b-yellow'>finally</span> <b>blocks</b>.",
		},
		{
			element : "#tryBlock",
			intro : "The block of code which is just after the <span class='ct-code-b-yellow'>try</span> keyword is called the <span class='ct-code-b-yellow'>try</span> <b>block</b>."
		},
		{
			element : "#catchBlock",
			intro : "The block of code which is just after the <span class='ct-code-b-yellow'>catch</span> keyword is called the <span class='ct-code-b-yellow'>catch</span> <b>block</b>.",
			highlightClass : "catch-finally-css",
			tooltipClass : "catch-finally-tooltip-css"
		},
		{
			element : "#finallyBlock",
			intro : "The block of code which is just after the <span class='ct-code-b-yellow'>finally</span> keyword is called the <span class='ct-code-b-yellow'>finally</span> <b>block</b>.",
			highlightClass : "catch-finally-css",
			tooltipClass : "catch-finally-tooltip-css"
		},
		{
			element : "#tryCatch",
			intro : "",
		},
		{
			element : "#tryFinally",
			intro : ""
		},
		{
			element : "#mainMethodBlock",
			tooltipClass : "hide"
		},
		{
			element : "#textLine",
			intro : "The reference <span class='ct-code-b-yellow'>text</span> is initialized to a value \"<b>3g</b>\"."
		},
		{
			element : "#valueLine",
			intro : "The variable <span class='ct-code-b-yellow'>value</span> is initialized to <b>0</b>."
		},
		{
			element : "#tryLine",
			intro : ""
		},
		{
			element : "#parseIntLine",
			intro : ""
		},
		{
			element : "#catchLine",
			intro : ""
		},
		{
			element : "#sopInsideCatch",
			tooltipClass: "hide"
		},
		{
			element : "#output",
			tooltipClass: "hide"
		},
		{
			element : "#printStackTraceLine",
			intro : ""
		},
		{
			element : "#output",
			tooltipClass: "hide"
		},
		{
			element : "#finallyLine",
			intro : "" 
		},
		{
			element : "#sopInsideFinally1",
			tooltipClass: "hide"
		},
		{
			element : "#output",
			tooltipClass: "hide"
		},
		{
			element : "#sopInsideFinally2",
			tooltipClass: "hide"
		},
		{
			element : "#output",
			tooltipClass: "hide"
		},
		{
			element : "#restartBtn",
			intro : "Click to restart.",
			position : "right"
		}
		]});
	
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "tryBlock":
			$('.introjs-prevbutton').show();
			$('.introjs-helperLayer').one('transitionend', function () {
				intro.refresh();
			});
			break;
		case "tryCatch":
			
			if (intro._direction == "backward") {
				$('#catchBlock').fadeIn(1);
				$('#finallyBlock').fadeOut(1);
			}
			
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-tooltiptext').typewriting("There can be a <span class='ct-code-b-yellow'>try</span> <b>block</b> followed by a <span class='ct-code-b-yellow'>catch</span> <b>block</b> without the <span class='ct-code-b-yellow'>finally</span> <b>block</b>.", {
				"typing_interval": typing_interval,
				"cursor_color": 'white'
			}, function() {
				$('.introjs-tooltiptext').removeClass('typingCursor');
				$('.finally').effect('highlight', {color : 'lightblue'}, 700, function() {
					$('#finallyBlock').fadeOut(1300, function() {
						$('.introjs-tooltip').hide();
						intro.refresh();
						$('.introjs-tooltip').addClass('tryCatch-tooltip-css').show();
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			
		case "finallyBlock":
			$('#finallyBlock').removeAttr('style');
			$('.introjs-helperLayer').one('transitionend', function () {
				intro.refresh();
			});
			break;
			
		case "valueLine":
			$('.introjs-nextbutton, .introjs-prevbutton').show();
			break;
			
		case "tryFinally":
			
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-tooltiptext').typewriting("Similarly there can be a <span class='ct-code-b-yellow'>try</span> <b>block</b> followed by a <span class='ct-code-b-yellow'>finally</span> <b>block</b> without a <span class='ct-code-b-yellow'>catch</span> <b>block</b>.", {
				"typing_interval": typing_interval,
				"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor');
					$('.catch').effect('highlight', {color : 'lightblue'}, 700, function() {
						$('#catchBlock').fadeOut(1300, function() {
							$('#finallyBlock').fadeIn(1300, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				});
			break;
		case "mainMethodBlock":
			if (intro._currentStep == 6) {
				if (intro._direction == "forward") {
					$('#catchBlock').show();
					$('.introjs-helperLayer').one('transitionend', function () {
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					});
				} else {
					//$('#catchBlock').hide();
					$('.introjs-helperLayer').one('transitionend', function () {
						setTimeout(function() {
							intro.previousStep();
						}, 500);
					});
				}
				
			} else if (intro._currentStep == 0) {
				$('.introjs-prevbutton').hide();
			}
			break;
		case "tryLine":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltiptext').typewriting("Control enters into the <span class='ct-code-b-yellow'>try</span> block.", {
						"typing_interval": typing_interval_autoNextStep,
						"cursor_color": 'white'
					}, function() {
						$('.introjs-tooltiptext').removeClass('typingCursor');
						setTimeout(function() {
							if (intro._direction == "forward") {
								intro.nextStep();
							} else {
								intro.previousStep();
							}
						}, 1000);
					});
				});
			
			break;
		case "parseIntLine":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltiptext').typewriting("The method <b>Integer.<span class='ct-code-b-yellow'>parseInt</span>(String str)</b> parses the String <b>str</b> and converts the contents to <b>int</b>. If the characters of <b>str</b> are not parsable to <b>int</b>, <span class='ct-code-b-yellow'>NumberFormatException</span> is thrown.", {
					"typing_interval": typing_interval,
					"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "catchLine":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltiptext').typewriting("Since the value referred by <span class='ct-code-b-yellow'>text</span> is \"<b>3g</b>\", where '<b>g</b>' is not parsable to a decimal <b>int</b>, <b>parseInt()</b> method throws a <b>NumberFormatException</b> which is caught by this <span class='ct-code-b-yellow'>catch</span> block.", {
					"typing_interval": typing_interval,
					"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "sopInsideCatch":
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					if (intro._direction == "forward") {
						intro.nextStep();
					} else {
						intro.previousStep();
					}
				}, 1000);
			});
			break;
		case "printStackTraceLine":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltiptext').typewriting("The <span class='ct-code-b-yellow'>printStackTrace()</span> method call on the reference <span " 
														+ "class='ct-code-b-yellow'>e</span> will print the trace of all the method calls stored in the " 
														+ "current method call stack.", {
					"typing_interval": typing_interval,
					"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "sopInsideFinally1":
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					intro.nextStep();
				}, 1000);
			});
			break;
		case "sopInsideFinally2":
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					intro.nextStep();
				}, 1000);
			});
			break;
		case "finallyLine":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltiptext').typewriting("The control enters into the <span class='ct-code-b-yellow'>finally</span> block after catch.", {
					"typing_interval": typing_interval_autoNextStep,
					"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor');
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
				});
			});
			break;
		case "output":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (intro._currentStep == 13) {
					$('#outputOfSopInsideCatch').typewriting("Unable to parse text as integer", {
						"typing_interval": typing_interval_autoNextStep,
						"cursor_color": 'white'
						}, function() {
							if (intro._direction == "forward") {
								$('#outputOfSopInsideCatch').removeClass('typingCursor');
								setTimeout(function() {
									intro.nextStep();
								}, 1000);
							} else {
								$('#outputOfSopInsideCatch').empty();
								setTimeout(function() {
									intro.previousStep();
								}, 1000);
							}
						
						});
				} else if (intro._currentStep == 15) {
					if (intro._direction == "forward") {
						$('#outputOfprintStackTraceLine1').fadeTo(1000, 1, function() {
							$('#outputOfprintStackTraceLine2').fadeTo(1000, 1, function() {
								$('#outputOfprintStackTraceLine3').fadeTo(1000, 1, function() {
									$('#outputOfprintStackTraceLine4').fadeTo(1000, 1, function() {
										$('#outputOfprintStackTraceLine5').fadeTo(1000, 1, function() {
											setTimeout(function() {
												intro.nextStep();
											}, 1000);
										});
									});
								});
							});
						});
					} else {
						$('[id*=outputOfprintStackTraceLine]').removeAttr('style');
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					}
					
				} else if (intro._currentStep == 18) {
					$('#outputOfSopInsideFinally1').typewriting("Inside finally block", {
						"typing_interval": typing_interval_autoNextStep,
						"cursor_color": 'white'
						}, function() {
							setTimeout(function() {
								if (intro._direction == "forward") {
									$('#outputOfSopInsideFinally1').removeClass('typingCursor');
									intro.nextStep();
								} else {
									$('#outputOfSopInsideFinally1').empty();
									intro.previousStep();
								}
							}, 1000);
						});
				} else if (intro._currentStep == 20) {
					$('#outputOfSopInsideFinally2').typewriting("Finally block is always executed", {
						"typing_interval": typing_interval_autoNextStep,
						"cursor_color": 'white'
						}, function() {
							$('#outputOfSopInsideFinally2').removeClass('typingCursor');
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						});
				}
			});
			break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltip').css('min-width','125px');
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		}
	});

	intro.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	
	$('body').keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
	
}