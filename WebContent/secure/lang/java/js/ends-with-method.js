
var stringInterval;
var text;
var endsWithText;
var introjs;
function introJsTest(stepNo){
	introjs = introJs();
	introjs.setOptions({
		steps: [
		        {
        	    	element: '#codeIntro' ,
        	    	intro: 'The above code demonstrates the working of <b>endsWith(String str)</b> method.',
        	    	position: 'bottom',
        	    },
        	    {
	  				element: '#text1Id', 
	  				intro: "",
	  				position: 'right',
  				},
  				{
	  				element: '#animationDiv', 
	  				intro: "",
	  				position: 'bottom',
	  				tooltipClass: "hide"
  				},
  				{
  					element: '#endsWithMethod', 
	  				intro: "This statement prints the result of executing <b>endsWith</b> method.<br><br><span class = 'errorText'></span>",
	  				position: 'bottom',
  				},
  				{
	  				element: '#animationDiv', 
	  				intro: "",
	  				position: 'bottom',
	  				tooltipClass: "hide"
  				},
  				{
        	  		element: '#consoleId', 
        	  		intro: "",
        	  		position: 'bottom',
        	  		tooltipClass: "hide"
      	  		},
      	  		{
        	  		element: '.exit-main', 
        	  		intro: "",
        	  		tooltipClass: "hide"
      	  		},
      	  		{
	  				element: '#restart',
	  				intro: "Click to restart.",
	  				position: 'right',
  				}]
	});
	introjs.setOption("showStepNumbers","false");
 	introjs.setOption("exitOnEsc","true");
 	introjs.setOption("exitOnOverlayClick","false");
 	introjs.setOption("showBullets","false");
	introjs.setOption('keyboardNavigation', false);
	introjs.goToStep(stepNo).start();
	$('.introjs-bullets').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	
}



var endsWithMethodReady = function() {
	
	introJsTest(1);
	$("#skipButton").hide();
	$(".given-text").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		if(e.which == 13 || e.which == 222) {
			e.preventDefault();
		}	
		if ($(this).text().length > max) {
			if(e.which == 8 || e.which == 46){
	   			return true;	
			}
			e.preventDefault();
	 	}
	});
	
	$("#changeText1").keyup(function() {
    	introjs.refresh();
		$(".tooltip-text-edit").text($("#changeText1").text());
        if ($(this).text().length > 0) {
        	$('.errorText').empty();
        	$(".introjs-nextbutton, .introjs-prevbutton").show();
        } else {
        	$(".introjs-nextbutton, .introjs-prevbutton").hide();
        	$('.errorText').text("please enter text");
        }
    });
	
	$("#endsWithText").keyup(function() {
		introjs.refresh();
        if ($(this).text().length > 0) {
        	$('.errorText').empty();
        	$(".introjs-nextbutton, .introjs-prevbutton").show();
        } else {
        	$(".introjs-nextbutton, .introjs-prevbutton").hide();
        	$('.errorText').text("please enter text");
        }
    });
 	
	$("#restart").click(function() {
		 location.reload();
	});

	introjs.onbeforechange(function(targetElement) {
		var element = targetElement.id;
		
		if(element == "codeIntro") {
			console.log("asdf");
			$(".introjs-nextbutton").show();
			$(".introjs-prevbutton").hide();
			$("#changeText1").attr("contenteditable", false);
		}
		
		if(element == "text1Id") {
			introjs._introItems[introjs._currentStep].intro = "This statement initializes the reference <b>text</b> with "
				+"<b class='tooltip-text-edit ct-code-b-yellow'>" +$("#changeText1").text()+ "</b>. The text can be changed to "
				+"any value.<br><br><span class = 'errorText'></span>";
		$(".temp + span, .temp").remove();
		$('#enteredText, #textIndices').empty();
		$("#changeText1").attr("contenteditable", true);
		$(".introjs-nextbutton, .introjs-prevbutton").show();
			setTimeout(function() {
				charAtEnd(document.getElementById("changeText1"));
			},1000);
		}
		
		
		if(element == "endsWithMethod") {
			$("#endsWithText").attr("contenteditable", true);
			setTimeout(function() {
				charAtEnd(document.getElementById("endsWithText"));
			},1000);
		}
		
		if(element == "animationDiv") {
			text = $('#changeText1').text();
			
			$("#animationDiv").append( $("#textBoxes") );
			$("#animationDiv").append( $("#endsWithBoxes") );
			$("#animationDiv").append( $("#result") );
			$("#animationDiv").append( $("#lengthError") );
							
			var tl = new TimelineLite();
			if(text.length > 0) {
				if(introjs._currentStep == 2) {
					$("#changeText1").attr("contenteditable", false);
					$('#enteredText').hide();
					$('#textIndices').hide();
					givenText1();
		      		$('.introjs-helperLayer ').one('transitionend', function() {
		      			$('#enteredText').empty().append("text = ");
						$('#enteredText').fadeIn(500);
		      		}); 
					tl.staggerFrom("#executeBoxes", 0.5, {opacity:0, y:-200, delay:1.8});
					tl.from("#executeBoxes", 0.5, {onComplete: function() {
						$('#textIndices').empty().append("Indices = ");
						$('#textIndices').fadeIn(500);
					}});
					tl.staggerFrom("#excecuteIndices", 0.5, {opacity:0, y:-200, delay:0.5});
					if( introjs._direction == "forward") {
						tl.from("#excecuteIndices", 0.5, {delay:0.5, onComplete : function() {
							introjs.nextStep();
						}});
					} else {
						tl.from("#excecuteIndices", 0.5, {delay:0.5, onComplete : function() {
							introjs.previousStep();
						}});
					}
					
				}  else if(introjs._currentStep == 4) {
					endsWithText = $("#endsWithText").text();
					$("#endsWithText").attr("contenteditable", false);
					$('.introjs-nextbutton').hide();
					$("#skipButton").hide();
					$("#textBoxes").show();
					$("#endsWithLength").hide();
					$("#animationDiv").css("width", "55%");
					$("#animationDiv").append("<br><br><br><br><br><br><br>");
					$("#compareLength").hide();
					
					endWithText();
					var lengthDiff = (text.length - endsWithText.length);
					$('.introjs-helperLayer ').one('transitionend', function() {
		      			$('#ewText').append("Ends with text = ");
						$('#ewText').fadeIn(800);
		      		}); 
					tl.staggerFrom("#ewBoxes", 0.5, {opacity:0, y:-200, delay:1.8});
					tl.from("#ewBoxes", 0.5, {delay: 0.5, onComplete: function() {
						$("#compareLength").append("Length of the <b>text</b> = <span class = 'length'> "+ text.length + "</span><br>");
						$("#compareLength").fadeIn(500);
					}});
					tl.from("#ewBoxes", 0.5, {delay: 0.5, onComplete: function() {
						$("#endsWithLength").append("<br>Length of the <b>Ends with text</b> = <span class = 'length'> "+ endsWithText.length + "</span><br>");
						$("#endsWithLength").fadeIn(500);
					}});
					tl.from("#ewBoxes", 0.5, {delay: 0.8, onComplete: function() {
						$(".length").css("border", "1px solid blue");
						typing("#lengthEquality", "<br>Length of the <b>text</b> - length of <b>Ends with text</b> :  " + text.length + " -  "+ endsWithText.length + " = <b style = 'color:green'>" + lengthDiff + "</b> <br>");
					}});
					
					var endsWithIndex = (text.length - endsWithText.length);
					var x = endsWithIndex;
					var y = 0;
					if(endsWithIndex <= text.length-1 && endsWithText.length <= text.length) {
						tl.from("#", 0.5, {delay: 5, onComplete: function() {
							typing("#lengthError", "<b style = 'color : green'>"+endsWithIndex+"</b> does not exceed the <b>last index of text</b>, we can start comparing the characters from index <b style = 'color : green'>"+endsWithIndex+"</b> of the <b>text</b>.");
						}});
						tl.from("#ewBoxes", 0.5, {delay: 10, onComplete: function() {
							$("#compareLength").fadeOut(500);
							$("#lengthEquality").fadeOut(500);
							$("#endsWithLength").fadeOut(500);
							stringInterval = setInterval(function() {
								$("#textIndex" + x).css("border", "2px solid #A9A9A9");
								if(x > endsWithIndex) {
									$('#circleAtText'+ (x-1)).hide();
									$('#circleAtEw'+ (y-1)).hide();
								}
								
								$("#text1Box"+x).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtText" + x + "'></span>")
								$("#ewBox"+y).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtEw" + y + "'></span>")
								
								$('#circleAtText'+ x).hide();
								$('#circleAtEw'+ y).hide();
								$('#circleAtText'+ x).fadeIn(500);
								$('#circleAtEw'+ y).fadeIn(1200);
								if (x == (endsWithIndex + (endsWithText.length-1))) {
									clearInterval(stringInterval);
									$('.comparingCircle').fadeOut(800);
									setTimeout(function() {
										$('.introjs-nextbutton').click();
									},2200);
								}
								if(text.charAt(x) === endsWithText.charAt(y)) {
									setTimeout(function() {
										$("#result").append("<span class='check fa fa-check'></span>&nbsp;");
										++x;
										++y;
									},1300);
								} else {
									setTimeout(function() {
										$("#result").append("<span class='not-matched fa fa-times'></span>&nbsp;");
										clearInterval(stringInterval);
										$('.comparingCircle').fadeOut(800);
									},1300);
									setTimeout(function() {
										if (x != (endsWithIndex + (endsWithText.length-1))) {
											$('.introjs-nextbutton').click();
										}
									},2000);
								}
							},2200);
						}},"-=1.8");
					} else {
						$('.introjs-helperLayer ').one('transitionend', function() {
							tl.from("#", 0.5, {delay: 5, onComplete: function() {
								typing("#lengthError", "<b>Ends with text</b> length exceeds the length of the <b>text</b> by <b style = 'color : red'>" + (endsWithText.length - text.length) + "</b> characters, hence <b>text</b> will not end with it.");
							}});
							tl.from("#", 0.5, {delay: 9, onComplete: function() {
								$('.introjs-nextbutton').click();
							}});
						});
					}
				}
			} 
		}
		if(element == "consoleId") {
			text = $('#changeText1').text();
			endsWithText = $("#endsWithText").text();
			var endsWithIndex = (text.length - endsWithText.length);
			
			var returnVal4 = (text.substring(endsWithIndex, (text.length)) === endsWithText);
			
			if(introjs._currentStep == 5) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor1", "endsWith : " + returnVal4);
				});
			}
			setTimeout(function() {
	       		$('.introjs-nextbutton').click();
	       		$('.introjs-helperLayer').one('transitionend', function() {
	       			$('.exit-main').fadeTo(500, 1);
				});
	       	}, 2800);
		}
		if(introjs._currentStep == 6) {
			setTimeout (function() {
				$('.introjs-nextbutton').click();
				$('.introjs-prevbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#restart').fadeTo(1000,1);
				});
			}, 2800);
		}
		
	});
	
}

/* ------------------------   functions    -------------------------- */
var i;
function givenText1() {	
	$(".temp + span, .temp").remove();
	for(i = 0; i < text.length; i++) {
		
		/*$("#row1").append($("#textIndices"));
		$("#row2").append($("#enteredText"));
		$("#row1").append($("#excecuteIndices"));
		$("#row2").append($("#executeBoxes")); */
		
		$("#excecuteIndices").append("<span id = 'textIndex"+i+"' class = 'circle temp'><b class='indexLetter'>" + i + "</b></span><span>&nbsp;</spn>");
		$("#executeBoxes").append("<span id = 'text1Box"+i+"' class='box green temp'><b class='letter'>" + text.charAt(i) + "</b></span><span>&nbsp;</spn>");						
	}
}
function endWithText() {	
	for(i = 0; i < endsWithText.length; i++) {
		$("#ewBoxes").append("<span id = 'ewBox"+i+"' class='box green'><b class='letter'>" + endsWithText.charAt(i) + "</b></span>&nbsp;");						
	}
}

function typing(id, content) {
 $(id).removeClass('typingCursor');
    $(id).typewriting( content , {
          "typing_interval": 40,
          "cursor_color": 'white'
     }, function() {	    
    	 $(id).removeClass('typingCursor');
    }); 
}
function charAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
	    var range = document.createRange();
	    range.selectNodeContents(element);
	    range.collapse(false);
	    
	    var sel = window.getSelection();
	    sel.removeAllRanges();
	    sel.addRange(range);
	}    	   
}
function typingOutput(id, content) {
    $(id).typewriting( content , {
          "typing_interval": 50,
          "cursor_color": 'white',    
          
      }, function() {
    	  $(id).removeClass('typingCursor');
      }); 
	}