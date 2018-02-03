
var content;
var editorText1;
function stringRepalceMethods() {
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
	
	$("#oldChar, #newChar").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		if(e.which == 13 || e.which == 222) {
			e.preventDefault();
		}	
		
		
		if ($(this).text().length > max) {
			if(e.which == 8 || e.which == 46 || e.which == 9 || e.which == 37 || e.which == 39){
	   			return true;	
			}
			e.preventDefault();
	 	}
	});
	
	$(".key").keyup(function(e) {
		
		var ele = $(this).attr('id');
		if (ele == "oldChar") {
			$('#oldCh').text($('#oldChar').text());
		} else {
			$('#newCh').text($('#newChar').text());
		}
		
		 if ($(this).text().length ==  1) {
	        	$('.error').remove();
	        	$('.introjs-nextbutton, .introjs-prevbutton').show();
	        } else {
	        	$('.error').remove();
	        	$('.introjs-tooltiptext').append('<span class="error"><br>Empty values not allowed.</span>');
	        	$('.introjs-nextbutton, .introjs-prevbutton').hide();
	        }
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
			},{
			element : "#mainAnimationDiv",
			intro : "",
			animateStep :"secondTime",
			tooltipClass:"hide",
			}, {
			element : "#consoleId",
			intro : "",
			tooltipClass:"hide",
			}, {
			element : "#restartBtn",
			intro : "",
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
					var firstVal = $('#oldChar').text();
					var secondVal = $("#newChar").text();
					var text = "New string after replacing <b class='error'>"+ firstVal +"</b> by <b class='blue'>"+ secondVal +"</b>:";
					typing('#animationType', text, 'white', function() {
						resultTween();
						var tl = new TimelineLite();
						tl.from("#resultDiv .box", 1.0, {opacity:0, y: -50, delay: 0.5, onComplete : function() {
							var l = $('#editor1').text().length;
							eachTween(l,0,firstVal,function() {
								var l = $('.replace-value').text().length;
								var newChar = $('#newChar').text();
								valueRotation(l,0,newChar,function() {
									introjs.nextStep();
								});
							});
						}});
					});
					break;
				}
				
			});
			break;
		case "sopLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass('hide');
				var text = "The <y>replace(char oldChar, char newChar)</y> method returns a new string with all occurrence of <y>oldChar</y> being "
					+" replaced by the given <y>newChar</y>.";
				typing('.introjs-tooltiptext', text, 'white', function() {
					$('.key').attr('contenteditable',true);
					charAtEnd("oldChar");
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "consoleId":
			$('.introjs-helperLayer').one('transitionend', function () {
				var finalResult = $('.temp1').text();
				var oldVal = $('#oldChar').text();
				var newVal = $('#newChar').text();
				var text = "text.replace("+oldVal +", "+newVal +") = <y>"+finalResult+"</y>";
				typing('#outputDivFinal', text, 'white', function() {
					setTimeout (function() {
						introjs.nextStep();
					}, 1500);
				});
			});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css('min-width','125px');
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#restartBtn').removeClass('opacity00');
				$('.introjs-tooltip').removeClass('hide');
				var text = "Click to restart.";
				typing('.introjs-tooltiptext', text, 'white', function() {
					//introjs.nextStep();
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

function eachTween(val,i,first,callBackFunction) {
	var tl = new TimelineLite();
	if (i < val) {
		if ($('#resultDiv .letter:eq('+i+')').text() == first) {
			$('#resultDiv .letter:eq('+i+')').addClass('replace-value').css('color','red');
		}
		
		$('#resultDiv .letter:eq('+i+')').removeClass('opacity00');
		tl.from("#resultDiv .letter:eq("+i+")", 1.0, {opacity:0, y: -50, delay: 0.3, onComplete : function() {
			eachTween(val,++i,first,callBackFunction);
		}});
	} else {
		callBackFunction();
	}
}

function valueRotation(l,j,newChar, callBackFunction) {
	var tl = new TimelineLite();
	if (j < l) {
		$('.replace-value:eq('+j+')').parent().addClass('rw-words');
		setTimeout (function() {
			$('.replace-value:eq('+j+')').parent().removeClass('rw-words');
			$('.replace-value:eq('+j+')').removeAttr('style').empty();
			$('.replace-value:eq('+j+')').parent().append('<b class="letter blue final">'+ newChar +'</b>');
			tl.from(".final:eq("+j+")", 1.0, {opacity:0, y: -50, delay: 0.3, onComplete : function() {
				valueRotation(l,++j,newChar, callBackFunction);
			}});
		},1200);
	} else {
		callBackFunction();
	}
}

function givenTween() {		 //function for given string
	content = $('#editor1').text();
	for(var i = 0; i < content.length; i++) {
		$("#totalIndexDiv").append("<span><span class='circle temp'><b class='indexLetter'>" + i + "</b></span>&nbsp;</span>");
		$("#totalValueDiv").append("<span><span class='box green temp'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;</span>");						
	}
}

function resultTween() {			 //function for given string
	content = $('#editor1').text();
	for(var i = 0; i < content.length; i++) {
		$("#resultDiv").append("<span><span class='box green temp1'><b class='letter opacity00'>" + content.charAt(i) + "</b></span>&nbsp;</span>");						
	}
}

function flipEffect(selector, val, callBackFunction) {
	//$(selector).effect('highlight', {color: 'yellow'}, 500, function() {
		TweenMax.to($(selector), 0.5, {rotationX : -180, onComplete: function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete: function() {
				callBackFunction();
			}});
		}});
	//});
}