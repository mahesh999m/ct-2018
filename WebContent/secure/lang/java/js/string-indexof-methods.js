
var stringInterval;
var text;
var indexOfText;
var indexOfText2;
var indexOfParameter;
var lastIndexOfParameter;
var textWithParameter;
var indexWithParameter;
var lastIndexOfText;
var lastIndexOfText2;
var lastIndexWithParameter;
var introjs;
var count;
var countAtIndex;
var targetLength;
var lastIndexOfText;
var firstEditable;
var secondEditor;
var thirdEditor1;
var thirdEditor2;

	function introJsTest(stepNo) {
		introjs = introJs();
		introjs.setOptions({
			steps: [
			        {
	        	    	element: '#codeIntro' ,
	        	    	intro: 'String class provides methods <span class = "ct-code-b-yellow">indexOf(...)</span> and <span class = "ct-code-b-yellow">lastIndexOf(...)</span> to find out the <b>first occurrence</b> and the <b>last occurrence</b> of a character or string sequence inside an existing string.<br/>The above code demonstrates their usage and working.',
	        	    	position: 'bottom',
	        	    },
	        	    {
		  				element: '#textId', 
		  				intro: "",
		  				/*intro: "This statement initializes the reference <b>text</b> with <b class = 'keyupText ct-code-b-yellow'>\"ababcdedef\"</b>.<br> You can change the value of <b>text</b> to any other value.<br><span class = 'errorText'></span>",*/
		  				position: 'right',
	  				},
	  				{
		  				element: '#animationDiv', 
		  				intro: "",
		  				position: 'bottom',
		  				tooltipClass: "hide"
	  				},
	  				{
	  					element: '#indexOfMethod', 
	  					intro: "",
		  				/*intro: "The <span class = 'ct-code-b-yellow'>indexOf(...)</span> method returns the index at which the first match is found for \"<span class = 'keyupText ct-code-b-yellow'>abc</span>\".<br><span class = 'errorText'></span>",*/
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
	  					element: '#indexOfMethodWithParameter', 
	  					intro: "",
		  				/*intro: "The <span class = 'ct-code-b-yellow'>indexOf(...)</span> method returns the index at which the first match is found for \"<span class = 'keyupText ct-code-b-yellow'>b</span>\" from index <span class = 'keyupParameter ct-code-b-yellow'>2</span>.<br><span class = 'errorText'></span>",*/
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
	  					element: '#lastIndexOfMethod', 
		  				intro: "The <span class = 'ct-code-b-yellow'>lastIndexOf(...)</span> method returns the index within this string of the <b>last occurrence</b> of \"<span class = 'keyupText ct-code-b-yellow'>d</span>\" , searching <b>backward</b> starting at the <b>last index</b>.<br><span class = 'errorText'></span>",
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
	  					element: '#lastIndexOfMethodWithParameter', 
		  				intro: "The <span class = 'ct-code-b-yellow'>lastIndexOf(...)</span> method with <b>parameter</b> returns the index within this string of the <b>last occurrence</b> of \"<span class = 'keyupText ct-code-b-yellow'>de</span>\" , searching <b>backward</b> starting at index <span class = 'keyupParameter ct-code-b-yellow'>7</span>.<br><span class = 'errorText'></span>",
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
		$('.introjs-tooltipbuttons').append("<a id='skipButton' style='background-color:orange' class='introjs-button skip-space'>Skip</a>");
		$("#skipButton").insertBefore(".introjs-nextbutton");
		$("#space").insertBefore(".introjs-nextbutton");
		$('.introjs-bullets').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
	}

var stringIndexOfMethods = function() {

	introJsTest(1);
	$("#skipButton").hide();
	$("#nextButton").hide();
	$("#nextButton2").hide();
	$("#nextButton3").hide();
	$("#nextButton4").hide();
	$("#compareNext").hide();
	
	$('body').keydown(function(e) {
		if(e.which == 13) {
			e.preventDefault();
		}	
	});
	
	$("#restart").click(function() {
		 location.reload();
	});
	
	$(".given-text").keydown(function(e) { 
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
	
	$(".index-length-limit").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
			if ($(this).text().length > max || (isNaN($(this).text()))) {
			if (e.which == 8 || e.which == 46){
	   			return true;	
			}
   			e.preventDefault();
		 	}
			if ((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
			return true;
		} else {
			e.preventDefault();
		}
	});
	
	$(".given-text").keyup(function() {
    	introjs.refresh();
    	$(".keyupText").empty();
        $(".keyupText").append($("#changeText").text());	
        if ($(this).text().length > 0) {
        	$('.errorText').empty();
        	$(".introjs-nextbutton, .introjs-prevbutton").show();
        	if (introjs._currentStep == 1) {
        		$("#skipButton").hide();
        	} else {
        		$("#skipButton").show();
        	}
        } else {
        	$(".introjs-nextbutton, .introjs-prevbutton").hide();
        	$("#skipButton").hide();
        	$('.errorText').html("<b>Please enter some text to search </b>");
        }
    });
	
	$(".index-length-limit").keyup(function() {
		introjs.refresh();
        if ($(this).text().length > 0) {
        	$('.errorText').empty();
        	$(".introjs-nextbutton, .introjs-prevbutton").show();
        	$("#skipButton").show();
        } else {
        	$(".introjs-nextbutton, .introjs-prevbutton").hide();
        	$("#skipButton").hide();
        	$('.errorText').html("<b>Please enter index</b>");
        }
    });
	
    $("#indexOfText").keyup(function() {
		introjs.refresh();
        $("#textChange").empty();
        $("#textChange").append($("#indexOfText").text());
        $(".keyupText").empty();
        $(".keyupText").append($("#indexOfText").text());
    });
    
    $("#textWithParameter").keyup(function() {
		introjs.refresh();
        $("#parameterText").empty();
        $("#parameterText").append($("#textWithParameter").text());
        $(".keyupText").empty();
        $(".keyupText").append($("#textWithParameter").text());
    });
    
    $("#parameterIndex").keyup(function() {
		introjs.refresh();
        $("#parameterChange").empty();
        $("#parameterChange").append($("#parameterIndex").text());
        $(".keyupParameter").empty();
        $(".keyupParameter").append($("#parameterIndex").text());
    });
    
    $("#lastIndexOfText").keyup(function() {
		introjs.refresh();
        $("#lastIndextextChange").empty();
        $("#lastIndextextChange").append($("#lastIndexOfText").text());
        $(".keyupText").empty();
        $(".keyupText").append($("#lastIndexOfText").text());
    });
    
    $("#lastIndexTextWithParameter").keyup(function() {
		introjs.refresh();
        $("#lastParameterText").empty();
        $("#lastParameterText").append($("#lastIndexTextWithParameter").text());
        $(".keyupText").empty();
        $(".keyupText").append($("#lastIndexTextWithParameter").text());
    });
    
    $("#lastIndexParameterIndex").keyup(function() {
		introjs.refresh();
        $("#lastIndexParameter").empty();
        $("#lastIndexParameter").append($("#lastIndexParameterIndex").text());
        $(".keyupParameter").empty();
        $(".keyupParameter").append($("#lastIndexParameterIndex").text());
    });
	
    $("#skipButton").click(function() {
    	
		if(introjs._currentStep == 3) {
			introjs.goToStep(6);
		}
		if(introjs._currentStep == 6) {
			introjs.goToStep(9);
		}
		if(introjs._currentStep == 9) {
			introjs.goToStep(12);
		}
		if(introjs._currentStep == 12) {
			introjs.goToStep(15);
		}
	});
    
	introjs.onbeforechange(function(targetElement) {
		var element = targetElement.id;
		if(element == "textId") {
			$('.total-string + span , .total-string').remove();
			$('#enteredText, #textIndices').empty();
			firstEditable = $('#changeText').text();
			$("#changeText").attr("contenteditable", true);
    		introjs._introItems[introjs._currentStep].intro = "This statement initializes the reference <b>text</b> with "
    		+"<b class = 'keyupText ct-code-b-yellow'>"+ firstEditable +"</b>.<br> You can change the value of <b>text</b> "
    		+"to any other value.<br><span class = 'errorText'></span>"; 
    		$('.introjs-nextbutton, .introjs-prevbutton').show();
    		$('#skipButton').hide();
			setTimeout(function() {
				charAtEnd(document.getElementById("changeText"));
			},1000);
		}
		
		
		if (element == "codeIntro") {
			$('.introjs-prevbutton').hide();
		}
		
		if (introjs._currentStep == 15) {
			$('.introjs-prevbutton').hide();
			$('#space').remove();
			$('.introjs-tooltip').css('min-width','125px');
		}
		
		
		if(element == "indexOfMethod") {
			
			$('.results, #indexOfTextChecking, #conclusion').empty();
			$('.checking-temp + span, .checking-temp, .comparingCircle, .extra-spaces').remove();
			$('.opacity-mark').removeClass('opacity-mark');
			$('#excecuteIndices .total-string').css('border','medium none');
			
			$("#indexOfText").attr("contenteditable", true);
			
			secondEditor = $('#indexOfText').text();
			introjs._introItems[introjs._currentStep].intro = "The <span class = 'ct-code-b-yellow'>indexOf(...)</span> method returns the index"
				+" at which the first match is found for \"<span class = 'keyupText ct-code-b-yellow'>"+ secondEditor +"</span>\".<br>"
				+"<span class = 'errorText'></span>"; 
			
			
			setTimeout(function() {
				charAtEnd(document.getElementById("indexOfText"));
			},1000);
		}
		
		if(element == "indexOfMethodWithParameter") {
			
			$('.checking1-temp + span, .checking1-temp, .extra-spaces, .comparingCircle').remove();
			$('#conclusion, .results, #indexOfTextChecking2, #lengthResult').empty();
			$('.opacity-mark').removeClass('opacity-mark');
			$('#excecuteIndices .total-string').css('border','medium none');

			$("#textWithParameter").attr("contenteditable", true);
			$("#parameterIndex").attr("contenteditable", true);
			
			thirdEditor1 = $('#textWithParameter').text();
			thirdEditor2 = $('#parameterIndex').text();
		
			introjs._introItems[introjs._currentStep].intro = "The <span class = 'ct-code-b-yellow'>indexOf(...)</span> "
				+"method returns the index at which the first match is "
				+"found for \"<span class = 'keyupText ct-code-b-yellow'>"+ thirdEditor1 +"</span>\" from index <span class = "
				+"'keyupParameter ct-code-b-yellow'>"+ thirdEditor2 +"</span>.<br><span class = 'errorText'></span>",
			
			setTimeout(function() {
				charAtEnd(document.getElementById("textWithParameter"));
			},1000);
		}
		
		if(element == "lastIndexOfMethod") {
			
			
			$('.checking2-temp + span, .checking2-temp, .extra-spaces, .comparingCircle').remove();
			$('#conclusion, .results, #lastIndexOfTextChecking, #lengthResult').empty();
			$('#excecuteIndices .total-string').css('border','medium none');
			
			
			$("#lastIndexOfText").attr("contenteditable", true);
			setTimeout(function() {
				charAtEnd(document.getElementById("lastIndexOfText"));
			},1000);
		}
		
		if(element == "lastIndexOfMethodWithParameter") {
			$("#lastIndexTextWithParameter").attr("contenteditable", true);
			$("#lastIndexParameterIndex").attr("contenteditable", true);
			setTimeout(function() {
				charAtEnd(document.getElementById("lastIndexTextWithParameter"));
			},1000);
		}
		
		if(element == "animationDiv") {
			text = $('#changeText').text();
			
			$("#animationDiv").append( $("#textBoxes") );
			$("#animationDiv").append( $("#targetBoxes") );
			$("#animationDiv").append( $("#conclusion") );
			$("#animationDiv").append( $("#nextButton") );
			
			var tl = new TimelineLite();
			if(text.length > 0) {
				$("#compareLength").hide();
				$("#compareLength2").hide();
				
				if(introjs._currentStep == 2) {
					$("#changeText").attr("contenteditable", false);
					$('#enteredText').hide();
					$('#textIndices').hide();
					$("#skipButton").show();
					
					givenText();
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
					tl.from("#excecuteIndices", 0.5, {delay:0.5, onComplete : function() {
						//$('.introjs-nextbutton').click();
						if (introjs._direction == "forward") {
							introjs.nextStep();
						} else {
							introjs.previousStep();
						}
					}});
				} else if(introjs._currentStep == 4) {
					indexOfText = $("#indexOfText").text();
					$("#indexOfText").attr("contenteditable", false);
					$('.extra-spaces').remove();
					$('#animationDiv').append('<span class="extra-spaces"><br><br><br><br><br></span>')
					$("#result").css('visibility', 'hidden');
					resultSpans();
					
					$('.introjs-helperLayer ').one('transitionend', function() {
		      			$('#indexOfTextChecking').empty().append("searchText = ");
						$('#indexOfTextChecking').fadeIn(800);
		      		}); 
					
					$('#indexOfRow').show();
					chekingText(); 
					
					tl.staggerFrom("#indexOfBoxes", 0.5, {opacity:0, y:-200, delay:1.8});
					tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
						$("#compareLength").empty().append("Length of the <span class = 'text-font'>text</span> = <span class = 'length'> "+ text.length + "</span>" );
						$("#compareLength").fadeIn(500);
					}});
					tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
						$("#compareLength2").empty().append("Length of the <span class = 'text-font'>searchText</span> = <span class = 'length'> "+ indexOfText.length + "</span>" );
						$("#compareLength2").fadeIn(500);
					}});
					
					count = 0;
					countAtIndex = 0;
					targetLength = indexOfText.length;
					if(indexOfText.length <= text.length) {
						tl.from("#", 0.5, {delay: 0.8, onComplete: function() {
							$(".length").css("border", "1px solid blue");
							$('#lengthResult').show();
							typing("#lengthResult", "<br>Since the length of <span class = 'text-font'>searchText</span> does not exceed the "
									+"length of <span class = 'text-font'>text</span>, we will start searching by comparing characters.");
						}});
						tl.from("#", 0.5, {delay: 5, onComplete: function() {
							$("#lengthResult").append($("#nextButton"));
							$("#nextButton").fadeIn(500).show();
						}});
						$("#nextButton").click(function() {
							$("#nextButton").off().hide();
							$('#animationDiv').append($("#nextButton"));
							tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
								$("#compareLength").fadeOut(500);
								$("#compareLength2").fadeOut(500);
								$("#lengthResult").fadeOut(500);
								$('.comparingCircle').remove();
								compare();
							}});
							
						});
											
					} else {
						$('.introjs-helperLayer ').one('transitionend', function() {
							tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
								$(".length").css("border", "1px solid blue");
								typing("#lengthResult", "<br>Since the length of the <span class = 'text-font'>searchText</span> exceeds the length of the <span class = 'text-font'>text</span>, <span class = 'text-font'>text</span> will not contain <span class = 'text-font'>searchText</span>.");
							}});
							tl.from("#", 0.5, {delay: 9, onComplete: function() {
								//$('.introjs-nextbutton').click();
								if (introjs._direction == "forward") {
									introjs.nextStep();
								} else {
									introjs.previousStep();
								}
							}});
						});
					}
					
				} else if(introjs._currentStep == 7) {
					$('#compareLength + br').css('display','none');
					$("#result").css('margin-left', '27%');
					$("#resultAtTarget").css('margin-left', '27%');
					
					indexOfText2 = $("#textWithParameter").text();
					indexOfParameter = parseInt($("#parameterIndex").text());
					$("#result").show();
					$("#conclusion").show();
					$("#lengthResult").show();
					$("#textWithParameter").attr("contenteditable", false);
					$("#parameterIndex").attr("contenteditable", false);
					$('.extra-spaces').remove();
					$('#textBoxes').append('<span class="extra-spaces"><br><span>');
					$('#animationDiv').append('<span class="extra-spaces"><br><br><br><br><br><br></span>');
					$("#result").css('visibility', 'hidden');
					resultSpans();
				
					
					$('.introjs-helperLayer ').one('transitionend', function() {
		      			$('#indexOfTextChecking2').empty().append("searchText = ");
						$('#indexOfTextChecking2').fadeIn(800);
		      		}); 
					
					$('#indexOfRow2').show();
					chekingText2();
					tl.staggerFrom("#indexOfBoxes2", 0.5, {opacity:0, y:-200, delay:1.8});
					tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
						$("#compareLength").empty();
						$("#compareLength").append("Length of the <span class = 'text-font'>text</span> = <span class = 'length'> "+ text.length + "</span>" );
						$("#compareLength").fadeIn(500);
					}});
					tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
						$("#compareLength2").empty();
						$("#compareLength2").append("<br>Length of the <span class = 'text-font'>searchText</span> = <span class = 'length'> "+ indexOfText2.length + "</span>" );
						$("#compareLength2").fadeIn(500);
					}});
					
					count = indexOfParameter;
					countAtIndex = 0;
					targetLength = indexOfText2.length;
					
					if(indexOfText2.length <= text.length  && (indexOfParameter < text.length)) {
						tl.from("#", 0.5, {delay: 0.8, onComplete: function() {
							$(".length").css("border", "1px solid blue");
							typing("#lengthResult", "<br>Since the length of <span class = 'text-font'>searchText</span> does not exceed the length of <span class = 'text-font'>text</span>, we will start searching by comparing characters from the given index <b>"+indexOfParameter+"</b>.");
						}});
						tl.from("#", 0.5, {delay: 10, onComplete: function() {
							$("#lengthResult").append($("#nextButton2"));
							$("#nextButton2").fadeIn(500);
						}});
						$("#nextButton2").click(function(){
							//$("#nextButton2").hide();
							$("#nextButton2").off().hide();
							$('#animationDiv').append($("#nextButton2"));
							tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
								$("#compareLength").fadeOut(500);
								$("#compareLength2").fadeOut(500);
								$("#lengthResult").fadeOut(500);
								$('.blur:lt('+ count +')').addClass('opacity-mark');
								$('.circle:lt('+ count +')').addClass('opacity-mark');
								compare2();
							}});
						});
											
					} else {
						$('.introjs-helperLayer ').one('transitionend', function() {
							tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
								$(".length").css("border", "1px solid blue");
								if(indexOfParameter >= text.length && (indexOfText2.length <= text.length )) {
									typing("#lengthResult", "<br>Length of the <span class = 'text-font'>searchText</span> does not exceed the length of the <span class = 'text-font'>text</span>, but given index <b>"+ indexOfParameter +"</b> is greater than the last index of the text, so <b class='text-font'>text</b> will not contain given <span class = 'text-font'>searchText</span> at index <b>"+indexOfParameter+"</b>.");
								} else {
									typing("#lengthResult", "<br>Since the length of the <span class = 'text-font'>searchText</span> exceeds the length of the <span class = 'text-font'>text</span> from given index, <span class = 'text-font'>text</span> will not contain <span class = 'text-font'>searchText</span>.");
								}
							}});
							if(indexOfParameter >= text.length) {
								tl.from("#", 0.5, {delay: 15.5, onComplete: function() {
									if (introjs._direction == "forward") {
										introjs.nextStep();
									} else {
										introjs.previousStep();
									}
									//$('.introjs-nextbutton').click();
								}});
							} else {
								tl.from("#", 0.5, {delay: 10, onComplete: function() {
									if (introjs._direction == "forward") {
										introjs.nextStep();
									} else {
										introjs.previousStep();
									}
									//$('.introjs-nextbutton').click();
								}});
							}
						});
					}
				} else if(introjs._currentStep == 10) {
					
					$('.results').empty();
					
					$('#compareLength2 + br').css('display','none');
					
					$("#result").css('margin-left', '27%');
					$("#resultAtTarget").css('margin-left', '27%');
					lastIndexOfText = $("#lastIndexOfText").text();
					count = text.length-1;
						
					$("#result").show();
					$("#conclusion").show();
					$("#lengthResult").show();
					$("#lastIndexOfText").attr("contenteditable", false);
					$('.extra-spaces').remove();
					$('#textBoxes').append('<span class="extra-spaces"><br><span>');
					$('#animationDiv').append('<span class="extra-spaces"><br><br><br><br><br><br><span>'); 
					$("#result").css('visibility', 'hidden');
					$("#resultAtTarget").css('visibility', 'hidden');
					resultSpans();
					targetMarks();
					$('.introjs-helperLayer ').one('transitionend', function() {
		      			$('#lastIndexOfTextChecking').empty().append("searchText = ");
						$('#lastIndexOfTextChecking').fadeIn(800);
		      		}); 
					
					$("#lastIndexOfRow").show();
					chekingText3();
					
					tl.staggerFrom("#lastIndexOfBoxes", 0.5, {opacity:0, y:-200, delay:1.8});
					
					tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
						$("#compareLength").empty();
						$("#compareLength").append("Length of the <span class = 'text-font'>text</span> = <span class = 'length'> "+ text.length + "</span>" );
						$("#compareLength").fadeIn(500);
					}});
					
					tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
						$("#compareLength2").empty();
						$("#compareLength2").append("<br>Length of the <span class = 'text-font'>searchText</span> = <span class = 'length'> "+ lastIndexOfText.length + "</span>" );
						$("#compareLength2").fadeIn(500);
					}});
					
					countAtIndex = 0;
					targetLength = lastIndexOfText.length;
					
					if(targetLength <= text.length) {
						tl.from("#", 0.5, {delay: 0.8, onComplete: function() {
							$(".length").css("border", "1px solid blue");
							typing("#lengthResult", "<br>Since the length of <span class = 'text-font'>searchText</span> does not exceed the length of <b>text</b>, we will start searching by comparing characters from the last index in <span class = 'text-font'>text</span>.");
						}});
						
						tl.from("#", 0.5, {delay: 12.5, onComplete: function() {
							$("#lengthResult").append($("#nextButton3"));
							$("#nextButton3").fadeIn(500);
						}});
						
						$("#nextButton3").click(function(){
							//$("#nextButton3").hide();
							$("#nextButton3").off().hide();
							$('#animationDiv').append($("#nextButton3"));
							tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
								$("#compareLength").fadeOut(500);
								$("#compareLength2").fadeOut(500);
								$("#lengthResult").fadeOut(500);
								compare3();
							}});
						});
					} else {
						$('.introjs-helperLayer ').one('transitionend', function() {
							tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
								$(".length").css("border", "1px solid blue");
								typing("#lengthResult", "<br>Since the length of the <span class = 'text-font'>searchText</span> exceeds the length of the <span class = 'text-font'>text</span>, <span class = 'text-font'>text</span> will not contain <span class = 'text-font'>searchText</span>.");
							}});
							tl.from("#", 0.5, {delay: 9, onComplete: function() {
								//$('.introjs-nextbutton').click();
								if (introjs._direction == "forward") {
									introjs.nextStep();
								} else {
									introjs.previousStep();
								}
							}});
						});
					}
				}  else if(introjs._currentStep == 13) {
						$("#result").css('margin-left', '27%');
						$("#resultAtTarget").css('margin-left', '27%');
						lastIndexOfText2 = $("#lastIndexTextWithParameter").text();
						lastIndexOfParameter = parseInt($("#lastIndexParameterIndex").text());
						count = lastIndexOfParameter;
						$("#result").show();
						$("#conclusion").show();
						$("#lengthResult").show();
						$("#lastIndexTextWithParameter").attr("contenteditable", false);
						$("#lastIndexParameterIndex").attr("contenteditable", false);
						$('#textBoxes').append('<br>');
						$('#animationDiv').append('<br><br><br><br><br><br>'); 
						$("#result").css('visibility', 'hidden');
						$("#resultAtTarget").css('visibility', 'hidden');
						resultSpans();
						targetMarks();
						
						$('.introjs-helperLayer ').one('transitionend', function() {
			      			$('#lastIndexOfTextChecking2').append("searchText = ");
							$('#lastIndexOfTextChecking2').fadeIn(800);
			      		}); 
						chekingText4();
						
						tl.staggerFrom("#lastIndexOfBoxes2", 0.5, {opacity:0, y:-200, delay:1.8});
						tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
							$("#compareLength").empty();
							$("#compareLength").append("Length of the <span class = 'text-font'>text</span> = <span class = 'length'> "+ text.length + "</span>" );
							$("#compareLength").fadeIn(500);
						}});
						tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
							$("#compareLength2").empty();
							$("#compareLength2").append("<br>Length of the <span class = 'text-font'>searchText</span> = <span class = 'length'> "+ lastIndexOfText2.length + "</span>" );
							$("#compareLength2").fadeIn(500);
						}});
						
						countAtIndex = 0;
						targetLength = lastIndexOfText2.length;
						
						if(targetLength <= text.length && lastIndexOfParameter < text.length) {
							tl.from("#", 0.5, {delay: 0.8, onComplete: function() {
								$(".length").css("border", "1px solid blue");
								typing("#lengthResult", "<br>Since the length of <span class = 'text-font'>searchText</span> does not exceed the length of <span class = 'text-font'>text</span>, we will start searching by comparing characters from index <b>"+lastIndexOfParameter+"</b>.");
							}});
							
							tl.from("#", 0.5, {delay: 11.5, onComplete: function() {
								$("#lengthResult").append($("#nextButton4"));
								$("#nextButton4").fadeIn(500);
							}});
							
							$("#nextButton4").click(function(){
								$("#nextButton4").hide();
								tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
									$("#compareLength").fadeOut(500);
									$("#compareLength2").fadeOut(500);
									$("#lengthResult").fadeOut(500);
									compare4();
								}});
							});
						} else {
							$('.introjs-helperLayer ').one('transitionend', function() {
								tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
									$(".length").css("border", "1px solid blue");
									if(lastIndexOfParameter >= text.length && (targetLength <= text.length )) {
										typing("#lengthResult", "<br>Length of the <span class = 'text-font'>searchText</span> does not exceed the length of the <span class = 'text-font'>text</span>, but given index <b>"+ lastIndexOfParameter +"</b> is greater than the last index of the text, so <span class = 'text-font'>text</span> will not contain given <span class = 'text-font'>searchText</span> at index <b>"+lastIndexOfParameter+"</b>.");
									} else {
										typing("#lengthResult", "<br>Since the length of the <span class = 'text-font'>searchText</span> exceeds the length of the <span class = 'text-font'>text</span>, <span class = 'text-font'>text</span> will not contain <span class = 'text-font'>searchText</span>.");
									}
								}});
								if(lastIndexOfParameter >= text.length) {
									tl.from("#", 0.5, {delay: 15.5, onComplete: function() {
										$('.introjs-nextbutton').click();
									}});
								} else {
									tl.from("#", 0.5, {delay: 10, onComplete: function() {
										$('.introjs-nextbutton').click();
									}});
								}
							});
						}
				}
			}
		}
		
		if(element == "consoleId") {
			text = $('#changeText').text();
			indexOfText = $("#indexOfText").text();
			indexOfText2 = $("#textWithParameter").text();
			indexOfParameter = parseInt($("#parameterIndex").text());
			lastIndexOfText = $("#lastIndexOfText").text();
			lastIndexOfText2 = $("#lastIndexTextWithParameter").text();
			lastIndexOfParameter = parseInt($("#lastIndexParameterIndex").text());
			
			if(introjs._currentStep == 5) {
				if (introjs._direction == "forward") {
					$('.introjs-helperLayer ').one('transitionend', function() {
						typingOutput("#runEditor1", "indexOf '"+ indexOfText +"' : " + text.indexOf(indexOfText));
					});
					setTimeout(function() {
						$("#indexOfRow").hide();
						$("#result").hide();
						$("#result").empty();
						$("#resultAtTarget").empty();
						$("#conclusion").hide();
						$("#conclusion").empty();
						$('.comparingCircle').fadeOut();
						$("#lengthResult").empty();
						$("#compareLength").fadeOut(500);
						$("#compareLength2").fadeOut(500);
						$("#lengthResult").fadeOut(500);
						$("br").hide();		//changed  from remove to hide
						$(".circle").css("border", "none");
						$("#result").css('visibility', 'hidden');
						$(".check").removeClass('opacity-mark');
						$(".circle").removeClass('opacity-mark');
						$(".box").removeClass('opacity-mark');
						introjs.nextStep();
			       	}, 2000);
				} else {
					$('.introjs-helperLayer').one('transitionend', function() {
						$('#runEditor1').empty();
						$("#result, #conclusion, br").show();
						setTimeout(function() {
							introjs.previousStep();
						},500);
					});
				}
			}
			
			if(introjs._currentStep == 8) {
				if (introjs._direction == "forward") {
					$('.introjs-helperLayer ').one('transitionend', function() {
						typingOutput("#runEditor2", "indexOf '"+ indexOfText2 +"', after index "+indexOfParameter+" : " + text.indexOf(indexOfText2, indexOfParameter));
					});
					setTimeout(function() {
						$("#indexOfRow2").hide();
						$("#conclusion").hide();
						$("#conclusion").empty();
						$('.comparingCircle').fadeOut();
						$("#compareLength").fadeOut(500);
						$("#compareLength2").fadeOut(500);
						$("#lengthResult").empty();
						$("#result").empty();
						$("#resultAtTarget").empty();
						$("#lengthResult").fadeOut(500);
						$("br").hide();		//changed  from remove to hide
						$(".circle").css("border", "none");
						$("#result").css('visibility', 'hidden');
						$(".check").removeClass('opacity-mark');
						$(".circle").removeClass('opacity-mark');
						$(".box").removeClass('opacity-mark');
						introjs.nextStep();
			       	}, 2000);
				} else {
					$('.introjs-helperLayer').one('transitionend', function() {
						$('#runEditor2').empty();
						$("#result, #conclusion, br").show();
						setTimeout(function() {
							introjs.previousStep();
						},500);
					});
				}
			}
			
			if(introjs._currentStep == 11) {
				if (introjs._direction == "forward") {
					$('.introjs-helperLayer ').one('transitionend', function() {
						typingOutput("#runEditor3", "lastIndexOf '"+ lastIndexOfText +"' : " + text.lastIndexOf(lastIndexOfText));
					});
					setTimeout(function() {
						$("#lastIndexOfRow").hide();
						$("#conclusion").hide();
						$("#conclusion").empty();
						$("#result").empty();
						$("#resultAtTarget").empty();
						$('.comparingCircle').fadeOut();
						$("#compareLength").fadeOut(500);
						$("#compareLength2").fadeOut(500);
						$("#lengthResult").empty();
						$("#lengthResult").fadeOut(500);
						$("br").hide();		//changed  from remove to hide
						$(".circle").css("border", "none");
						$(".check").removeClass('opacity-mark');
						$(".circle").removeClass('opacity-mark');
						$(".box").removeClass('opacity-mark');
			       		$('.introjs-nextbutton').click();
			       	}, 3500);
				} else {
					$('.introjs-helperLayer').one('transitionend', function() {
						$('#runEditor3').empty();
						$("#result, #conclusion, br").show();
						setTimeout(function() {
							introjs.previousStep();
						},500);
					});
				}
			}
			
			if(introjs._currentStep == 14) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor4", "lastIndexOf '"+ lastIndexOfText2 + "' before index " + lastIndexOfParameter +" : " + text.lastIndexOf(lastIndexOfText2, lastIndexOfParameter));
				});
				setTimeout(function() {
					$("#restart").css("opacity", 1);
		       		$('.introjs-nextbutton').click();
		       		$('.introjs-nextbutton').hide();
		       		$("#skipButton").hide();
		       	}, 5300);
			}
		}
		
	});	
}

/* ------------------------   functions    -------------------------- */


function givenText() {	
	
	$('.total-string + span , .total-string').remove();
	for(var i = 0; i < text.length; i++) {
		$("#excecuteIndices").append("<span id = 'textIndex"+i+"' class = 'circle total-string'><b class='indexLetter'>" + i + "</b></span><span>&nbsp;<span>");
		$("#executeBoxes").append("<span id = 'textBox"+i+"' class='box green blur total-string'><b class='letter'>" + text.charAt(i) + "</b></span><span>&nbsp;<span>");
	}
}

function chekingText() {
	$('.checking-temp + span, .checking-temp').remove();
	for(var i = 0; i < indexOfText.length; i++) {
		$("#indexOfBoxes").append("<span id = 'checkingBox"+i+"' class='box green checking-temp'><b class='letter'>" + indexOfText.charAt(i) + "</b></span><span>&nbsp;</span>");						
	}
}

function chekingText2() {	
	$('.checking1-temp + span, .checking1-temp').remove();
	for(var i = 0; i < indexOfText2.length; i++) {
		$("#indexOfBoxes2").append("<span id = 'checkingBox2"+i+"' class='box green checking1-temp'><b class='letter'>" + indexOfText2.charAt(i) + "</b></span><span>&nbsp;</span>");						
	}
}

function chekingText3() {	
	$('.checking2-temp + span, .checking2-temp').remove();
	for(var i = 0; i < lastIndexOfText.length; i++) {
		$("#lastIndexOfBoxes").append("<span id = 'lastCheckingBox"+i+"' class='box green checking2-temp'><b class='letter'>" + lastIndexOfText.charAt(i) + "</b></span><span>&nbsp;</span>");						
	}
}

function chekingText4() {	
	$('.checking3-temp + span, .checking3-temp').remove();
	for(var i = 0; i < lastIndexOfText2.length; i++) {
		$("#lastIndexOfBoxes2").append("<span id = 'lastCheckingBox2"+i+"' class='box green checking3-temp'><b class='letter'>" + lastIndexOfText2.charAt(i) + "</b></span><span>&nbsp;</span>");						
	}
}

function resultSpans() {
	for(var i = 0; i < text.length; i++) {
		$("#result").append("<span id = 'xmark"+i+"' class = 'check not-matched fa fa-check fa-times removeMark'> </span>");						
	}
}

function targetMarks() {	
	for(var i = 0; i < text.length; i++) {
		$("#resultAtTarget").append("<span id = 'targetMarks"+i+"' class = 'check not-matched fa fa-check fa-times removeTargetMark'> </span>");						
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

function typingAtBack(id, content) {
	 $(id).removeClass('typingCursor');
        $(id).typewriting( content , {
              "typing_interval": 75,
              "cursor_color": 'white'
         }, function() {	    
        		$("#lengthResult").fadeOut(5000);
        }); 
	} 

function charAtEnd(element) {
	element.focus();
	
	if (typeof window.getSelection != "undefined"&& typeof document.createRange != "undefined") {
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

function blink(e){
     $(e).fadeOut('slow', function(){
          $(this).fadeIn('slow', function() {
        	  if (introjs._currentStep == 4 || introjs._currentStep == 7 || introjs._currentStep == 10 || introjs._currentStep == 13) {
	              blink(this);
        	  }
              
          });
     }); 
}

function compare() {
	if(count > 0 && (text.charAt(count) != indexOfText.charAt(countAtIndex)) && (text.charAt(count-1) != indexOfText.charAt(countAtIndex-1))) { 
		$('#circleAtText'+ (count-1)).hide();
		$('#circleAtIndexOf'+ (count-1)).hide();
	}
	
	$("#textBox" + count).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtText" + count + "'></span>");
	$("#checkingBox" + countAtIndex).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtIndexOf" + count + "'></span>");
	$('#circleAtIndexOf'+ count).hide();
	$('#circleAtText'+ count).hide();
	
	if(text.charAt(count) == indexOfText.charAt(countAtIndex)) {
		$('#circleAtText'+ count).fadeIn(500);
		$('#circleAtIndexOf'+ count).fadeIn(500);
		
		if((count > 0 && countAtIndex > 0) && (text.charAt(count-1) != indexOfText.charAt(countAtIndex-1))) {
			$('.targetMark').remove();
		}  else if ((count > 0 && countAtIndex == 0) && (text.charAt(count-1) != indexOfText.charAt(countAtIndex))) {
			$('.targetMark').remove();
			$("#xmark" +(count-1)).addClass('opacity00');
			$("#textIndex" + (count-1)).addClass('opacity-mark');
			$("#textBox" + (count-1)).addClass('opacity-mark');
		} 
		setTimeout(function() {
			$('.removeMark:eq('+ count +')').removeClass('opacity00');
			$("#xmark"+count).css('visibility', 'visible');
			$("#xmark"+count).removeClass('fa-times not-matched');
			$("#resultAtTarget").append("<span class = 'fa fa-check check targetMark'> </span>");
			
			count++;
			countAtIndex++;
			if(countAtIndex == targetLength) {
				$("#textIndex" + (count - targetLength)).css("border", "2px solid #A9A9A9");
				blink($(".indexLetter:eq("+text.indexOf(indexOfText)+")")); 
			
				$("#lengthResult").fadeOut(500);
				typing("#conclusion", "<br>The <b>first occurrence</b> of the given <b class = 'text-font'>searchText</b> string in <b class='text-font'>text</b> is at the index <b style = 'color: blue'>" + text.indexOf(indexOfText) +"</b>. ");
				
				setTimeout(function() {
					//$('.introjs-nextbutton').click();
					if (introjs._direction == "forward") {
						introjs.nextStep();
					} else {
						introjs.previousStep();
					}
				}, 7500);
			} else {
				setTimeout(function() {
					compare();
				}, 1000);
			}
		},1300);
		
	} else {
		$(".circle").css("border", "none");
		setTimeout(function() {
			 if((count > 0 && countAtIndex > 0) && (text.charAt(count-1) == indexOfText.charAt(countAtIndex-1))) {
				 $('.removeMark:eq('+ count +')').removeClass('opacity00');
				$('#circleAtText'+ count).fadeIn(500);
				$('#circleAtIndexOf'+ count).fadeIn(500);
				$("#xmark"+ count).addClass('fa-times not-matched');
				$("#xmark"+ count).css('visibility', 'visible');
				$("#lengthResult").empty();
				if(count <= ((text.length-1)-(indexOfText.length-1))) {
					$("#lengthResult").append("<br>Since we are unable to find a match for <b>"+ $('#checkingBox' + countAtIndex).text() +"</b>  at <b class='text-font'>text["+ $('#textIndex' + count).text() +"]</b>, let us start searching from the next index.");
					$("#lengthResult").append("<a id = 'compareNext' style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>");
					$("#lengthResult").fadeIn(500);
					$("#compareNext").fadeIn(500);
				}
				$("#resultAtTarget").append("<span class = 'fa fa-times not-matched targetMark'> </span>");
				
				$("#compareNext").click(function() {
					$("#compareNext").hide();
					$("#lengthResult").fadeOut(500);
					$('.removeMark').addClass('opacity00');
					$('.targetMark').remove();
					compare();
				});
				
			}  else { 
				$('.removeMark:eq('+ ((count - countAtIndex)) +')').removeClass('opacity00');
				$("#xmark" +(count-1)).addClass('opacity00');
				$("#textIndex" + (count-1)).addClass('opacity-mark');
				$("#textBox" + (count-1)).addClass('opacity-mark'); 
				$('#circleAtText'+ count).fadeIn(500);
				$('#circleAtIndexOf'+ count).fadeIn(500);
				$("#xmark"+ count).addClass('fa-times not-matched');
				$("#xmark"+ count).css('visibility', 'visible');
				$("#lengthResult").empty();
				if(count < ((text.length-1)-(indexOfText.length-1))) {
					$("#lengthResult").append("<br>Since we are unable to find a match for <b>"+ $('#checkingBox' + countAtIndex).text() +"</b>  at <b class = 'text-font'>text["+ $('#textIndex' + count).text() +"]</b>, let us start searching from the next index.");
					$("#lengthResult").append("<a id = 'compareNext' style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>");
					$("#lengthResult").fadeIn(500);
					$("#compareNext").fadeIn(500);
				}
				$("#resultAtTarget").append("<span class = 'fa fa-times not-matched targetMark'> </span>");
				
				$("#compareNext").click(function() {
					$("#compareNext").hide();
					$("#lengthResult").fadeOut(500);
					$('.targetMark').remove();
					$('.removeMark').addClass('opacity00');
					compare();
				});
			}
			
			$('.comparingCircle').fadeOut(800);
			
			if (count <  (text.length - (targetLength - 1))) {
				count = ((count+1) - countAtIndex);
				countAtIndex = 0;
			}
			
			if (count == (text.length - (targetLength - 1))) {
				$("#lengthResult").fadeOut(500);
				typing("#conclusion", "<br>The given <span class = 'text-font'>searchText</span> not found in the <span class = 'text-font'>text</span>.");
		
				setTimeout(function() {
					if (introjs._direction == "forward") {
						//$('.introjs-nextbutton').click();
						introjs.nextStep();
					} else {
						introjs.previousStep();
					}
				}, 3000);
			}
			
			if (count >=  (text.length - (targetLength - 1))) {
				count = ((count+1) - countAtIndex);
				countAtIndex = 0;
			}
		}, 1000);
	} 
	
}

function compare2() {
	if(count > indexOfParameter && (text.charAt(count) != indexOfText2.charAt(countAtIndex)) && (text.charAt(count-1) != indexOfText2.charAt(countAtIndex-1))) {
		$('#circleAtText1'+ (count-1)).hide();
		$('#circleAtIndexParamtr'+ (count-1)).hide();
	}
	
	$("#textBox" + count).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtText1" + count + "'></span>");
	$("#checkingBox2" + countAtIndex).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtIndexParamtr" + count + "'></span>");
	
	$('#circleAtText1'+ count).hide();
	$('#circleAtIndexParamtr'+ count).hide();
	
	if(text.charAt(count) == indexOfText2.charAt(countAtIndex)) {
		$('#circleAtText1'+ count).fadeIn(500);
		$('#circleAtIndexParamtr'+ count).fadeIn(500);
		
		if((count > 0 && countAtIndex > 0) && (text.charAt(count-1) != indexOfText2.charAt(countAtIndex-1))) {
			$('.targetMark').remove();
		}  else if ((count > 0 && countAtIndex == 0) && (text.charAt(count-1) != indexOfText2.charAt(countAtIndex))) {
			$('.targetMark').remove();
			$("#xmark" +(count-1)).addClass('opacity00');
			$("#textIndex" + (count-1)).addClass('opacity-mark');
			$("#textBox" + (count-1)).addClass('opacity-mark'); 
		}
		
		setTimeout(function() {
			$('.removeMark:eq('+ count +')').removeClass('opacity00');
			$("#xmark"+count).css('visibility', 'visible');
			$("#xmark"+count).removeClass('fa-times not-matched');
			$("#resultAtTarget").append("<span class = 'fa fa-check check targetMark'> </span>");
			
			count++;
			countAtIndex++;
			
			if(countAtIndex == targetLength) {
				$("#textIndex" + (count - targetLength)).css("border", "2px solid #A9A9A9");
				blink($(".indexLetter:eq("+text.indexOf(indexOfText2, indexOfParameter)+")")); 
				
				$("#lengthResult").fadeOut(500);
				typing("#conclusion", "<br>The <b>first</b> occurrence of the given <span class = 'text-font'>searchText</span> from index <b>"+ indexOfParameter +"</b> in <span class = 'text-font'>text</span> is at the index <b style = 'color: blue'>" + text.indexOf(indexOfText2, indexOfParameter) +"</b>. ");
				
				setTimeout(function() {
					if (introjs._direction == "forward") {
						//$('.introjs-nextbutton').click();
						introjs.nextStep();
					} else {
						introjs.previousStep();
					}
				}, 5000);
			} else {
				setTimeout(function() {
					compare2();
				}, 3800);
			}
			
		},1300);
		
	} else {
		$(".circle").css("border", "none");
		
		setTimeout(function() {
			if((count > 0 && countAtIndex > 0) && (text.charAt(count-1) == indexOfText2.charAt(countAtIndex-1))) {
				$('.removeMark:eq('+ count +')').removeClass('opacity00');
				$('#circleAtText1'+ count).fadeIn(500);
				$('#circleAtIndexParamtr'+ count).fadeIn(500);
				$("#xmark"+count).addClass('fa-times not-matched');
				$("#xmark"+count).css('visibility', 'visible');
				$("#lengthResult").empty();
				if(count <= ((text.length-1)-(indexOfText2.length-1))) {
					$("#lengthResult").append("<br>Since we are unable to find a match for <b>"+ $('#checkingBox2' + countAtIndex).text() +"</b>  at <b class='text-font'>text["+ $('#textIndex' + count).text() +"]</b>, let us start searching from the next index.");
					$("#lengthResult").append("<a id = 'compareNext' style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>");
					$("#lengthResult").fadeIn(500);
					$("#compareNext").fadeIn(500);
				}
				$("#resultAtTarget").append("<span class = 'fa fa-times not-matched targetMark'> </span>");
				
				if (((text.substring(indexOfParameter, text.length).length < targetLength))) {
					$("#lengthResult").fadeOut(500);
					typing("#conclusion", "<br>The given <span class = 'text-font'>searchText</span> not found in the <span class = 'text-font'>text</span>.");
					setTimeout(function() {
						if (introjs._direction == "forward") {
							//$('.introjs-nextbutton').click();
							introjs.nextStep();
						} else {
							introjs.previousStep();
						}
					}, 4000);
				}
				
				$("#compareNext").click(function() {
					$("#compareNext").hide();
					$("#lengthResult").fadeOut(500);
					$('.removeMark').addClass('opacity00');
					$('.targetMark').remove();
					compare2();
				});
				
			} else {
				$('.removeMark:eq('+ ((count - countAtIndex)) +')').removeClass('opacity00');
				$("#xmark" +(count-1)).addClass('opacity00');
				$("#textIndex" + (count-1)).addClass('opacity-mark');
				$("#textBox" + (count-1)).addClass('opacity-mark'); 
				$('#circleAtText1'+ count).fadeIn(500);
				$('#circleAtIndexParamtr'+ count).fadeIn(500);
				$("#xmark"+count).addClass('fa-times not-matched');
				$("#xmark"+count).css('visibility', 'visible');
				$("#lengthResult").empty();
				
				if (((text.substring(indexOfParameter, text.length).length < targetLength))) {
					$("#lengthResult").fadeOut(500);
					typing("#conclusion", "<br>The given <span class = 'text-font'>searchText</span> not found in the <span class = 'text-font'>text</span>.");
					setTimeout(function() {
						if (introjs._direction == "forward") {
							//$('.introjs-nextbutton').click();
							introjs.nextStep();
						} else {
							introjs.previousStep();
						}
					}, 4000);
				}
				
				if(count < ((text.length-1)-(indexOfText2.length-1))) {
					$("#lengthResult").append("<br>Since we are unable to find a match for <b>"+ $('#checkingBox2' + countAtIndex).text() +"</b>  at <b class='text-font'>text["+ $('#textIndex' + count).text() +"]</b>, let us start searching from the next index.");
					$("#lengthResult").append("<a id = 'compareNext' style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>");
					$("#lengthResult").fadeIn(500);
					$("#compareNext").fadeIn(500);
				}
				$("#resultAtTarget").append("<span class = 'fa fa-times not-matched targetMark'> </span>");
				$("#compareNext").click(function() {
					$("#compareNext").hide();
					$("#lengthResult").fadeOut(500);
					$('.targetMark').remove();
					$('.removeMark').addClass('opacity00');
					compare2();
				});
			}
			
			$('.comparingCircle').fadeOut(800);
			if (count <  (text.length - (targetLength - 1))) {
				count = ((count+1) - countAtIndex);
				countAtIndex = 0;
			}
			
			if (count == (text.length - (targetLength - 1))) {
				$("#lengthResult").fadeOut(500);
				typing("#conclusion", "<br>The given <span class = 'text-font'>searchText</span> not found in the <span class = 'text-font'>text</span>.");
		
				setTimeout(function() {
					if (introjs._direction == "forward") {
						//$('.introjs-nextbutton').click();
						introjs.nextStep();
					} else {
						introjs.previousStep();
					}
				}, 4000);
			}
			
			if (count >=  (text.length - (targetLength - 1))) {
				count = ((count+1) - countAtIndex);
				countAtIndex = 0;
			}
			
		},1000);
	}
	
}

 function compare3() {
	if(text.charAt(count+1) != lastIndexOfText.charAt(countAtIndex-1) && text.charAt(count) != lastIndexOfText.charAt(countAtIndex)) {
		$('#circleAtText2'+ (count + 1)).hide();
		$('#circleAtLastIndexOf'+ (count + 1)).hide();
	}
	
	$("#textBox" + count).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtText2" + count + "'></span>");
	$("#lastCheckingBox" + countAtIndex).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtLastIndexOf" + count + "'></span>");
	
	$('#circleAtText2'+ count).hide();
	$('#circleAtLastIndexOf'+ count).hide();
	
	if(text.charAt(count) == lastIndexOfText.charAt(countAtIndex)) {
		$('#circleAtText2'+ count).fadeIn(500);
		$('#circleAtLastIndexOf'+ count).fadeIn(500);
		
		if((count < text.length-1 && countAtIndex > 0) && (text.charAt(count+1) != lastIndexOfText.charAt(countAtIndex-1))) {
			$("#targetMarks"+ countAtIndex).css('visibility', 'hidden'); 
		} else if ((count < text.length-1 && countAtIndex == 0) && (text.charAt(count+1) != lastIndexOfText.charAt(countAtIndex))) {
			$("#targetMarks"+ countAtIndex).css('visibility', 'hidden');
			$("#xmark" + (count+1)).addClass('opacity00');
		}
		
		setTimeout(function() {
			$('.removeMark:eq('+ count +')').removeClass('opacity00');
			$('.removeTargetMark:eq('+ countAtIndex +')').removeClass('opacity00');
			$("#xmark"+ count).css('visibility', 'visible');
			$("#xmark"+ count).removeClass('fa-times not-matched');			
			$("#targetMarks"+ countAtIndex).css('visibility', 'visible');
			$("#targetMarks"+ countAtIndex).removeClass('fa-times not-matched');
			if(countAtIndex == (lastIndexOfText.length-1) && (text.charAt(count) == lastIndexOfText.charAt(countAtIndex))) {
				$("#textIndex" + (count-countAtIndex)).css("border", "2px solid #A9A9A9");
				blink($(".indexLetter:eq("+text.lastIndexOf(lastIndexOfText)+")")); 
				
				$("#lengthResult").fadeOut(500);
				typing("#conclusion", "<br>The <b>last occurrence</b> of the given <span class = 'text-font'>searchText</span> in <span class = 'text-font'>text</span> is at the index <b style = 'color: blue'>" + text.lastIndexOf(lastIndexOfText) +"</b>. ");
				
				setTimeout(function() {
					if (introjs._direction == "forward") {
						//$('.introjs-nextbutton').click();
						introjs.nextStep();
					} else {
						introjs.previousStep();
					}
				}, 8000);
			} else {
				setTimeout(function() {
					count++;
					countAtIndex++;
					compare3();
				}, 1800);
			}
			
		},1300);
		
	} else {
		$(".circle").css("border", "none");
		setTimeout(function() {
			if((countAtIndex > 0 && count <= text.length) && (text.charAt(count-1) == lastIndexOfText.charAt(countAtIndex-1))) {
				$('.removeMark:eq('+ (count) +')').removeClass('opacity00');
				$('.removeTargetMark:eq('+ countAtIndex +')').removeClass('opacity00');
				$('#circleAtText2'+ count).fadeIn(500);
				$('#circleAtLastIndexOf'+ count).fadeIn(500);
				$("#xmark"+ count).addClass('fa-times not-matched');
				$("#xmark"+ count).css('visibility', 'visible');
				$("#targetMarks"+ countAtIndex).css('visibility', 'visible');
				$("#targetMarks"+ countAtIndex).addClass('fa-times not-matched');
				$("#lengthResult").empty();
				if(count > (lastIndexOfText.length-1) || count > 0) {
					$("#lengthResult").append("<br>Since we are unable to find a match for <b>"+ $('#lastCheckingBox' + countAtIndex).text() +"</b>  at <b class='text-font'>text["+ $('#textIndex' + count).text() +"]</b> , let us start searching from the next index.");
					$("#lengthResult").append("<a id = 'compareNext' style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>");
					$("#lengthResult").fadeIn(500);
					$("#compareNext").fadeIn(500);
				}
				
				$("#compareNext").click(function() {
					$("#compareNext").hide();
					$("#lengthResult").fadeOut(500);
					$('.removeMark').addClass('opacity00');
					$('.removeTargetMark').addClass('opacity00');
					count = ((count-countAtIndex) - 1);
					countAtIndex = 0;
					compare3();
				});
				
			} else {
				$('.removeMark:eq('+ (count) +')').removeClass('opacity00');
				$('.removeTargetMark:eq('+ countAtIndex +')').removeClass('opacity00');
				$("#xmark" + (count+1)).addClass('opacity00');
				$('#circleAtText2'+ count).fadeIn(500);
				$('#circleAtLastIndexOf'+ count).fadeIn(500);
				$("#xmark"+ count).addClass('fa-times not-matched');
				$("#xmark"+ count).css('visibility', 'visible');
				$("#targetMarks"+ countAtIndex).css('visibility', 'visible');
				$("#targetMarks"+ countAtIndex).addClass('fa-times not-matched');
				$("#lengthResult").empty();
				if(count > 0) {
					$("#lengthResult").append("<br>Since we are unable to find a match for <b>"+ $('#lastCheckingBox' + countAtIndex).text() +"</b>  at <b class='text-font'>text["+ $('#textIndex' + count).text() +"]</b>, let us start searching from the next index.");
					$("#lengthResult").append("<a id = 'compareNext' style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>");
					$("#lengthResult").fadeIn(500);
					$("#compareNext").fadeIn(500);
				}
				
				$("#compareNext").click(function() {
					$("#compareNext").hide();
					$("#lengthResult").fadeOut(500);
					$('.removeMark').addClass('opacity00');
					$("#targetMarks"+ countAtIndex).css('visibility', 'hidden');
					count--;
					countAtIndex = 0;
					compare3();
				});
			}
			
			$('.comparingCircle').fadeOut(800);
			
			if (count <= 0) {
				$("#lengthResult").fadeOut(500);
				typing("#conclusion", "<br>The given <span class = 'text-font'>searchText</span> not found in the <span class = 'text-font'>text</span>.");
		
				setTimeout(function() {
					if (introjs._direction == "forward") {
						//$('.introjs-nextbutton').click();
						introjs.nextStep();
					} else {
						introjs.previousStep();
					}
				}, 4000);
			}
			
		},1000);
	}
}
 
function compare4() {
	if(text.charAt(count+1) != lastIndexOfText2.charAt(countAtIndex-1) && text.charAt(count) != lastIndexOfText2.charAt(countAtIndex)) {
		$('#circleAtText3'+ (count+1)).hide();
		$('#circleAtLastIndexparamtr'+ (count+1)).hide();
	}
	
	$("#textBox" + count).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtText3" + count + "'></span>");
	$("#lastCheckingBox2" + countAtIndex).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleAtLastIndexparamtr" + count + "'></span>");
	
	$('#circleAtText3'+ count).hide();
	$('#circleAtLastIndexparamtr'+ count).hide();
	
	if(text.charAt(count) == lastIndexOfText2.charAt(countAtIndex)) {
		$('#circleAtText3'+ count).fadeIn(500);
		$('#circleAtLastIndexparamtr'+ count).fadeIn(500);
		if((count < text.length-1 && countAtIndex > 0) && (text.charAt(count+1) != lastIndexOfText2.charAt(countAtIndex-1))) {
			$("#targetMarks"+ countAtIndex).css('visibility', 'hidden');
		} else if ((count < text.length-1 && countAtIndex == 0) && (text.charAt(count+1) != lastIndexOfText2.charAt(countAtIndex))) {
			$("#targetMarks"+ countAtIndex).css('visibility', 'hidden');
			$("#xmark" + (count + 1)).addClass('opacity00');
		}
		setTimeout(function() {
			$('.removeMark:eq('+ count +')').removeClass('opacity00');
			$('.removeTargetMark:eq('+ countAtIndex +')').removeClass('opacity00');
			$("#xmark"+count).css('visibility', 'visible');
			$("#xmark"+count).removeClass('fa-times not-matched');	
			$("#targetMarks"+ countAtIndex).css('visibility', 'visible');
			$("#targetMarks"+ countAtIndex).removeClass('fa-times not-matched');
			
			if(countAtIndex == (lastIndexOfText2.length-1) && (text.charAt(count) == lastIndexOfText2.charAt(countAtIndex))) {
				$("#textIndex" + (count-countAtIndex)).css("border", "2px solid #A9A9A9");
				blink($(".indexLetter:eq("+ text.lastIndexOf(lastIndexOfText2, lastIndexOfParameter) +")")); 
				$("#lengthResult").fadeOut(500);
				typing("#conclusion", "<br>The <b>last occurrence</b> of the given <span class = 'text-font'>searchText</span> before index <b>" + lastIndexOfParameter + "</b> in <span class = 'text-font'>text</span> is at the index <b style = 'color: blue'>" + text.lastIndexOf(lastIndexOfText2, lastIndexOfParameter) +"</b>. ");
				
				setTimeout(function() {
					$('.introjs-nextbutton').click();
				}, 8000);
			} else {
				setTimeout(function() {
					count++;
					countAtIndex++;
					compare4();
				}, 1800);
			}

		},1300);
		
	} else {
		$(".circle").css("border", "none");
		
		setTimeout(function() {
			
			if((countAtIndex > 0 && count <= text.length) && (text.charAt(count-1) == lastIndexOfText2.charAt(countAtIndex-1))) {
				$('.removeMark:eq('+ (count) +')').removeClass('opacity00');
				$('.removeTargetMark:eq('+ countAtIndex +')').removeClass('opacity00');
				$('#circleAtText3'+ count).fadeIn(500);
				$('#circleAtLastIndexparamtr'+ count).fadeIn(500);
				$("#xmark"+count).addClass('fa-times not-matched');
				$("#xmark"+count).css('visibility', 'visible');
				$("#targetMarks"+ countAtIndex).css('visibility', 'visible');
				$("#targetMarks"+ countAtIndex).addClass('fa-times not-matched');
				$("#lengthResult").empty();
				if(count > (lastIndexOfText2.length-1) || count > 0) {
					$("#lengthResult").append("<br>Since we are unable to find a match for <b>"+ $('#lastCheckingBox2' + countAtIndex).text() +"</b>  at <b class='text-font'>text["+ $('#textIndex' + count).text() +"]</b>, let us start searching from the next index.");
					$("#lengthResult").append("<a id = 'compareNext' style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>");
					$("#lengthResult").fadeIn(500);
					$("#compareNext").fadeIn(500);
				}
				
				$("#compareNext").click(function() {
					$("#compareNext").hide();
					$("#lengthResult").fadeOut(500);
					$('.removeMark').addClass('opacity00');
					$('.removeTargetMark').addClass('opacity00');
					count = ((count-countAtIndex) - 1);
					countAtIndex = 0;
					compare4();
				});
				
			} else {
				$('.removeMark:eq('+ (count) +')').removeClass('opacity00');
				$('.removeTargetMark:eq('+ countAtIndex +')').removeClass('opacity00');
				$("#xmark" +(count+1)).addClass('opacity00');
				$('#circleAtText3'+ count).fadeIn(500);
				$('#circleAtLastIndexparamtr'+ count).fadeIn(500);
				$("#xmark"+ count).addClass('fa-times not-matched');
				$("#xmark"+ count).css('visibility', 'visible');
				$("#targetMarks"+ countAtIndex).css('visibility', 'visible');
				$("#targetMarks"+ countAtIndex).addClass('fa-times not-matched');
				$("#lengthResult").empty();
				if(count > 0) {
					$("#lengthResult").append("<br>Since we are unable to find a match for <b>"+ $('#lastCheckingBox2' + countAtIndex).text() +"</b>  at <b class='text-font'>text["+ $('#textIndex' + count).text() +"]</b>, let us start searching from the next index.");
					$("#lengthResult").append("<a id = 'compareNext' style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>");
					$("#lengthResult").fadeIn(500);
					$("#compareNext").fadeIn(500);
				}
				
				$("#compareNext").click(function() {
					$("#compareNext").hide();
					$("#lengthResult").fadeOut(500);
					$('.removeMark').addClass('opacity00');
					$("#targetMarks"+ countAtIndex).css('visibility', 'hidden');
					count--;
					countAtIndex = 0;
					compare4();
				});
			}
			
			$('.comparingCircle').fadeOut(800);
			
			if (count <= 0) {
				$("#lengthResult").fadeOut(500);
				typing("#conclusion", "<br>The given <span class = 'text-font'>searchText</span> not found in the <span class = 'text-font'>text</span>.");
		
				setTimeout(function() {
					$('.introjs-nextbutton').click();
				}, 4000);
			}
			
		}, 1000);
		
	}
}