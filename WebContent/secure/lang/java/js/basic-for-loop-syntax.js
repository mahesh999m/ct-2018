var i_initial_value = 0;
var flag = true;
var basicForLoopSyntaxReady = function() {
	"use strict";
	introJsGuide();
	setInterval(function() {
		$('.output-console-body').scrollTop($('.output-console-body')[0].scrollHeight);
	}, 100);
	
	$("#initialization_Value, #condition_Value").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
	
		if (e.keyCode === 110 || e.keyCode === 190) {
			e.preventDefault();
		}
	
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max) {
			e.preventDefault();
		}
	});
	
	$('#restart').click(function() {
		location.reload();
	});
	
	$("#initialization_Value").keyup(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		$('.chage-value').text($(this).text());
		$('#cup_value').text($(this).text());
		if ($(this).text().length == 0) {
			$('.user-btn, .error').remove();
			$('.introjs-tooltiptext').append("<div class='error'>Empty values of not allowed.</div>");
		} else {
			$('.user-btn, .error').remove();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="iValueStorage()">Next &#8594;</a>');
		}
	});
	
	$("#condition_Value").keyup(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		if ($(this).text().length == 0) {
			$('.user-btn, .error').remove();
			$('.introjs-tooltiptext').append("<div class='error'>Empty values of not allowed.</div>");
		} else {
			$('.user-btn, .error').remove();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="iCondition()">Next &#8594;</a>');
		}
	});
	
	$("#initialization_Value").parent().click(function() {
		$("#initialization_Value").focus();
	});
	
	$("#condition_Value").parent().click(function() {
		$("#condition_Value").focus();
	});
}

function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": 1,
		"cursor_color": "white"
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function charAtEnd(elementId) {
	$('#' + elementId).select();
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function flipEffect(selector, val, callBackFunction) {
	$(selector).effect('highlight', {color: 'yellow'}, 500, function() {
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete: function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete: function() {
				callBackFunction();
			}});
		}});
	});
}


function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : '#forloop',
			intro : "",
			position : 'bottom'
		}, {
			element : '#initialization',
			intro : "",
			tooltipClass : 'hide',
			position : 'bottom',
		}, {
			element : '#condition',
			tooltipClass : 'hide',
			intro : "",
			position : 'bottom'
		}, {
			element : '#sop',
			intro : "",
			position : 'bottom'
		}, {
			element : '#outputMainDiv',
			intro : "",
			position : 'left',
			tooltipClass: 'hide'
		}, {
			element : '#increment',
			intro : "",
			tooltipClass : 'hide',
			position : 'bottom'
		}, {
      	   element : '#restart',
      	   intro:'Click to restart',
      	   position :'right'
        }]
	});
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', true);
	introjs.setOption('keyboardNavigation', false);
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-prevbutton, .introjs-nextbutton, .introjs-skipbutton, .introjs-bullets').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "forloop":
			$('h6').empty();
			$('.cup-bg, #cup_value').addClass('opacity00');
			break;
		case "initialization":
			flag = true;
			$('h6').empty();
			$('.cup-bg, #cup_value').addClass('opacity00');
		break;
		case "sop":
			$('.user-done-btn, .user-btn').remove();
			break;
			
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-prevbutton, .introjs-nextbutton, .introjs-skipbutton, .introjs-bullets').hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "forloop":
			var text = "<span>The above code demonstrates the working of a <b class='ct-code-b-yellow'>for-loop</b>.</span>";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "initialization":
			$('.introjs-helperLayer').one('transitionend', function () {
				i_initial_value = $('#initialization_Value').text();
				var text = "This is the <b class='ct-code-b-yellow'>initialization</b> section. Here a local variable <b class='ct-code-b-yellow'>i</b>"
					+" is declared and initialized to <b class='ct-code-b-yellow chage-value'>"+ i_initial_value +"</b>. You can also change the value "
					+"<b class='ct-code-b-yellow chage-value'>"+ i_initial_value +"</b> to any other number.";
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", text, function() {
					$('#initialization_Value').attr('contenteditable',true);
					charAtEnd("initialization_Value");
					$('h6').text($('#initialization_Value').text());
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="iValueStorage()">Next &#8594;</a>');
				});
			});
			break;
			
		case "condition":
			$('.user-btn').remove();
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "<span>This is the <b class='ct-code-b-yellow'>condition</b> part. If the condition evaluates to "
					+"<b class='ct-code-b-yellow'>true</b>, the control enters into the for-loop body.</span>"
					+"<br><span id='condition_Text' class='ct-code-b-yellow'></span><br><span id='conditionTyping'></span>";
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", text, function() {
					if (flag) {
						$('#condition_Value').attr('contenteditable',true);
						charAtEnd("condition_Value");
						$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="iCondition()">Next &#8594;</a>');
					} else {
						iCondition();
					}
					
				});
			});
			break;
		case "sop":
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "The above statement prints the value of <b class='ct-code-b-yellow'>i</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "outputMainDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "forward") {
					$('#output').append("<p>i value = <b class='ct-code-b-yellow'>"+ $('#cup_value').text() +"</b></p>");
					setTimeout (function() {
						introjs.nextStep();
					},500);
				} else {
					$('#output > :last-child').remove();
					$('h6').text(parseInt($('h6').text())-1);
					setTimeout (function() {
						introjs.previousStep();
					},500);
				}
				
			});
			break;
			
		case "increment":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltip').removeClass('hide');
				var text = "After executing the statements in the for-loop body the control is transferred to the"
					+" <b class='ct-code-b-yellow'>update</b> section<br>The post-increment operator increments the value of i by "
					+"<b class='ct-code-b-yellow'>1</b>.<br><span id='tooltipIIncrement'><span>";
				typing(".introjs-tooltiptext", text, function() {
					var countVal = +$('h6').text()+1;
					$('#tooltipIIncrement').append("<b>&nbsp;&nbsp; i = <b class='iFlip opacity00 ct-code-b-yellow'>"+ countVal +"</b></b>");
					$('h6').wrapInner('<span style="display:inline-block"></span>');
					flipEffect('h6 > span', +$('h6 > span').text()+1 , function() {
						$("h6 > span").contents().unwrap();
						$('.iFlip').offset($('h6').offset()).removeClass('opacity00');
						setTimeout (function() {
							TweenMax.to('.iFlip', 1 , { top : 0 , left : 0, onComplete : function() {
								$('.introjs-prevbutton').show();
								$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="introjs.goToStep(3)">Next &#8594;</a>');
							}});
						},500);
					});
				});
			});
			break;
			
		case "restart":
			$('h6').text($('#condition_Value').text());
			$('.user-btn, .user-done-btn').remove();
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restart").removeClass('opacity00');
			});
		break;
		
		}
	});
	introjs.start();
}

function iValueStorage() {
	$('[contenteditable]').attr('contenteditable',false);
	$('.user-btn').remove();
	$(".cup-bg").removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$(".cup-bg").removeClass('animated zoomIn');
		$('.introjs-helperLayer').css('z-index','1000000');
		$('#cup_value').offset($('#initialization_Value').offset()).removeClass('opacity00');
		setTimeout (function() {
			TweenMax.to('#cup_value', 1 , { top : -53 , left : 9, onComplete : function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			}});
		},500);
	});
}

function iCondition() {
	$('.user-btn').remove();
	$('[contenteditable]').attr('contenteditable',false);
	$('#condition_Text').append("<b id='i' style='display: inline-block'>i</b> < "+ $('#condition_Value').text() +"");
	$('#condition_Text').offset($('#condition').offset());
	TweenMax.to('#condition_Text', 1 , { top : 0 , left : 0, onComplete : function() {
		flipEffect('#i', $('h6').text() , function() {
			var cond = eval($('#cup_value').text() + "<" + $('#condition_Value').text());
			var text = "evaluates to <span id='condColor'>"+cond+"</span>";
			typing("#conditionTyping", text, function() {
				cond ? $('#condColor').addClass('ct-code-b-yellow') : $('#condColor').addClass('error');
				if (cond && flag) {
					flag = !flag;
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				} else if (cond) {
					$('.introjs-tooltipbuttons').prepend('<a class="introjs-button user-done-btn" onclick="done()">Done</a>');
					$('.introjs-nextbutton').show();
				} else {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="introjs.goToStep(7)">Next &#8594;</a>');
				}
			});
		});
	}});
}

function done() {  
	$(".user-done-btn").remove();
	var val1 = parseInt($('h6').text())-1;
	for (var i = val1 ; i < parseInt($('#condition_Value').text()) - 1; i++) {
    val1++;
    $('#output').append("<p>i value = <b class='ct-code-b-yellow'>"+ val1 +"</b></p>");
	}
	introjs.goToStep(7);
}

