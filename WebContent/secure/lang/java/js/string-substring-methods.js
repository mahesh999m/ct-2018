
var content;
var editorText1;
function stringSubstringMethods() {
	$('#restartBtn').click(function() {
		location.reload();
	});
	introJsFunction();
	
	$("#editor1").keydown(function(e) { // conditions to enter text
			var max = $(this).attr("maxlength");

			if(e.which == 13 || e.which == 222) {
				e.preventDefault();
			}	
			
			if ($(this).text().length > max) {
				
				if(e.which == 8 || e.which == 46) {
		   			return true;	
				}
   			e.preventDefault();
		 	}
    });
	
	
	$("#editor1").keyup(function() {
    	introjs.refresh();
    	$('.input-val1').text($(this).text());
    	$(".tooltip-text-edit").text($("#givenText").text());
        if ($(this).text().length > 2) {
        	$('.error').remove();
        	$('.introjs-nextbutton, .introjs-prevbutton').show();
        } else {
        	$('.error').remove();
        	$('.introjs-tooltiptext').append('<span class="error"><br>Atleast 3 characters required.</span>');
        	$('.introjs-nextbutton, .introjs-prevbutton').hide();
        }
    });
	
	$("#oldChar, #newChar, #editor2").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		if(e.which == 13 || e.which == 222 || e.which == 32) {
			e.preventDefault();
		}	
		
		if ($(this).text().length > max) {
			if(e.which == 8 || e.which == 46 || e.which == 9 || e.which == 37 || e.which == 39){
	   			return true;	
			}
			e.preventDefault();
	 	}
	});
	
	$('#editor2').keyup(function(e) {
		singleParameterValidation();
	});
	
	$("#oldChar, #newChar").keyup(function(e) {
		doubleParameterValidation();
	});
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
				element : "#stringCode",
				intro : "",
			}, {
				element : "#textDiv",
				intro : "",
				tooltipClass:"hide",
			}, {
				element : "#mainAnimationDiv",
				intro : "",
				animateStep :"firstTime",
				tooltipClass:"hide",
			}, {
				element : "#sopLine",
				intro : "",
				tooltipClass:"hide",
			}, {
				element : "#mainAnimationDiv",
				intro : "",
				animateStep :"secondTime",
				tooltipClass:"hide",
			}, {
				element : "#consoleId",
				intro : "",
				animateStep :"firstSop",
				tooltipClass:"hide",
			}, {
				element : "#consoleId",
				intro : "",
				animateStep :"exception",
				tooltipClass:"hide",
			}, {
				element : "#consoleId",
				intro : "",
				animateStep :"exceptionSecond",
				tooltipClass:"hide",
			}, {
				element : "#sopLineOne",
				intro : "",
				tooltipClass:"hide",
			}, {
				element : "#mainAnimationDiv",
				intro : "",
				animateStep :"thirdTime",
				tooltipClass:"hide",
			},  {
				element : "#consoleId",
				intro : "",
				animateStep :"secondSop",
				tooltipClass:"hide",
			}, {
				element : "#restartBtn",
				intro : "",
				tooltipClass:"hide",
			},  {
				element : "#consoleId",
				intro : "",
				animateStep :"backward",
				tooltipClass:"hide",
			}]});
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "stringCode":
			$("#editor1").attr("contenteditable", false);
			break;
		case "textDiv":
			$('.temp').parent().remove();
			$('strong, #totalIndexDiv').addClass('opacity00');
			break;
		case "mainAnimationDiv":
			var animate = introjs._introItems[introjs._currentStep].animateStep;
			switch (animate) {
			case "firstTime":
				$('.temp').parent().remove();
				$('strong, #totalIndexDiv').addClass('opacity00');
				break;
			}
			break;
		case "consoleId":
			$('#consoleId').removeClass('opacity00');
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "stringCode":
			$("#editor1").attr("contenteditable", false);
			var text = "The above code demonstrates the working of commonly used <y>String methods</y>.";
			typing('.introjs-tooltiptext', text, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "textDiv":
			$('.user-btn').remove();
			$('.introjs-helperLayer').one('transitionend', function () {
				editorText1 = $('#editor1').text();
				$(".introjs-tooltip").removeClass('hide');
				var text = "This statement initializes the reference text with <y class='input-val1'>"+ editorText1 +"</y>.<br><br>"
					+"The text can be changed to any value whose length is between <y>3</y> and <y>10</y> charcters.";
				typing('.introjs-tooltiptext', text, 'white', function() {
					$("#editor1").attr("contenteditable", true);
					charAtEnd("editor1");
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "mainAnimationDiv":
			$('.has-class').removeClass("exception-triggered second-excep-triggered");
			var animate = introjs._introItems[introjs._currentStep].animateStep;
			$('.introjs-helperLayer').one('transitionend', function () {
				switch (animate) {
				case "firstTime":
					zoomInEffect('strong:eq(1)', function() {
						givenTween();
						var tl = new TimelineLite();
						tl.from(".box", 0.5, {opacity:0, y:-200, delay:0.5, onComplete : function() {
							zoomInEffect('strong:eq(0)', function() {
								$('#totalIndexDiv').removeClass('opacity00');
								tl.from(".circle", 0.4, {opacity:1, y:-200, delay:0.4, onComplete : function() {
									setTimeout (function() {
										if (introjs._direction == "forward") {
											introjs.nextStep();
										} else {
											introjs.previousStep();
										}
									}, 500);
								}});
							});
						}});
					});
					break;
				case "secondTime":
					$('strong').removeClass('opacity00');
					var parameter = $("#editor2").text();
					var text = "substring(<y class='blue'>"+ parameter +"</y>) of text: ";
					typing('#animationType', text, 'white', function() {
						var p = $('#editor2').text();
						var l = $('#editor1').text().length;
						circleAnimation(p,l,function() {
							resultTween(p,l);
							if (l == p) {
								setTimeout (function() {
									if ($('#outputDivFinal').hasClass('backward-dir')) {
										$('.backward-dir').removeClass('backward-dir');
										introjs.previousStep();
									} else {
										introjs.nextStep();
									}
								},500);
							} else {
								fromEffect("#totalValueDiv .box:eq("+p+")","#resultDiv .box",function() {
									setTimeout (function() {
										if ($('#outputDivFinal').hasClass('backward-dir')) {
											$('.backward-dir').removeClass('backward-dir');
											introjs.previousStep();
										} else {
											introjs.nextStep();
										}
									},500);
								});
							}
							
						});
					});
					break;
				case "thirdTime":
					var text = "substring(<y class='blue'>"+ $("#oldChar").text() +"</y>,<y class='blue'>"+ $("#newChar").text() +"</y>) of the text: ";
					typing('#animationType', text, 'white', function() {
						var p = $('#oldChar').text();
						var l = $('#newChar').text();
						circleAnimation(p,l,function() {
							resultTween(p,l);
							if (l == p) {
								setTimeout (function() {
									introjs.nextStep();
								},500);
							} else {
								fromEffect("#totalValueDiv .box:eq("+p+")","#resultDiv .box",function() {
									setTimeout (function() {
										introjs.nextStep();
									},500);
								});
							}
							
						});
					});
					break;
				}
				
			});
			break;
		case "sopLine":
			$('.green-circle').removeClass('green-circle');
			$('#resultDiv, #animationType').empty();
			$('.exception').addClass('display-none');
			$('.range').empty();
			$('.fade').removeAttr('style');
			$('.user-btn').remove();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass('hide');
				
				if ($("#sopLine").hasClass("exception-triggered")) {
					var boundIndex = $('#editor2').text();
					var enteredString = $('#editor1').text();
					var leng = $('#editor1').text().length;
					var limit = leng;
					var text = "Change the index (<y>"+ boundIndex +"</y>) provided to the <y>substring(int index)</y> method such that the index is  "
						+" between the bounds of the string.The currrent string's (<y>"+ enteredString +"</y>) length is <y>"+ leng +"</y>, "
						+"  hence a valid index can be any value between <y>0</y> and <y>"+ limit +"</y> (inclusive).";
				} else {
					var text = "The <y>substring(int beginIndex)</y> method returns a new string with all "
						+"the characters starting at the given <y>beginIndex</y> in the original string till the last character.";
				}
				
				typing('.introjs-tooltiptext', text, 'white', function() {
					$('#editor2').attr('contenteditable',true);
					charAtEnd("editor2");
					singleParameterValidation();
				});
			});
			break;
			
		case "sopLineOne":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.exception').addClass('display-none');
			$('.fade').removeAttr('style');
			$('.user-btn, .user-btn-back, .user-btn').remove();
			$('.green-circle').removeClass('green-circle');
			$('#resultDiv, #animationType, .range').empty();
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass('hide');
				if ($("#sopLineOne").hasClass("second-excep-triggered")) {
					var boundIndex1 = $('#oldChar').text();
					var boundIndex2 = $('#newChar').text();
					var enteredString = $('#editor1').text();
					var leng = $('#editor1').text().length;
					var limit = leng;
					var text = "Change the Indices (<y>"+ boundIndex1 +"</y>,<y>"+ boundIndex2 +"</y>) provided to the <y>substring(int beginIndex, "
						+"int endIndex)</y> method such that the index is  "
						+" between the bounds of the string.<br>The currrent string's (<y>"+ enteredString +"</y>) length is <y>"+ leng +"</y>, "
						+"  hence a valid index can be any value between <y>0</y> and <y>"+ limit +"</y> (inclusive).";
				} else {
					var text = "The <y>substring(int beginIndex, int endIndex)</y> method returns a new string with all the characters "
						+"between given <y>beginIndex</y> and <y>endIndex</y> in the original string."
				}
				
				
				typing('.introjs-tooltiptext', text, 'white', function() {
					$('#oldChar, #newChar').attr('contenteditable',true);
					charAtEnd("oldChar");
					doubleParameterValidation();
				});
			});
			
			break;
		case "consoleId":
			$('.user-btn, .user-btn-back').remove();
			var animate = introjs._introItems[introjs._currentStep].animateStep;
			$('.introjs-helperLayer').one('transitionend', function () {
				switch(animate) {
				case "firstSop":
					var finalResult = $('#resultDiv .letter').text();
					var text = "text.substring("+ $('#editor2').text() +") = <y>"+finalResult+"</y> ";
					typing('#outputDivFinal', text, 'white', function() {
						setTimeout (function() {
							introjs.goToStep(9);
						}, 1500);
					});
					break;
				case "exception":
					$('.exception').removeClass('display-none');
					var range = $("#editor1").text().length - +$('#editor2').text();
					exceptionReveal(range,4);
					break;
				case "exceptionSecond":
					$('.exception').removeClass('display-none');
					var len = $('#editor1').text().length;
					var begin = +$('#oldChar').text();
					var end = +$('#newChar').text();
					var range;
					if (begin > end) {
						if (begin >= len && end <= len ) {
							range = end - begin;
						} else {
							range = end;
						}
					} else {
						range = end;
					}
					
					exceptionReveal(range,9);
					
					break;
					
				case "secondSop":
					var begin = $('#oldChar').text();
					var end = $('#newChar').text();
					var finalResult = $('#resultDiv .letter').text();
					var text = "text.substring("+ begin +","+ end + ") = <y>"+ finalResult +"</y>";
					typing('#outputDivFinalResult', text, 'white', function() {
						setTimeout (function() {
							introjs.nextStep();
						}, 1500);
					});
					break;
				case "backward":
					$("#outputDivFinal").empty().addClass("backward-dir");
					setTimeout (function() {
						exceptionFucntion(5);
					}, 1500);
					break;
				}
			});
			
			
			break;
		case "restartBtn":
			$('.introjs-tooltip').css('min-width','125px');
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#restartBtn').removeClass('opacity00');
				$('.introjs-tooltip').removeClass('hide');
				var text = "Click to restart.";
				typing('.introjs-tooltiptext', text, 'white', function() {
				});
			});
			break;
		}
	});
	introjs.start();
}

function typing(typingId, typingContent, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": 1,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		callBackFunction();
	});
}

function givenTween() {		 //function for given string
	content = $('#editor1').text();
	for(var i = 0; i < content.length; i++) {
		$("#totalIndexDiv").append("<span><span id='index"+i+"' class='circle temp'><b class='indexLetter'>" + i + "</b></span>&nbsp;</span>");
		$("#totalValueDiv").append("<span><span class='box green temp'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;</span>");						
	}
}

function resultTween(p,l) {	  //function for RESULT string
	for(var i = p; i < l; i++) {
		$("#resultDiv").append("<span><span class='box green temp1'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;</span>");						
	}
}


function circleAnimation(p, l, callBackFunction) {
	if (p < l) {
		$('#index'+p).addClass('green-circle');
		setTimeout(function(){
			circleAnimation(++p, l, callBackFunction);
		},500);
	} else {
		callBackFunction();
	}
}


function exceptionFucntion(val) {
	$('.user-btn, .user-btn-back').remove();
	introjs.goToStep(val);
}

function exceptionReveal(range, val) {
	$('.range').append(range);
	TweenMax.to($(".fade:eq(0)"),0.5,{opacity:1,onComplete: function() {
		TweenMax.to($(".fade:eq(1)"),0.5,{opacity:1,onComplete: function() {
			TweenMax.to($(".fade:eq(2)"),0.5,{opacity:1,onComplete: function() {
				$(".introjs-tooltip").removeClass('hide');
				var text = "<y>StringIndexOutOfBoundsException</y> indicates that we are trying to access a char "
					+"with an index which is <y>out</y> of bounds, meaning <y>greater</y> than the index of the <y>last</y> "
					+"character in the <y>String</y>.";
				typing('.introjs-tooltiptext', text, 'white', function() {
					if (val == 4) {
						$('#sopLine').addClass('exception-triggered has-class');
					} else {
						$('#sopLineOne').addClass('second-excep-triggered has-class');
					}
					$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn'"
							+" onClick='introjs.goToStep("+val+")'>Next &#8594;</a>");
				});
			}});
		}});
	}});
}

function singleParameterValidation() {
	$('#onlyVal').text($('#editor2').text());
	if ($('#editor1').text().length >= +$('#editor2').text() &&($('#editor2').text().length ==  1 && Number.isInteger(+$('#editor2').text()))) {
		$('.error, .user-btn').remove();
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	} else if ($('#editor2').text().length ==  1 && Number.isInteger(+$('#editor2').text())) {
		$('.error, .user-btn').remove();
		$('.introjs-prevbutton').show();
		$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn' onClick='exceptionFucntion("+7+")'>Next &#8594;</a>");
	} 
	if ($('#editor2').text().length == 0) {
		$('.error, .user-btn').remove();
		$('.introjs-tooltiptext').append('<span class="error"><br>Empty value not allowed.</span>');
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
	}
	
	if ($('#editor2').text().length ==  1 && !(Number.isInteger(+$('#editor2').text()))) {
		$('.error, .user-btn').remove();
		$('.introjs-tooltiptext').append('<span class="error"><br>Index value must be number.</span>');
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
	}
}

function doubleParameterValidation() {
	$('#oldCh').text($('#oldChar').text());
	$('#newCh').text($('#newChar').text());
	if ($('#editor1').text().length >= $("#oldChar").text() && $('#editor1').text().length >= $("#newChar").text() && $("#oldChar").text() <= $("#newChar").text()) {
		if ($("#oldChar").text().length ==  1 && $("#newChar").text().length ==  1 && Number.isInteger(+$("#newChar").text()) && Number.isInteger(+$("#oldChar").text())) {
			$('.error, .user-btn, .user-btn-back').remove();
			$('.introjs-tooltipbuttons').prepend("<a class='introjs-button user-btn-back' onClick='exceptionFucntion("+13+")'>&#8592; Back</a>");
			$('.introjs-nextbutton').show();
		}
	}
	
	if (!($('#editor1').text().length >= $("#oldChar").text() && $('#editor1').text().length >= $("#newChar").text() && $("#oldChar").text() <= $("#newChar").text())) {
		if ($("#oldChar").text().length ==  1 && $("#newChar").text().length ==  1 && Number.isInteger(+$("#newChar").text()) && Number.isInteger(+$("#oldChar").text())) {
			$('.error, .user-btn, .user-btn-back').remove();
			$('.introjs-tooltipbuttons').prepend("<a class='introjs-button user-btn-back' onClick='exceptionFucntion("+13+")'>&#8592; Back</a>");
			$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn' onClick='exceptionFucntion("+8+")'>Next &#8594;</a>");
		}
	}
	
	
	if ($("#oldChar").text().length == 0 || $("#newChar").text().length == 0 ) {
		$('.error, .user-btn, .user-btn-back').remove();
		$('.introjs-tooltiptext').append('<span class="error"><br>Empty value not allowed.</span>');
		$('.introjs-nextbutton').hide();
	}
	
	if (($("#oldChar").text().length ==  1 && !(Number.isInteger(+$("#oldChar").text()))) || ($("#newChar").text().length ==  1 && !(Number.isInteger(+$("#newChar").text())))) {
		$('.error, .user-btn, .user-btn-back').remove();
		$('.introjs-tooltiptext').append('<span class="error"><br>Index value must be number.</span>');
		$('.introjs-nextbutton').hide();
	}
}

function fromEffect(fromId, toId, callBackFunction) {
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(toId).removeClass('opacity00');
	TweenMax.from($(toId), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


