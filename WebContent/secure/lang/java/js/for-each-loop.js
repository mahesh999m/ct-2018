var introjs;
var index = 0;
var val1 = 34;
var val2 = 32;
var var3 = 74; 
var val4 = 27;
var count = 1;
var i = 0;
var cupValueIndex = 0;
var tl = new TimelineLite();
var intArr = [];
var forEachLoopReady = function() {
	"use strict";
	introJsGuide();
	$('.bgcolor-cream').addClass('opacity00');
	$(".allowNumbers").on("keydown",function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		$('.changeVal').text($(this).text());
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
	
	$(".allowNumbers").on("keyup",function(e) {
		var max = $(this).attr("maxlength");
		$('.changeVal').text($(this).text());
		if ($(this).text().length == 0) {
			$('.error').remove();
			$('.introjs-tooltiptext').append('<span class="error">Empty values not allowed</span>');
			$('.user-btn').remove();
		} else {
			$('.error, .user-btn').remove();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="InitializeValues()">Next &#8594;</a>');
		}
		
	});
	
	setInterval(function() {
		if ($('#cupValue').text().length == 1) {
			$('#cupValue').css('left', '11px');
		} else if ($('#cupValue').text().length == 2) {
			$('#cupValue').css('left', '8px');				
		} else  if($('#cupValue').text().length == 3) {
			$('#cupValue').css('left', '5px');
		}
	}, 50);
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

function memoryLocations() {
	$(".user-btn").remove();
	$('.index').addClass('opacity00');
	$('.bgcolor-cream').removeClass('opacity00');
	$(this).hide();
	var l1 = $('#intArr').offset();
	$('#td0').offset({top : l1.top, left : l1.left});
	$('#td0').removeClass("opacity00").addClass('z-index');
	$('#intArr').effect("highlight", {color: 'yellow'}, 500, function () {
		TweenLite.to('#td0', 1, {top : 0, left : 0, onComplete: function() {
			$('#td0').removeClass('z-index');
			animateArray(1);
		}, delay : 0.5 });
	});
}

function animateArray(index) {
	$('#new_array_initialization').effect("highlight", {color: 'yellow'}, 500, function () {
		$('#new_array_initialization').effect("transfer", { to: $("#arrayTr > td:nth-child(" + (index + 1) + ")"), className: "ui-effects-transfer" }, 1000, function () {
			$('#arrayTr > td:nth-child(' + ( index + 1 )+ ')').addClass('td-border');
			if(index < 4) {
				animateArray(index + 1);
			} else {
				$('.index').css('opacity', '1');
				$('#indexTr > td:first-child > span').removeClass("opacity00");
				tl.from('.index', 0.8, {top : -150, onComplete: function () {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}});
			}
		});
	});
}

function indexInCup() {
	$('.user-btn').remove();
	var l = $('#testCupPosition').offset();
	$('.cup-bg').offset({top : l.top, left : l.left});
	$('.cup-bg').fadeTo(500, 1, function() {
		animateCupValue(1);
	});
}


function forLoopBack() {
	cupValueIndex--;
	$('.user-back-btn').remove();
	$('.introjs-nextbutton, .introjs-prevbutton').hide();
	i--;
	$('.hide').last().removeClass('hide position-absolute').addClass('position-relative').removeAttr('style');
	$('[id*=inner-value]').last().remove();
	index--;
	TweenMax.to('.arrow', 1, {left: "-=" + "43"});
	$('#output > div').last().remove();
	$('#cupValue').text(intArr[index - 1]);
	$('.introjs-tooltiptext').empty().append("Variable <span class='ct-code-b-yellow'>val</span> is being initialized with "
			+"element at <span class='ct-code-b-yellow'>index: "+(index - 1)+"</span>.");
	setTimeout(function() {
		if (cupValueIndex == 1) {
			console.log(cupValueIndex + "  if");
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		} else {
			console.log(cupValueIndex + "   else");
			$('.introjs-nextbutton').show();
			$('.introjs-tooltipbuttons').prepend('<a class="introjs-button user-back-btn" onclick="forLoopBack()">&#8592; Back</a>');
		}
	},1000);
}

function animateCupValue(fromIndex) {
	var l1 = $('.arrow').offset();
	var l2 = $('#arrowTd' + fromIndex).offset();
	topLength = l2.top - l1.top - 8;
	leftLength = l2.left - l1.left - 6;
	$('.arrow').removeClass('opacity00');
	TweenMax.to('.arrow', 1, {top:"+=" + topLength, left: "+=" + leftLength, onComplete: function() {
		$('#td' + fromIndex).parent().effect("highlight", {color: '#003399'}, 500, function () {
			$('#td' + fromIndex).parent().append("<span id='inner-value"+ fromIndex +"'>" + $('#td' + fromIndex).text() + "</span>");
			$('#td' + fromIndex).removeClass("position-relative absolute-left").addClass("position-absolute").css({"top" : "" , "left" : ""});
			var l1 = $('#td' + fromIndex).offset();
			var l2 = $('#cupValue').offset();
			var topLength = l2.top-l1.top;
			var leftLength = l2.left-l1.left;
				TweenLite.to('#td' + fromIndex, 1, {top : "+=" + topLength, left: "+=" + leftLength, onComplete : function() {
					$('#cupValue').text($('#td' + fromIndex).text()).removeClass('opacity00');
					$('#td' + fromIndex).addClass('hide');
				}});
				TweenLite.to($('#cupValue'), 0.2, {css:{opacity:"0"}, onComplete:function() {
					$('#cupValue').css("opacity", "1");
					cupValueIndex = fromIndex;
					if(fromIndex == 1) {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					} else {
						$('.introjs-nextbutton').show();
						$('.introjs-tooltipbuttons').prepend('<a class="introjs-button user-back-btn" onclick="forLoopBack()">&#8592; Back</a>');
					}
				}, delay: 0.8});
		});
	}});
}

function InitializeValues() {
	$('#value'+count).attr('contenteditable',false);
	$('.user-btn').remove();
	var l3 = $("#intArr_" + count + " span:first-child").offset();
	var l = $('#indexTr > td:nth-child(' + (count + 1 ) + ') > span:first-child').offset();
	$("#innerIndex" + count).text(count - 1);
	$("#intArr_"+ count + " > span:first").effect("highlight", {color: 'yellow'}, 500, function () {
	$('#indexTr > td:nth-child(' + (count + 1 )+ ') > span:first-child').offset({top : l3.top, left : l3.left});
	TweenMax.to($('#indexTr > td:nth-child(' + (count + 1 )+ ') > span:first-child'), 0.5, {css:{borderRadius:"50%", border : "2px solid blue", padding:"2px 2px"}});
		TweenMax.to($('#indexTr > td:nth-child(' + (count + 1 )+ ') > span:first-child'), 1, {top : 0, left : 0, onComplete : function () {
			$("#innerIndex" + count).empty();
			var l1 = $('#value' + count).offset();
			var l2 = $('#td' + count).offset();
			var topLength = l1.top-l2.top;
			var leftLength = l1.left-l2.left;
			intArr[count - 1] = $('#value' + count).text();
			$('#td' + count).text($('#value' + count).text()).removeClass("opacity00").addClass('z-index temp'+count+'');
			TweenLite.from('#td' + count, 1, {top: topLength, left: leftLength, onComplete: function() {
				$('#td' + count).removeClass('z-index');
				$('#arrayTr > td:nth-child(' + (count + 1 )+ ')').effect("highlight", {color: '#003399'}, 500, function () {
					$('#indexTr > td:nth-child(' + (count + 1 )+ ') > span').css("border","");
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			}});
		}});
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

function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [ {
			element : '#forloop',
			intro : "",
			position : 'bottom'
		}, {
			element : '#array_initialize',
			intro : "",
			tooltipClass : 'hide',
			position : 'bottom'
		}, {
			element : '#intArr_1',
			intro : "",
			tooltipClass : 'hide',
			position : 'bottom'
		}, {
			element : '#intArr_2',
			intro : "",
			tooltipClass : 'hide',
			position : 'bottom'
		}, {
			element : '#intArr_3',
			intro : "",	
			tooltipClass : 'hide',
			position : 'bottom'
		},  {
			element : '#intArr_4',
			intro : "",
			tooltipClass : 'hide',
			position : 'bottom'
		}, {
			element : '#syntax',
			intro : "",
			position : 'bottom'
		}, {
			element : '#condition',
			intro : "",
			tooltipClass : 'hide',
			position : 'bottom'
		}, {
			element : '#body_of_loop',
			intro : "",
			tooltipClass : 'hide',
			position : 'bottom'
		}, {
			element : '#outputDiv',
			tooltipClass : 'hide'
		}, {
			element : '#mainEnd',
			intro : "",
			position : 'right',
		}, {
			element : '#restart',
			intro : "Click to restart.",
			position : 'right'
		}]
	});

	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.setOption('showBullets', false);
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "forloop":
			$('#td0').addClass('opacity00');
			$('.index').removeAttr('style').addClass('opacity00');
			$('.td-border').removeClass('td-border');
			$('#indexTr > td:first-child > span').addClass("opacity00");
			$('.bgcolor-cream').addClass('opacity00');
			break;
		case "array_initialize":
			$('#td0').addClass('opacity00');
			$('.index').removeAttr('style').addClass('opacity00');
			$('.td-border').removeClass('td-border');
			$('#indexTr > td:first-child > span').addClass("opacity00");
			$('.bgcolor-cream').addClass('opacity00');
			$('.temp1').addClass('opacity00');
			break;
		case "syntax":
			$('.user-btn').remove();
			$('.cup-bg').css('opacity',"0");
			$('h6').empty();
			$('.arrow').addClass('opacity00');
			index = 0;
			$('#td1').removeClass('hide position-absolute').addClass('position-relative').removeAttr('style');
			$('#inner-value1').remove();
			break;
		case "condition":
			if (index == 1 && introjs._direciton == "backward") {
				$('.user-btn').remove();
				$('.cup-bg').css('opacity',"0");
				$('h6').empty();
				$('.arrow').addClass('opacity00');
				index = 0;
				$('#td1').removeClass('hide position-absolute').addClass('position-relative').removeAttr('style');
				$('#inner-value1').remove();
			}
			break;
			
		}
	});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		
		// ********************** start ************back button logic
		
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
		
		// ********************** end ************back button logic
		
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "forloop":
			var text = "The code demonstrates the working of <b class='ct-code-b-yellow'>for-each</b> loop.";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "array_initialize":
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "In this statement we are declaring an <b class='ct-code-b-yellow'>array</b> of " 
							+ "<b class='ct-code-b-yellow'>size 4</b>."
							+ "<br>Array is <b class='ct-code-b-yellow'>zero-index</b> based. " 
							+ "Meaning the <b class='ct-code-b-yellow'>first</b> element" 
							+ " is stored at index <b class='ct-code-b-yellow'>0</b>, <b class='ct-code-b-yellow'>second</b> element " 
							+ " at <b class='ct-code-b-yellow'>1</b> and "
							+ "so on.<br/><br/><b>Note:</b> We will learn more about Arrays in much detail in later sections."
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="memoryLocations()">Next &#8594;</a>');
				});
			});
			break;
		case "intArr_1":
			$('.temp1').addClass('opacity00');
			$('.temp2').addClass('opacity00');
			$('[contenteditable]').attr('contenteditable',false);
			$('.introjs-helperLayer').one('transitionend', function () {
				val1 = $('#value1').text();
				$('.introjs-tooltip').removeClass('hide');
				var text = "The above statement stores the value <b class='ct-code-b-yellow changeVal'>"+ val1 +"</b> at index " 
							+ "<b class='ct-code-b-yellow'>0</b> in the array. " 
							+ "<br/><br/>Feel free to change the value <b class='changeVal ct-code-b-yellow'>"+ val1 +"</b> to any " 
							+ "other value of your choice. " 
							+ "<br/><span class='errorText'></span>";
				typing(".introjs-tooltiptext", text, function() {
					$('#value1').attr('contenteditable',true);
					charAtEnd("value1");
					count = 1;
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="InitializeValues()">Next &#8594;</a>');
				})
				
			});
			break;
		
		
		case "intArr_2":
			$('.temp2').addClass('opacity00');
			$('.temp3').addClass('opacity00');
			$('[contenteditable]').attr('contenteditable',false);
			$('.introjs-helperLayer').one('transitionend', function () {
				val2 = $('#value2').text();
				$('.introjs-tooltip').removeClass('hide');
				var text = "The above statement stores the value <b class='ct-code-b-yellow changeVal'>"+ val2 +"</b> at index " 
							+ "<b class='ct-code-b-yellow'>1</b> in the array. " 
							+ "<br/><br/>The value <b class='changeVal ct-code-b-yellow'>"+ val2 +"</b> can be changed to any " 
							+ "other value of your choice." 
							+ "<br/><span class='errorText'></span>";
				typing(".introjs-tooltiptext", text, function() {
					$('#value2').attr('contenteditable',true);
					charAtEnd("value2");
					count = 2;
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="InitializeValues()">Next &#8594;</a>');
				});
			});
			break;
			
		case "intArr_3":
			$('.temp3').addClass('opacity00');
			$('.temp4').addClass('opacity00');
			$('[contenteditable]').attr('contenteditable',false);
			$('.introjs-helperLayer').one('transitionend', function () {
				val3 = $('#value3').text();
				$('.introjs-tooltip').removeClass('hide');
				var text = "The above statement stores the value <b class='ct-code-b-yellow changeVal'>"+ val3 +"</b> at index " 
						+ "<b class='ct-code-b-yellow'>2</b> in the array." 
						+ "<br/><br/>The value <b class='changeVal ct-code-b-yellow'>"+ val3 +"</b> can be changed to any " 
						+ "other value of your choice." 
						+ "<br/><span class='errorText'></span>";
				$("#value3").attr("contenteditable", true);
				typing(".introjs-tooltiptext", text, function() {
					charAtEnd("value3");
					count = 3;
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="InitializeValues()">Next &#8594;</a>');
				});
			});
			break;
		
		case "intArr_4":
			$('.temp4').addClass('opacity00');
			$('[contenteditable]').attr('contenteditable',false);
			$('.introjs-helperLayer').one('transitionend', function () {
				val4 = $('#value4').text();
				$('.introjs-tooltip').removeClass('hide');
				var text = "The above statement stores the value <b class='ct-code-b-yellow changeVal'>"+ val4 +"</b> at index " 
							+ "<b class='ct-code-b-yellow'>3</b> in the array. " 
							+ "<br/><br/>The value <b class='changeVal ct-code-b-yellow'>"+ val4 +"</b> can be changed to " 
							+ "any other value of your choice." 
							+ " <br/><span class='errorText'></span>";
				typing(".introjs-tooltiptext", text, function() {
					$("#value4").attr("contenteditable", true);
					charAtEnd("value4");
					count = 4;
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="InitializeValues()">Next &#8594;</a>');
				});
			});
			break;
		case "syntax":
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "The <b class='ct-code-b-yellow'>for-each</b> statement initializes the " 
					+ "<b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>val</b> " 
					+ "with every element in the array in the sequential order and executes its body.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
			
		case "condition":
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "Variable <b class='ct-code-b-yellow'>val</b> is being initialized with element " 
					+ "at index: <b class='ct-code-b-yellow'>" + index + "</b>.";
				if (index == 4) {
					text = "condition has <span class='ct-code-b-yellow'>filed</span>";
				}
				index++;
				$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext", text, function() {
					if (index == 1) {
						
						$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="indexInCup()">Next &#8594;</a>');
					} else if (index <= 4) {
						animateCupValue(index);
					} else {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="introjs.goToStep(11)">Next &#8594;</a>');
					}
				});
			});
			break;
			
		case "body_of_loop":
			$('.user-back-btn').remove();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output').append("<div class='opacity00'>val : " + intArr[i] + " </div>");
				i++;
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case "outputDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				introjs._introItems[7].intro = "Variable <b class='ct-code-b-yellow'>val</b> is being initialized with element " 
												+ "at index: <b class='ct-code-b-yellow'> " + index + "</b>.";
				 $('#output div:last-child').fadeTo(1800, 1, function () {
					 	$(this).removeClass('opacity00');
						introjs.goToStep(8);
				});
				
			});
			break;
			
		case "mainEnd" :
			$('.user-btn').remove();
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "The control comes out of <b class='ct-code-b-yellow'>for-each</b> loop and the program terminates.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
				
			});
			break;
		case "restart":
			$('.introjs-tooltip').css('min-width','125px');
			$('.introjs-tooltipbuttons').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

