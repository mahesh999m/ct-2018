
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
	
	$('#sopLine').click(function() { 
		charAtEnd('editor2');
	});
	
	
	$('#textDiv').click(function() { 
		charAtEnd('editor1');
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
	
	$("#editor2").keydown(function(e) { // conditions to enter text
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
	
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
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
			},  {
				element : "#sopLowerCase",
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
				element : "#sopUpperCase",
				intro : "",
				tooltipClass:"hide",
			}, {
				element : "#mainAnimationDiv",
				intro : "",
				animateStep :"fourthTime",
				tooltipClass:"hide",
			}, {
				element : "#consoleId",
				intro : "",
				animateStep :"thirdSop",
				tooltipClass:"hide",
			}, {
				element : "#sopLength",
				intro : "",
				tooltipClass:"hide",
			}, {
				element : "#mainAnimationDiv",
				intro : "",
				animateStep :"fifthTime",
				tooltipClass:"hide",
			}, {
				element : "#consoleId",
				intro : "",
				animateStep :"fourthSop",
				tooltipClass:"hide",
			}, {
				element : "#restartBtn",
				intro : "",
				tooltipClass:"hide",
			}, {
				element : "#consoleId",
				intro : "",
				animateStep :"exception",
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
			$('.back-ward-direction').removeClass('back-ward-direction');
			$('.user-btn').remove();
			$('.has-class').removeClass("exception-triggered");
			var animate = introjs._introItems[introjs._currentStep].animateStep;
			$('.introjs-helperLayer').one('transitionend', function () {
				switch (animate) {
				case "firstTime":
					zoomInEffect('strong:eq(1)', function() {
						$(".introjs-tooltip").removeClass('hide');
						var text = "A <y>String</y> is made up of a sequence of characters.<br>These characters are "
									+"stored in a character array inside a <y>String object</y>.";
						typing('.introjs-tooltiptext', text, 'white', function() {
							givenTween();
							var tl = new TimelineLite();
							tl.from(".box", 0.5, {opacity:0, y:-200, delay:0.5, onComplete : function() {
								zoomInEffect('strong:eq(0)', function() {
									$('#totalIndexDiv').removeClass('opacity00');
									tl.from(".circle", 0.4, {opacity:1, y:-200, delay:0.4, onComplete : function() {
										setTimeout (function() {
											$('.introjs-nextbutton, .introjs-prevbutton').show();
										}, 500);
									}});
								});
							}});
						});
					});
					break;
				case "secondTime":
					$('strong').removeClass('opacity00');
					var parameter = $("#editor2").text();
					var text = "Character at index <y class='blue'>"+ parameter +"</y> : ";
					typing('#animationType', text, 'white', function() {
						var p = $('#editor2').text();
						var l = +p + 1;
						circleAnimation(p,l,function() {
							resultTween(p,l);
							fromEffect("#value"+p,"#resultDiv .box", function() {
								introJsStep();
							});
						});
					});
					break;
				case "thirdTime":
					caseAnimation("lower",true);
					break;
				case "fourthTime":
					caseAnimation("upper",false);
					break;
				case "fifthTime":
					var text ="Length of the text : ";
					typing('#animationType', text, 'white', function() {
						$('#resultDiv').append("<span id='countLength' class='count-length'></span>");
						animationEffect(0);
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
					var text = "Change the index (<y>"+ boundIndex +"</y>) provided to the <y>charAt(int index)</y> method such that the index is  "
						+" between the bounds of the string.The currrent string's (<y>"+ enteredString +"</y>) length is <y>"+ leng +"</y>, "
						+"  hence a valid index can be any value between <y>0</y> and <y>"+ limit +"</y>(inclusive).";
				} else {
					var text = "The <y>charAt(int index)</y> method returns the character at the given index.";
				}
				
				typing('.introjs-tooltiptext', text, 'white', function() {
					$('#editor2').attr('contenteditable',true);
					charAtEnd("editor2");
					singleParameterValidation();
				});
			});
			break;
			
		case "sopLowerCase":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.green-circle').removeClass('green-circle');
			$('#resultDiv, #animationType').empty();
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass('hide');
				var text = "The <y>toLowerCase()</y> method returns a new string with all the characaters in "
							+"the current string converted to lower case.";
				typing('.introjs-tooltiptext', text, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			
			break;
			
		case "sopUpperCase":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.green-circle').removeClass('green-circle');
			$('#resultDiv, #animationType').empty();
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass('hide');
				var text = "The <y>toUpperCase()</y> method returns a new string with all the characaters in "
							+"the current string converted to upper case.";
				typing('.introjs-tooltiptext', text, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "sopLength":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.green-circle').removeClass('green-circle');
			$('#resultDiv, #animationType').empty();
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass('hide');
				
				var text = "The <y>length()</y> method returns the length of the String i.e the "
							+"count of characters present in string reffered by text.";
				
				typing('.introjs-tooltiptext', text, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "consoleId":
			$('.user-btn, .user-btn-back').remove();
			$('#consoleId').addClass('back-ward-direction');
			var animate = introjs._introItems[introjs._currentStep].animateStep;
			$('.introjs-helperLayer').one('transitionend', function () {
				switch(animate) {
				case "firstSop":
					var finalResult = $('#resultDiv .letter').text();
					var text = "text.charAt("+ $('#editor2').text() +") = <y>"+finalResult+"</y> ";
					typing('#outputDivFinal', text, 'white', function() {
						introJsStep();
					});
					break;
				case "exception":
					$('.back-ward-direction').removeClass('back-ward-direction');
					$('.exception').removeClass('display-none');
					var range = +$('#editor2').text();
					exceptionReveal(range,4);
					break;
					
				case "secondSop":
					var finalResult = $('#resultDiv .letter').text();
					var text = "text.toLowerCase() = <y>"+ finalResult +"</y>";
					typing('#outputDivFinalResult', text, 'white', function() {
						introJsStep();
					});
					break;
				case "thirdSop":
					var finalResult = $('#resultDiv .letter').text();
					var text = "text.toUpperCase() = <y>"+ finalResult +"</y>";
					typing('#consoleUpperCaseSop', text, 'white', function() {
						introJsStep();
					});
					break;
				case "fourthSop":
					var finalResult = $('.count-length').text();
					var text = "text.length() = <y>"+ finalResult +"</y>";
					typing('#consoleLengthSop', text, 'white', function() {
						introJsStep();
					});
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

function givenTween() {	 //function for given string
	content = $('#editor1').text();
	for(var i = 0; i < content.length; i++) {
		$("#totalIndexDiv").append("<span><span id='index"+i+"' class='circle temp'><b class='indexLetter'>" + i + "</b></span>&nbsp;</span>");
		$("#totalValueDiv").append("<span><span id='value"+i+"' class='box green temp'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;</span>");						
	}
}

function resultTween(p,l) {	  //function for RESULT string
	for(var i = p; i < l; i++) {
		$("#resultDiv").append("<span><span class='box green temp1 opacity00'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;</span>");						
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
				TweenMax.to($(".fade:eq(3)"),0.5,{opacity:1,onComplete: function() {
					$(".introjs-tooltip").removeClass('hide');
					var text = "<y>StringIndexOutOfBoundsException</y> indicates that we are trying to access a char "
						+"with an index which is <y>out</y> of bounds, meaning <y>greater</y> than the index of the <y>last</y> "
						+"character in the <y>String</y>.";
					typing('.introjs-tooltiptext', text, 'white', function() {
							$('#sopLine').addClass('exception-triggered has-class');
						$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn'"
								+" onClick='introjs.goToStep("+val+")'>Next &#8594;</a>");
					});
				}});
			}});
		}});
	}});
}

function fromEffect(fromId, toId, callBackFunction) {
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(toId).removeClass('opacity00');
	TweenMax.from($(toId), 1, {top: topLength, left: leftLength, onComplete: function() {
		callBackFunction();
	}});
}

function flipEffect(selector, val,callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete: function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0,onComplete: function(){
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
		
	}});
}

function caseAnimation(val,flag) {
	var text = "New string "+ val +" case :";
	typing('#animationType', text, 'white', function() {
		var p = 0;
		var l = $('#editor1').text().length;
		resultTween(p,l);
		var tl = new TimelineLite();
		$('#resultDiv .box').removeClass('opacity00');
		tl.from("#resultDiv .box", 1.0, {opacity:0, y: -50, delay: 0.5, onComplete : function() {
			for (var i = 0 ; i < l; i++ ) {
				if (flag) {
					flipEffect("#resultDiv .box:eq("+i+") b",$('#resultDiv .box:eq('+i+') b').text().toLowerCase());
				} else {
					flipEffect("#resultDiv .box:eq("+i+") b",$('#resultDiv .box:eq('+i+') b').text().toUpperCase());
				}
				
			}
			introJsStep();
		}});
	});
}

function singleParameterValidation() {
	$('#onlyVal').text($('#editor2').text());
	if ($('#editor1').text().length > +$('#editor2').text() &&($('#editor2').text().length ==  1 && Number.isInteger(+$('#editor2').text()))) {
		$('.error, .user-btn').remove();
		$('.introjs-nextbutton, .introjs-prevbutton').show();
		
	} else if ($('#editor2').text().length ==  1 && Number.isInteger(+$('#editor2').text())) {
		$('.error, .user-btn').remove();
		$('.introjs-prevbutton').show();
		$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn' onClick='exceptionFucntion("+17+")'>Next &#8594;</a>");
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

function animationEffect(i) {
	var string = $("#editor1").text();
	$("#value" + i).effect( "transfer", { to: $("#index" + i), className: "ui-effects-transfer" }, 500 , function() {
		$("#countLength").text(i + 1);
		if (i == (string.length - 1)) {
			setTimeout(function() {
				introjs.nextStep();
			},500);
		} else {
			$("#index" + i).effect( "transfer", { to: $("#value" + (i + 1)), className: "ui-effects-transfer" }, 1000 , function() {
				if ( i < string.length) {
					animationEffect(++i);
				}
			});
      	}
	});
}

function introJsStep() {
	setTimeout (function() {
		if (introjs._direction == "forward") {
			introjs.nextStep();
		} else {
			if ($('#consoleId').hasClass('back-ward-direction')) {
				$('p:contains("=")').last().empty();
			}
			introjs.previousStep();
		}
	}, 1500);
}



