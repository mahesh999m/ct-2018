
	function introJsTest(stepNo){
		introjs = introJs();
		
		var stepsArr = [
		        	    {
		        	    	element: '#string_code' ,
		        	    	intro: 'The above code demonstrates the working of commonly used String methods.',
		        	    	position: 'bottom',
		        	    },   
		        	    
		          		{ 
		       	  			element: '.textDiv' ,
		              		intro: "This statement initializes the reference <b>text</b> with <b class='tooltip-text-edit ct-code-b-yellow'>Ganga</b>. <br/> </br> The text can be changed to any value whose length is between 3 and 10 characters. <br/> </br> <span class = 'errorText' style = 'color: red'> </span>",
		             		position: 'right',
		          		}, 
		          		
		          		{
			    	  		element: '#mainBoxes',
			    	  		intro: "<span id='tooltipText' class='remove-typingCursor'></span>   &nbsp",
			    	  		position: 'bottom',
			    	  		tooltipClass: "hide"
			      		}
		];
		
		if (demoType == 1) {
			stepsArr.push({
    	  		element: '#lengthMethod', 
    	  		intro: "The <b class='codeText'>length()</b> method returns the length of the String i.e the count of characters present in string reffered by <b>text</b>.",
    	  		position: 'right'
      		});
			stepsArr.push({
    	  		element: '#findingLength', 
    	  		intro: "",
    	  		position: 'bottom',
    	  		tooltipClass: "hide"
      		});
			stepsArr.push({
        	  	element: '#consoleId', 
        	 	intro: "",
        	  	position: 'bottom',
        	  	tooltipClass: "hide"
        	  
      		});
			stepsArr.push({
    	  		element: '#lowercaseMethod', 
    	  		intro: "The <b class='codeText'>toLowerCase()</b> method returns a new string with all the characters in the current string converted to lower case.",
    	  		position: 'right'
    	  
      		});
			stepsArr.push({
    	  		element: '#convertLowerCase', 
    	  		intro: "",
    	  		position: 'top',
    	  		tooltipClass: "hide"
      		});
			stepsArr.push({
    	  		element: '#consoleId', 
    	  		intro: "",
    	  		position: 'bottom',
    	  		tooltipClass: "hide"
  	  		});
  	  		
			stepsArr.push({
    	  		element: '#uppercaseMethod', 
    	  		intro: "The <b class='codeText'>toUpperCase()</b> method returns a new string with all the characters in the current string converted to upper case.",
    	  		position: 'right'
      		});
      		
			stepsArr.push({
    	  		element: '#convertUpperCase', 
    	  		intro: "",
    	  		position: 'top',
    	  		tooltipClass: "hide"
      		});
      		
			stepsArr.push({
    	  		element: '#consoleId', 
    	  		intro: "",
    	  		position: 'bottom',
    	  		tooltipClass: "hide"
  	  		});
			stepsArr.push({
    	  		element: '#charAt', 
    	  		intro: "<span id='emptyAfterException1'>The <b class='codeText'>charAt(int index)</b> method returns the character at the given <b>index</b>.</span> <span id='textAfterException'></span> <br> <br> <span class = 'errorText' style = 'color: red'> </span>",
    	  		position: 'right'
    	  
      		});
			stepsArr.push({
    	  		element: '#charAtDiv', 
    	  		intro: "",
    	  		position: 'top',
    	  		tooltipClass: "hide"        	  
      		});
			stepsArr.push({
    	  		element: '#consoleId', 
    	  		intro: "",
    	  		position: 'bottom',
    	  		tooltipClass: "hide"
    	  
  	  		});
		}
		
		if (demoType == 2) {
			stepsArr.push({
    	 		element: '#substringMethod1', 
    	  		intro: "<span id='emptyAfterException2'>The <b class='codeText'>substring(int beginIndex)</b> method returns a new string with all the characters starting at the given <b>beginIndex</b> in the original string till the last character.</span><span id='textAfterException2'></span> <br> <br> <span class = 'errorText' style = 'color: red'> </span>",
    	  		position: 'right',        	  
      		});
      		
      		stepsArr.push({
    	  		element: '#substring1Div', 
    	  		intro: "",
    	  		position: 'bottom',
    	  		tooltipClass: "hide"
      		});
      		
      		stepsArr.push({
    	  		element: '#consoleId', 
    	  		intro: "",
    	  		position: 'bottom',
    	  		tooltipClass: "hide"
      		});
      		
      		stepsArr.push({       	  
    	  		element: '#substringMethod2', 
    	  		intro: "<span id='emptyAfterException3'>The <b class='codeText'>substring(int beginIndex, int endIndex)</b> method returns a new string with all the characters between given <b>beginIndex</b> and <b>endIndex</b> in the original string.</span><span id='textAfterException3'></span> <br> <br> <span class = 'errorText' style = 'color: red'> </span>",
    	  		position: 'right',
      		});
      		stepsArr.push({
    	  		element: '#substring2Div', 
    	  		intro: "<span id='tooltipTextForSubStr' class='remove-typingCursor'></span>   <br> <span id = 'tooltipTextForSubStr2' class =' remove-typingCursor'></span> <br> <br> <span class = 'errorText' style = 'color: red'> </span>",
    	  		position: 'bottom',
    	  		tooltipClass: "hide"       	  
      		});
      		stepsArr.push({
    	  		element: '#consoleId', 
    	  		intro: "",
    	  		position: 'bottom',
    	  		tooltipClass: "hide"
      		});
		}
		
		if (demoType == 3) {
			stepsArr.push({
    	  		element: "#replace",
    	  		intro: "The <b class='codeText'>replace(char oldChar, char newChar)</b> method returns a new string with all occurances of <b>oldChar</b> being replaced by the given <b>newChar</b>.<br> <br> <span class = 'errorText' style = 'color: red'> </span>",
    	  		position:'right',
      		});
			stepsArr.push({
    	  		element: '#replaceChar', 
    	  		intro: "",
    	  		position: 'bottom',
    	  		tooltipClass: "hide"
      		});
			stepsArr.push({
    	  		element: '#consoleId', 
    	  		intro: "",
    	  		position: 'bottom',
    	  		tooltipClass: "hide"
      		});
		}
		
		stepsArr.push({
			element: '#restart', 
			intro: "Click to Restart",
			position: 'right',
		});
		
	 	introjs.setOptions({
        	steps: stepsArr      	
	 	});
	 
	 	introjs.setOption("showStepNumbers","false");
	 	introjs.setOption("exitOnEsc","true");
	 	introjs.setOption("exitOnOverlayClick","true");
	 	introjs.setOption("showBullets","false");
	 	introjs.setOption('keyboardNavigation', false);
	 
	 	introjs.goToStep(stepNo).start();

	 	$('.introjs-bullets').hide();
	 	$('.introjs-skipbutton').hide();
	 	$('.introjs-nextbutton').hide(); 
	 	$('.introjs-prevbutton').hide();
	 	
	 	
	 	// nbsp; removed from the following apepending button for extra spaces in tootip text //;
	 
	 	$('.introjs-tooltipbuttons').append("<a id='code' style='background-color:green' class='introjs-button'>Next &#8594;</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='execute' style='background-color:green' class='introjs-button'>Next &#8594;</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='skip' style='background-color:orange' class='introjs-button skip-space'>Skip</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='liveDisplay1' style='background-color:green' class='introjs-button'>Next &#8594;</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='skip2' style='background-color:orange' class='introjs-button skip-space'>Skip</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='liveDisplay2' style='background-color:green' class='introjs-button'>Next &#8594;</a>");	 
	 	$('.introjs-tooltipbuttons').append("<a id='skip3' style='background-color:orange' class='introjs-button skip-space'>Skip</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='liveDisplay3' style='background-color:green' class='introjs-button'>Next &#8594;</a>"); 
	 	$('.introjs-tooltipbuttons').append("<a id='skip4' style='background-color:orange' class='introjs-button skip-space'>Skip</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='liveDisplay4' style='background-color:green' class='introjs-button'>Next &#8594;</a>");	 
	 	$('.introjs-tooltipbuttons').append("<a id='skip5' style='background-color:orange' class='introjs-button skip-space'>Skip</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='liveDisplay5' style='background-color:green' class='introjs-button'>Next &#8594;</a>"); 
	 	$('.introjs-tooltipbuttons').append("<a id='skip6' style='background-color:orange' class='introjs-button skip-space'>Skip</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='liveDisplay6' style='background-color:green' class='introjs-button'>Next &#8594;</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='skip7' style='background-color:orange' class='introjs-button skip-space'>Skip</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='liveDisplay7' style='background-color:green' class='introjs-button'>Next &#8594;</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='nextAfterBoxes' style='background-color:green' class='introjs-button'>Next &#8594;</a>");
	 	$('.introjs-tooltipbuttons').append("<a id='nextAfterException' style='background-color:green' class='introjs-button'>Next &#8594;</a>");
	}

	
	function stringMethodsReady() {
		introJsTest(1);
		
		hiding();
		$("#code").show();
		
		$('body').keydown(function(e) {
			if(e.which == 13) {
				e.preventDefault();
			}	
    	});
		
		$("#givenText").keydown(function(e) { // conditions to enter text
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
		
		$("#givenText").keyup(function() {
	    	introjs.refresh();
	    	$(".tooltip-text-edit").text($("#givenText").text());
	        if ($(this).text().length > 0) {
	        	$('.errorText').empty();
	        	$("#execute").removeClass("opacity00");
	        } else {
	        	charAtEnd(document.getElementById("givenText"));
	        	$("#execute").addClass("opacity00");
	        	$('.errorText').text("please enter text");
	        }
	    });
		$("#charAtIndex").keyup(function() {
	    	introjs.refresh();
	    	if ($("#charAtIndex").text().length > 0) {
	        	$('.errorText').empty();
	        	$("#liveDisplay4").removeClass("opacity00");
	        	$("#skip4").removeClass("opacity00");
	        } else {
	        	$("#liveDisplay4").addClass("opacity00");
	        	$("#skip4").addClass("opacity00");
	        	$('.errorText').text("please enter index");
	        }
	    });
		$("#substring1Index").keyup(function() {
	    	introjs.refresh();
	    	$("#beginIndexInMethod").text($("#substring1Index").text());
	        if ($(this).text().length > 0) {
	        	$('.errorText').empty();
	        	$("#liveDisplay5").removeClass("opacity00");
	        	$("#skip5").removeClass("opacity00");
	        } else {
	        	$("#liveDisplay5").addClass("opacity00");
	        	$("#skip5").addClass("opacity00");
	        	$('.errorText').text("please enter index");
	        }
	    });
		$("#beginIndex").keyup(function() {
	    	introjs.refresh();
	    	$("#beginIndexInSub2").text($("#beginIndex").text());
	        if ($("#beginIndex").text().length > 0 && $("#endIndex").text().length > 0) {
	        	$('.errorText').empty();
	        	$("#liveDisplay6").removeClass("opacity00");
	        	$("#skip6").removeClass("opacity00");
	        } else {
	        	$("#liveDisplay6").addClass("opacity00");
	        	$("#skip6").addClass("opacity00");
	        	$('.errorText').text("please enter index");
	        }
	    });
		$("#endIndex").keyup(function() {
	    	introjs.refresh();
	    	$("#endIndexInSub2").text($("#endIndex").text());
	    	if ($("#beginIndex").text().length > 0 && $("#endIndex").text().length > 0) {
	        	$('.errorText').empty();
	        	$("#liveDisplay6").removeClass("opacity00");
	        	$("#skip6").removeClass("opacity00");
	        } else {
	        	$("#liveDisplay6").addClass("opacity00");
	        	$("#skip6").addClass("opacity00");
	        	$('.errorText').text("please enter index");
	        }
	    });
		$("#oldChar").keyup(function() {
	    	introjs.refresh();
	    	$("#oldCharInMethod").text($("#oldChar").text());
	        if ($("#oldChar").text().length > 0 && $("#newChar").text().length > 0) {
	        	$('.errorText').empty();
	        	$("#liveDisplay7").removeClass("opacity00");
	        	$("#skip7").removeClass("opacity00");
	        } else {
	        	$("#liveDisplay7").addClass("opacity00");
	        	$("#skip7").addClass("opacity00");
	        	$('.errorText').text("please enter character");
	        }
	    });
		$("#newChar").keyup(function() {
	    	introjs.refresh();
	    	$("#newCharInMethod").text($("#newChar").text());
	    	if ($("#oldChar").text().length > 0 && $("#newChar").text().length > 0) {
	        	$('.errorText').empty();
	        	$("#liveDisplay7").removeClass("opacity00");
	        	$("#skip7").removeClass("opacity00");
	        } else {
	        	$("#liveDisplay7").addClass("opacity00");
	        	$("#skip7").addClass("opacity00");
	        	$('.errorText').text("please enter character");
	        }
	    });
		
		$(".replace-keys").keydown(function(e) { // conditions to enter text
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
		
		$(".indexLengthLimit").keydown(function(e) { 
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
		 
		$("#code").click(function() {
		    $("#givenText").attr("contenteditable", true);
			charAtEnd(document.getElementById("givenText"));
			hiding();			
			$('#execute').show();
			$('.introjs-nextbutton').click();
		}); 		
		
		$('#execute').click(function() {                 // clicking excecute button
			$('.introjs-tooltip').css("width", "600px");
			content = $('#givenText').text();
			
				if(content.length > 2) {
					hiding();				
					$("#givenText").attr("contenteditable", false);
					$('#enteredText').hide();
					$('#textIndices').hide();
					
					$("#animationDiv").append( $("#mainBoxes") );
					givenTween();				
					$('.introjs-nextbutton').click(); 
					
				
		          if (demoType == 2) {
		      		
		      		$('.introjs-tooltip').css("width", "750px");
		      		
		      		var tl = new TimelineLite();
		      		
		      		$('.introjs-helperLayer ').one('transitionend', function() {
		      			$('#enteredText').append("text = ");
						$('#enteredText').fadeIn(800);
		      		}); 
		      				      		
		      		
					tl.staggerFrom(".box", 0.5, {opacity:0, y:-200, delay:1.8});
					
					tl.from(".box", 0.5, {onComplete: function() {
						$('#textIndices').append("Indices = ");
						$('#textIndices').fadeIn(800);
					}});
					
					tl.staggerFrom(".circle", 0.5, {opacity:0, y:-200, delay:0.5});
      				
      				tl.from("#", 0.5, {delay:0.5, onComplete : function() {
      					$("#nextAfterBoxes").hide();
      					$('.introjs-nextbutton').click();
      					$('#skip5').show();
    					$('#liveDisplay5').show();
    					
    					charAtEnd(document.getElementById("substring1Index"));
	      			}});
										
		      
		          	} else if (demoType == 1) {
		      
					$('.introjs-helperLayer ').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						typing("#tooltipText", "A String is made up of a sequence of characters. These characters are stored in a character array inside a String object.");
		      		});
					
					var tl = new TimelineLite();
										
					tl.from("#",0.5,{delay:10.4, onComplete: function() {
						$('#enteredText').append("text = ");
						$('#enteredText').fadeIn(800);
					}});
					tl.staggerFrom(".box", 0.5, {opacity:0, scale:2, y:-200, delay:1.0}, 0.5);
					tl.from(".box",0.5,{onComplete: function() {
						$('#textIndices').append("Indices = ");
						$('#textIndices').fadeIn(800);
					}});
					tl.staggerFrom(".circle", 0.5, {opacity:0, scale:2, y:-200, delay:1.0}, 0.5);								
		      		tl.from("#", 0.5, {onComplete : function() {
		      			$('#nextAfterBoxes').show();
		      		}});
		      	
		      		$('#nextAfterBoxes').click( function() {
		      			$("#nextAfterBoxes").hide();
		      			$('.introjs-nextbutton').click();
		      			$('#liveDisplay1').show();
						$('#skip').show();
		      		});
				
		         	} else if (demoType == 3) {
		      			      		      							
						$("#oldCharInMethod").empty();
						$("#oldCharInMethod").append(content.charAt(1));
		      			$('#oldChar').empty();
						$('#oldChar').append(content.charAt(1));
						
						var tl = new TimelineLite();
						$('.introjs-helperLayer ').one('transitionend', function() {
			      			$('#enteredText').append("text = ");
							$('#enteredText').fadeIn(800);
						}); 
						
						tl.staggerFrom(".box", 0.5, {opacity:0, y:-200, delay:1.8});
						tl.from(".box",0.5,{onComplete: function() {
							$('#textIndices').append("Indices = ");
							$('#textIndices').fadeIn(800);
						}});
						tl.staggerFrom(".circle", 0.5, {opacity:0, y:-200, delay:0.5});
						tl.from("#", 0.5, {delay:0.5, onComplete : function() {
							$('.introjs-nextbutton').click();
							$('#liveDisplay7').show();
							$('#skip7').show();
							charAtEnd(document.getElementById("oldChar"));
		      			}});
		      	
		          	}
		      	
			
				} else {
					charAtEnd(document.getElementById("givenText"));
				}
		});
		
		$("#restart").click(function() {
			 hiding();
			 location.reload();
		});
		
		var x = 0;
		$('#liveDisplay1').click(function(){       // display of length method
			
			$("#mainBoxes").hide();
			hiding();
			$("#findingLength").show();		
			
			$("#lengthRow1").append($("#indexesAtLength"));
			$("#lengthRow2").append($("#textAtLength"));
			$("#lengthRow1").append($("#animateIndexes"));
			$("#lengthRow2").append($("#animateBoxes")); 
			$('#findingLength').append($("#lengthResult"));
			
			stringLength();
			$('.introjs-nextbutton').click();
			$("#indexesAtLength").append("Indices = ");
			$("#textAtLength").append("text = ");
			
			var tl = new TimelineLite();
			
			tl.from(".box", 0.5, {opacity:0});
			tl.from(".box", 0.5, {onComplete:function() {
				typing("#lengthResult", "<br>Length of the text : <span style = 'color:green; position: relative;'   id='contentLength'> </span>");				
			}});			
			tl.from(".circle", 0.5, {onComplete : function() {											
				 stringInterval = setInterval(function() {			
					$('#lengthBoxId' + x).append("<span style = 'color:green; position: absolute;' class = 'countingCircle' id = 'removeCircle" + x + "'></span>");
					$('#removeCircle'+ (x-1)).hide();
						
					var length1 = $('#contentLength').offset();
					var length2 = $('#lengthBoxId' + x).offset();
					var length3 = $('#lengthBoxId' + (x+1)).offset();
						
						if(x == (content.length-1)) {							
							var topL = length2.top -length1.top;
							var leftL = length2.left- length1.left;
							
							tl.to('.countingCircle', 1, {top : "-=" + (topL+6), left : "-=" + leftL, onComplete : function() {
								$('#contentLength').text(parseInt(x));
								$('.countingCircle').fadeOut(1000);
								
								setTimeout(function() {
									$('.introjs-nextbutton').click();	
									$('.introjs-helperLayer ').one('transitionend', function() {
										typingOutput("#runEditor1", "text.length() = " + content.length + "");
									});
								},1000);
								
								setTimeout(function() {
									$("#mainBoxes").show();
									hiding();
									$('#skip2').show();
									$('#liveDisplay2').show();
									$('.introjs-nextbutton').click();
								},3400);
							}});
						} else {
							var topL = length2.top -length1.top;
							var leftL = length2.left- length1.left;
						
							var topL2 = length3.top -length1.top;
							var leftL2 = length3.left- length1.left;
						
							tl.to('.countingCircle', 1, {top : "-=" + (topL+6), left : "-=" + leftL, onComplete : function() {
								$('#contentLength').text(parseInt(x));
							}}).to('#removeCircle'+x, 1, {top : "+=" + (topL2 + 6), left : "+=" + leftL2, delay:0.5 });
						}
						if(++x == (content.length)) {
								clearInterval(stringInterval);
						}
				},3000); 
			}}, "-=2");
		});				
		
		$('#skip').click(function() { 			// skip length method
			hiding();
			$('.introjs-nextbutton').click();			
			$('.introjs-nextbutton').click();
			
			var tl = new TimelineLite();
			
			$('.introjs-helperLayer ').one('transitionend', function() {
				typingOutput("#runEditor1", "text.length() = "+content.length+"");
			});
			
			tl.from("#runEditor1",0.5,{delay:2.3, onComplete : function() {
				$('.introjs-nextbutton').click();
				$('#skip2').show();
				$('#liveDisplay2').show();
			}});		
		});
		
		$('#liveDisplay2').click(function() {  // display of lower case method
			$("#mainBoxes").hide();			
			hiding();
			$("#convertLowerCase").show();			
			
			$("#lowerCaseRow1").append($("#beforeLowerCaseIndexes"));
			$("#lowerCaseRow2").append($("#textAtLowerCase"));
			$("#lowerCaseRow1").append($("#beforeLowerCaseIndexes"));
			$("#lowerCaseRow2").append($("#beforeLowerCaseBoxes"));				
			$("#lowerCaseRow3").append('<div id= "lowerCaseResult" style="margin-top:5.5%;" class="col-xs-4  result-font remove-typingCursor"> </div>');
			$("#lowerCaseRow3").append('<div class="col-xs-8" id="myFlip"></div>');
			
			$("#indexesAtLowerCase").append("Indices = ");
			$("#textAtLowerCase").append("text = ");
			
				if(content.length != 0) {
					flipText();
					
					var tl = new TimelineLite();
					
					tl.from(".box", 0.5, {opacity:0});
					
					tl.from(".circle", 0.5, {delay:0.5, onComplete : function() {
						typing("#lowerCaseResult", "New string in lower case:");
					}})
					
					tl.from("#myFlip",2, {opacity:0, y:-75, delay: 3, onComplete : function() {
						tl.from("#myFlip", 1.5, {opacity:1, rotationX:180, onUpdate : function() {
							
								$('.before-covert').fadeOut(1000);	
								$('.convert').fadeIn(1000);
								
						} , onComplete : next});
					}});
				}
				$('.introjs-nextbutton').click();
			});	
		
		$('#skip2').click(function() {   // skip lower case method
			$("#mainBoxes").show();
			hiding();	
			
			$('.introjs-nextbutton').click();
			$('.introjs-nextbutton').click();
								
			var tl = new TimelineLite();
			
			$('.introjs-helperLayer ').one('transitionend', function() {
				typingOutput("#runEditor2", "text.toLowerCase() = "+content.toLowerCase()+"");
			});
			
			tl.from("#runEditor2",0.5,{delay : 2.4, onComplete : function() {
				$('.introjs-nextbutton').click();
				$('#skip3').show();
				$('#liveDisplay3').show();
			}});
		});
		
		$('#liveDisplay3').click(function() {    // display of uppercase method
			$('.introjs-tooltip').css("width", "750px");
			$("#mainBoxes").hide();
			hiding();
			
			$("#convertUpperCase").show();
			$("#upperCaseResult").show();
			$("#upperCaseRow1").append($("#beforeUpperCaseIndexes"));
			$("#upperCaseRow2").append($("#textAtUpperCase"));
			$("#upperCaseRow1").append($("#beforeUpperCaseIndexes"));
			$("#upperCaseRow2").append($("#beforeUpperCaseBoxes"));
			$("#upperCaseRow3").append('<div id= "upperCaseResult" style="margin-top:5.5%;" class="col-xs-4  result-font remove-typingCursor"> </div>');
			$("#upperCaseRow3").append('<div class="col-xs-8" id="myFlip2"></div>');
			
			if(content.length != 0) {
				$("#indexesAtUpperCase").append("Indices = ");
				$("#textAtUpperCase").append("text = ");
				
				flipText2();							
				
				var tl = new TimelineLite();
				
				tl.from(".box", 0.5, {opacity:0});
				
				tl.from(".circle", 0.5, {onComplete:function(){
					typing("#upperCaseResult", "New string in upper case:");
				}});
				
				tl.from("#myFlip2",2, {opacity:0, y:-75, delay: 3, onComplete : function() {
					tl.from("#myFlip2", 1.5, {opacity:1, rotationX:180, onUpdate : function() {	
							$('.before-convert2').fadeOut(1000);	
							$('.convert2').fadeIn(1000);
					},  onComplete : next2});
				}});
			}
			$('.introjs-nextbutton').click();	
			charAtEnd(document.getElementById("charAtIndex"));
		})
		
		$('#skip3').click(function() {   // skip upper case method
			$('.introjs-tooltip').css("width", "750px");
			$("#mainBoxes").show();
			hiding();
			$('.introjs-nextbutton').click();
			$('.introjs-nextbutton').click();
					
			var tl = new TimelineLite();
			$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor3", "text.toUpperCase() = "+content.toUpperCase()+"");
			});				
			tl.from("#runEditor3",0.5,{delay:2.4, onComplete : function() {
				$('.introjs-nextbutton').click();
				$('#skip4').show();
				$('#liveDisplay4').show();
			}});
			charAtEnd(document.getElementById("charAtIndex"));
		}); 
		
		 $('#liveDisplay4').click(function() {  // display of charAt method
		 	var index = parseInt($('#charAtIndex').text());
		 	var lineNo = 7;

			$('.introjs-tooltip').css("width", "335px");	
		 	$("#animationDiv").append($("#charAtDiv"));
			$("#charAtRow1").append($("#indexesAtCharAt"));
			$("#charAtRow2").append($("#textAtCharAt"));
			$("#charAtRow1").append($("#indexAt"));
			$("#charAtRow2").append($("#charAtBoxes")); 
			$('#charAtDiv').append($("#charAtResult"));
			$('#charIndexInMethod').empty();
			$('#charIndexInMethod').append(index);				
			
			if(isNaN(index)) {
				charAtEnd(document.getElementById("charAtIndex"));
				$("#restartDiv").css("margin-top", "10%");
			}
			$("#restartDiv").css("margin-top", "10%");
			if(isNaN(index)) {
				charAtEnd(document.getElementById("charAtIndex"));
			}
			if (index < content.length && index >= 0 && index.length != 0 && !(isNaN(index))) {										
				$('#charAtIndex').addClass('position-absolute');
				$("#runEditor4").empty();
				$("#mainBoxes").hide();
				$("#runEditor4").css("color", "white");
				hiding();
				charAtTween();
				
				$("#indexesAtCharAt").append("Indices = ");
				$("#textAtCharAt").append("text = ");
				
				var tl = new TimelineLite();	
				
				tl.from(".box", 0.5, {opacity:0, onComplete : function() {
					typing("#charAtResult", "<br> Character at index "+ index+ ": <span id='result'> </span>");
					$("#back_index").append(index);
					$("#back_index").css('position', 'relative');
				}});
				
				tl.from(".circle",0.5, {});										
			
				var len1 = $("#charAtIndex").offset();
				var len2 = $("#charIndex").offset();
			
				var topLen = len2.top - len1.top;
				var leftLen = len2.left-len1.left;
			
				tl.to("#charAtIndex",3,{delay:2.5, color:'green', top:"+="+(topLen+4), left: "+="+(leftLen+9),onComplete : function() {
						$("#charIndex").hide();	 
						$('#charAtIndex').css({fontSize: 16});
						$('#charAtIndex').attr('contenteditable','false');
				}});
			
				tl.from('#charAtIndex',0.5,{delay:1.0,onComplete:color});
				
				$('.introjs-nextbutton').click();		
					
			} else if (index >= content.length || index < 0) {
				$("#charAtIndex").attr("contenteditable", false);
				
					$("#runEditor4").empty();
					
					introjs.goToStep(15);
					introjs._introItems[introjs._currentStep].tooltipClass = '';
					introjs._introItems[introjs._currentStep].position = 'top';
					introjs._introItems[introjs._currentStep].intro = "<span class='tooltipTyping remove-typingCursor'> &nbsp; </span>";
											
					$('#skip4').hide();
					$("#liveDisplay4").hide();
					
					var tl = new TimelineLite();
					
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#runEditor4").css("color", "red");
						$("#runEditor4").append(getExceptionRange(index, lineNo));
						$("#exceptionLine1").fadeTo(1000, 1, function() {
								$("#exceptionLine2").fadeTo(1000, 1, function() {
									$("#exceptionLine3").fadeTo(1000, 1, function() {
										typing(".tooltipTyping", "<b>StringIndexOutOfBoundsException</b> indicates that we are trying to access a char with an index which is out of bounds, meaning greater than the index of the last character in the String.")
									})
								})
							})
						});
					
					tl.from("#", 0.5, {delay:17.8, onComplete : function() {
						$("#nextAfterException").show();																
					}});
				}
			
			$("#nextAfterException").click(function() {
				hiding();
				$("#charAtIndex").attr("contenteditable", true);
				charAtEnd(document.getElementById("charAtIndex"));
				
				$("#nextAfterException").hide();
					
				$('#skip4').show();
				$("#liveDisplay4").show();
				introjs.goToStep(13);
				
				introjs._introItems[introjs._currentStep + 2].tooltipClass = 'hide';
				
				setTimeout(function() {
					$("#emptyAfterException1").empty();
					$('#textAfterException').empty();
					$('#textAfterException').append("Change the index (" + index + ") provided to the charAt(int index) method such that the index is between the bounds of the string.<br/>The currrent string's length is <b>" + content.length + "</b>, hence a valid index can be any value between <b>0</b> and " + (content.length-1) + "</b>.");
				}, 500);
			});
		}) 
		
		$('#skip4').click(function() {  			// skip charAt method 
			$('.introjs-tooltip').css("width", "360px");
			$("#mainBoxes").show();
			hiding();
			$('#runEditor4').empty();
			
			$("#runEditor4").css("color", "white");
			$('.introjs-nextbutton').click();
			$('.introjs-nextbutton').click();
			
			var index = parseInt($('#charAtIndex').text());
			var tl = new TimelineLite();							
			
			if(index >= content.length || isNaN(index)) {
				$('#charAtIndex').empty();
				$('#charAtIndex').append('0');					
				$('#charIndexInMethod').empty();
				$('#charIndexInMethod').append('0');
				
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor4", "text.charAt(0) = " + content.charAt(0) + "");
				});
				
				tl.from("#runEditor4", 0.5, {delay:2.3, onComplete : function() {
					$('#restart').fadeTo(1000,1);
					$('.introjs-nextbutton').click();
				}});
				
			} else {
				$('#charIndexInMethod').empty();
				$('#charIndexInMethod').append(index);
				
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor4", "text.charAt("+index+") = "+content.charAt(index)+"");
				});
				tl.from("#runEditor4",0.5,{delay:2.3,onComplete:function() {
					$('#restart').fadeTo(1000,1);
					$('.introjs-nextbutton').click();
				}});
			}	
		});
		$('#liveDisplay5').click(function() { 
			var subIndex = parseInt($("#substring1Index").text());
			var lineNo = 4;
			
			$("#substring1Div").show();
			$("#animationDiv").append($("#substring1Div"));
			$("#substring1Row1").append($("#indexesAtSubstring1"));
			$("#substring1Row2").append($("#textAtSubstring1"));
			$("#substring1Row1").append($("#originalIndexes"));
			$("#substring1Row2").append($("#originalBoxes"));
			$("#substring1Row3").append('<div id= "substring1Result" style="margin-top:5.5%;" class="col-xs-4  result-font remove-typingCursor"> </div>');
			$("#substring1Row3").append('<div class="col-xs-8" id="subBoxes"></div>');
			$("#beginIndexInMethod").empty();
			$("#beginIndexInMethod").append(subIndex);
			
			if(isNaN(subIndex)) {
				charAtEnd(document.getElementById("substring1Index"));
			}
			
			if(subIndex < content.length && subIndex >= 0 && subIndex.length != 0 && !(isNaN(subIndex))) {
				$("#indexesAtSubstring1").append("Indices = ");
				$("#textAtSubstring1").append("text = ");
			
				$("#runEditor1").css("color", "white");
				$('#runEditor1').empty();
				$("#mainBoxes").hide();
				substringTween();
				
				var tl = new TimelineLite();		
				var ln1 = $(".move").offset();
				var ln2 = $("#subBoxes").offset();
				var topLn = ln2.top - ln1.top;
				var leftLn = ln2.left-ln1.left;				
					
				tl.from(".box",0.5, {opacity:0});
				tl.from(".box", 0.5, {delay:0.5, onComplete : function(){
					typing("#substring1Result", "substring("+subIndex+") of the text:");
				}});	
				
				tl.from(".circle", 0.5, {});
				tl.from(".circle", 0, {delay:1.8, onComplete : function() {
					var x = subIndex;		
					stringInterval = setInterval(function(){
						
						$("#roundUp"+ x).css("border", "2px solid green");
						
						if(++x == content.length) {
							//introjs.exit();//exit rdm
							clearInterval(stringInterval);							
						}	
					},500);
				}});
				
				var nextAfter = (content.length - subIndex)/2
				tl.from("#subBoxes", 3, {opacity:0, y:-topLn, x:-leftLn, delay:(nextAfter+0.5), onComplete: next4});
				$('.introjs-nextbutton').click();
				charAtEnd(document.getElementById("beginIndex"));
			}
			
			else if (subIndex >= content.length || subIndex < 0) {
				charAtEnd(document.getElementById("substring1Index"));
				
				$("#runEditor1").empty();
				
				introjs.goToStep(6);
				introjs._introItems[introjs._currentStep].tooltipClass = '';
				introjs._introItems[introjs._currentStep].position = 'top';				 
				introjs._introItems[introjs._currentStep].intro = "<span class='tooltipTyping remove-typingCursor'> &nbsp; </span>";
																
				$('#skip5').hide();
				$("#liveDisplay5").hide();
				
				var tl = new TimelineLite();
				
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#runEditor1").css("color", "red");
					$("#runEditor1").append(getExceptionRange(subIndex, lineNo));
					
					$("#exceptionLine1").fadeTo(1000, 1, function() {
						$("#exceptionLine2").fadeTo(1000, 1, function() {
							$("#exceptionLine3").fadeTo(1000, 1, function () {
								typing(".tooltipTyping", "<b>StringIndexOutOfBoundsException</b> indicates that we are trying to access a char with an index which is out of bounds, meaning greater than the index of the last character in the String.")
							})
						})
					})		
				});
				tl.from("#", 0.5, {delay:17.8, onComplete : function() {
					$("#nextAfterException").show();																
				}});
				
				$("#nextAfterException").click(function() {
					charAtEnd(document.getElementById("substring1Index"));
					$("#nextAfterException").hide();
						
					$('#skip5').show();
					$("#liveDisplay5").show();

					introjs.goToStep(4);
					introjs._introItems[introjs._currentStep + 2].tooltipClass = 'hide';
					
					setTimeout(function() {
						$("#emptyAfterException2").empty();
						$('#textAfterException2').empty();
						$('#textAfterException2').append("Change the index (" + subIndex + ") provided to the substring(int index) method such that the index is between the bounds of the string.<br/>The currrent string's <b>(" + content + ")</b> length is <b>" + content.length + "</b>, hence a valid index can be any value between <b>0</b> and <b>" + (content.length-1) + "</b>.");
					}, 500);
				});
			}
		});
		$('#skip5').click(function() {
			$('#runEditor1').empty();
			$("#runEditor1").css("color", "white");
			$("#mainBoxes").show();
			hiding();
			
			var subIndex = parseInt($("#substring1Index").text());
			var tl = new TimelineLite();
			
			$('.introjs-nextbutton').click();
			$('.introjs-nextbutton').click();
			
			if(subIndex >= content.length || isNaN(subIndex)) {
				$('#substring1Index').empty();
				$("#substring1Index").append('0');
				$("#beginIndexInMethod").empty();
				$("#beginIndexInMethod").append('0');
				
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor1", "text.substring(0) = " + content.substring(0) + "");
				});
				
				tl.from("#runEditor1", 0.5, {delay:2.4, onComplete : function() {
					$('.introjs-nextbutton').click();
					$('#skip6').show();
					$('#liveDisplay6').show();
				}});
				
			} else {
				$("#beginIndexInMethod").empty();
				$("#beginIndexInMethod").append(subIndex);
			
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor1", "text.substring(" + subIndex + ") = "+content.substring(subIndex)+"");
				});	
				
				tl.from("#runEditor1", 0.5, {delay:2.4, onComplete : function() {
					$('.introjs-nextbutton').click();
					$('#skip6').show();
					$('#liveDisplay6').show();
				}});	
			}	
			charAtEnd(document.getElementById("beginIndex"));				
		})
		
		$('#liveDisplay6').click(function() {
			var beginIndex = parseInt($("#beginIndex").text());
			var endIndex = parseInt($("#endIndex").text());
			var lineNo = 5;
			
			$("#substring2Div").show();
			$("#beginIndexInSub2").empty();
			$("#beginIndexInSub2").append(beginIndex);
			$("#endIndexInSub2").empty();
			$("#endIndexInSub2").append(endIndex);
			$("#animationDiv").append($("#substring2Div"));
			$("#substring2Row1").append($("#indexesAtSubstring2"));
			$("#substring2Row2").append($("#textAtSubstring2"));
			$("#substring2Row1").append($("#originalIndexes2"));
			$("#substring2Row2").append($("#originalBoxes2"));
			$("#substring2Row3").append('<div id= "substring2Result" style="margin-top:5.5%;" class="col-xs-4  result-font remove-typingCursor"> </div>');
			$("#substring2Row3").append('<div class="col-xs-8" id="subBoxes2"></div>');
			
			if(isNaN(beginIndex) || isNaN(endIndex)) {
				charAtEnd(document.getElementById("beginIndex"));
				if(isNaN(endIndex)) {
					$("#endIndex").append('3');
				}				
			}
			if(((beginIndex < content.length && endIndex < content.length+1) && (beginIndex >= 0 && endIndex > 0 && endIndex > beginIndex)) && (!(isNaN(beginIndex)) && !(isNaN(endIndex)))){	
				$("#indexesAtSubstring2").append("Indices = ");
				$("#textAtSubstring2").append("text = ");
				
				$('#runEditor2').empty();
				$("#runEditor2").css("color", "white");
				$("#mainBoxes").hide();
				$('.introjs-nextbutton').click();
				hiding();
				substring2Tween();
				
				var tl = new TimelineLite();		
				var Ln1 = $(".move2").offset();
				var Ln2 = $("#subBoxes2").offset();
				var topL = Ln2.top - Ln1.top;
				var leftL = Ln2.left-Ln1.left;
								
				tl.from(".box", 0.5, {opacity:0});
				tl.from(".box", 0.5, {delay:0.5, onComplete : function(){
					typing("#substring2Result", "substring(" + beginIndex + ", " + endIndex + ") of the text:");
				}});
				tl.from(".circle", 0.5, {});
				tl.from(".circle", 0, {delay:1.8, onComplete : function() {
					var x = beginIndex;
					stringInterval = setInterval(function(){
						$("#roundUp2"+x).css("border","2px solid green");	
						clearInterval(stringInterval);				
					},500);
					setTimeout(function(){
						$('.introjs-tooltip').removeClass('hide');
						typing("#tooltipTextForSubStr", "Start index is inclusive i.e, character at <b style = 'color: yellow'>"+beginIndex+"</b> is included.");
					},500);
				}});
				tl.from(".circle", 0, {delay: 6, onComplete : function() {
					var count = beginIndex+1;
					stringInterval = setInterval(function(){
						$("#roundUp2"+count).css("border","2px solid green");	
						if(count == endIndex-1) {
							typing("#tooltipTextForSubStr2", "End index is exclusive i.e, character at <b style = 'color: yellow'>"+endIndex+"</b> is <b style = 'color: red'>not</b> included.");
						}
						if(++count == endIndex) {						
							console.log("clearInterval  "+ count);
							clearInterval(stringInterval);				
						}	
					},500);
				}});
				var startAfter = (endIndex - beginIndex)/2;
				tl.from("#subBoxes2", 3, {opacity:0, y:-topL, x:-leftL, delay:(startAfter+0.5)+5, onComplete : next5});	
			}
			else if (beginIndex > endIndex || (beginIndex >= content.length || endIndex > content.length)) {
				charAtEnd(document.getElementById("beginIndex"));
				$("#runEditor2").empty();
				introjs.goToStep(9);
				
				introjs._introItems[introjs._currentStep].tooltipClass = '';
				introjs._introItems[introjs._currentStep].position = 'top';
				introjs._introItems[introjs._currentStep].intro = "<span class='tooltipTyping remove-typingCursor'> &nbsp; </span>";
				
				$('#skip6').hide();
				$("#liveDisplay6").hide();
				var tl = new TimelineLite();
				if(endIndex < content.length+1) {									
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#runEditor2").css("color", "red");
						$('#runEditor2').append(getExceptionRange2(beginIndex, endIndex, lineNo));
						$("#substring1Exception1").fadeTo(1000, 1, function() {
							$("#substring1Exception2").fadeTo(1000, 1, function() {
								$("#substring1Exception3").fadeTo(1000, 1, function() {
									typing(".tooltipTyping", "<b>StringIndexOutOfBoundsException</b> indicates that we are trying to access a char with an index which is out of bounds, meaning greater than the index of the last character in the String.")
								})
							})
						})
					});
				}
				if(endIndex > content.length) {	
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#runEditor2").css("color", "red");
						$('#runEditor2').append(getExceptionRange2(beginIndex, endIndex, lineNo));
						
						$("#substring2Exception1").fadeTo(1000, 1, function() {
							$("#substring2Exception2").fadeTo(1000, 1, function() {
								$("#substring2Exception3").fadeTo(1000, 1, function() {
									typing(".tooltipTyping", "<b>StringIndexOutOfBoundsException</b> indicates that we are trying to access a char with an index which is out of bounds, meaning greater than the index of the last character in the String.")
								})
							})
						});
					});
				}
				tl.from("#", 0.5, {delay:17.8, onComplete : function() {
					$("#nextAfterException").show();																
				}});
				
				$("#nextAfterException").click(function() {
					hiding();
					charAtEnd(document.getElementById("beginIndex"));
					
					$("#nextAfterException").hide();
					$('#skip6').show();
					$("#liveDisplay6").show();

					introjs.goToStep(7);
					introjs._introItems[introjs._currentStep + 2].tooltipClass = 'hide';
					
					setTimeout(function() {
						$("#emptyAfterException3").empty();
						$('#textAfterException3').empty();
						$('#textAfterException3').append("Change the Indices (" + beginIndex + ") and (" + endIndex + ") provided to the subsdtring(int beginIndex, int endIndex) method such that the index is between the bounds of the string.<br/>The currrent string's <b>(" + content + ")</b> length is <b>" + content.length + "</b>, hence a valid beginIndex can be any value between <b>0</b> and <b>" + (content.length-1) + "</b> and endIndex can be any value between <b>1</b> and <b>" + (content.length) + "</b>.");
					}, 500);
				});
			}
		})	
		
		$('#skip6').click(function() { 
			$("#mainBoxes").show();
			hiding();
			$('#runEditor2').empty();
			$("#runEditor2").css("color", "white");
			
			var beginIndex = parseInt($("#beginIndex").text());
			var endIndex = parseInt($("#endIndex").text() - 1);	
			var tl = new TimelineLite();
			
			$('.introjs-nextbutton').click();
			$('.introjs-nextbutton').click();
			
			if((beginIndex > endIndex) || (endIndex > content.length || beginIndex >= content.length) || (isNaN(endIndex) || isNaN(beginIndex))) {
				$("#beginIndex").empty();
				$("#endIndex").empty();
				$("#beginIndex").append('1');
				$("#endIndex").append('3');
				
				$("#beginIndexInSub2").empty();
				$("#beginIndexInSub2").append('1');
				$("#endIndexInSub2").empty();
				$("#endIndexInSub2").append('3');
				
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor2", "text.substring(1, 3) = " + content.substring(1,3) + "");
				});
				tl.from("#runEditor2", 0.5, {delay:2.4, onComplete : function() {
					$('#restart').fadeTo(1000,1);
					$('.introjs-nextbutton').click();
				}});
			} else {			
				$("#beginIndexInSub2").empty();
				$("#beginIndexInSub2").append(beginIndex);
				$("#endIndexInSub2").empty();
				$("#endIndexInSub2").append(endIndex+1);
				
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor2", "text.substring(" + beginIndex + ", " +( endIndex + 1) + ") = " + content.substring(beginIndex, (endIndex+1)) + "");
				});
				
				tl.from("#runEditor2", 0.5, {delay:2.4, onComplete : function() {
					$('#restart').fadeTo(1000,1);
					$('.introjs-nextbutton').click();
				}});
			 }	
		});
		
		$('#liveDisplay7').click(function() {
			$("#oldCharInMethod").empty();
			$("#newCharInMethod").empty();
			
			var oldChar = $("#oldChar").text();
			var newChar = $("#newChar").text();
			
			$("#oldCharInMethod").append(oldChar);
			$("#newCharInMethod").append(newChar);
			
			$("#animationDiv").append($("#replaceChar"));
			$("#replaceRow1").append($("#indexesAtReplace"));
			$("#replaceRow2").append($("#textAtReplace"));
			$("#replaceRow1").append($("#mainIndex"));
			$("#replaceRow2").append($("#beforeReplace"));
			
			$("#restartDiv").css("margin-top", "6%");
			
			$("#replaceRow3").append('<div id= "replaceResult" style="margin-top:5.5%;" class="col-xs-4  result-font remove-typingCursor"> </div>');
			$("#replaceRow3").append('<div class="col-xs-6" id="afterReplace"></div>');
			
			if(oldChar == "" || newChar == "") {
				charAtEnd(document.getElementById("oldChar"));
				if(newChar == "") {
					$("#newChar").empty();
					$("#newChar").append('z');
				}
			}
			if(oldChar != "" && newChar != "") {							
				$("#indexesAtReplace").append("Indices = ");
				$("#textAtReplace").append("text = ");
				
				$("#mainBoxes").hide();
				hiding();
				$('.introjs-nextbutton').click();		
				replace();
			
				var tl = new TimelineLite();
				
				tl.from(".box", 0.5, {opacity:0});
				tl.from(".circle", 0.5, {onComplete : function() {
					typing("#replaceResult", "New string after replacing <span style='color:red'>"+oldChar+"</span> by <span style='color:blue'>"+newChar+"</span> :");
				}});
				tl.staggerFrom("#afterReplace", 3, {opacity:0, y:-60, delay:2.5});
				tl.staggerFrom(".for-replace", 1, {opacity:0, y:-50}, 1);
				
				if(!(content.contains(oldChar))) {
					tl.from(".for-replace", 0.5, {onComplete: function() {					
						next6();
					}});
				} else {
					var x = content.indexOf(oldChar);
					tl.staggerFrom(".for-replace", 0.5, {onComplete: function() {
						if(content.charAt(x) == oldChar){
							$('#forReplace'+ x).addClass('rw-words');
							$("#add"+ x).append("<b class='letter' style='color:blue' id='addNewChar" + x + "'></b>");
							$('#addNewChar'+ x).hide();						
							$('#addNewChar'+ x).append(newChar).show(800);		
							$('#removeOpacity'+ x).css('opacity', 0);
						}								
						if (++x == content.length && content.contains(oldChar)) {
							next6();
						}					
					}}, 1, "-=0.5"); 
				}  
			}
		});	
		$('#skip7').click(function() { 
			$("#mainBoxes").show();
			
			var oldChar = $("#oldChar").text();
			var newChar = $("#newChar").text();
			var replacedValue =  eval('content.replace(/' + oldChar + '/g, "' + newChar + '")');
			var tl = new TimelineLite();
			
			if((oldChar != '' && newChar != '')) {
				hiding();
				$("#oldCharInMethod").empty();
				$("#oldCharInMethod").append(oldChar);
				$('.introjs-nextbutton').click();
				$('.introjs-nextbutton').click();		
							
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor1","text.replace("+oldChar+", "+newChar+") = " + replacedValue +"");
				});				
			
				tl.from("#runEditor1", 0.5 ,{delay:2.4, onComplete:function() {
					$('#restart').fadeTo(1000,1);
					$('.introjs-nextbutton').click();
				}});
			}		
			if(oldChar == "" || newChar == "") {
				charAtEnd(document.getElementById("oldChar"));
				
				if(newChar == "") {
					$("#newChar").empty();
					$("#newChar").append('z');
				}
			}
		});				
 }
	
	/* ************************ functions ****************** */ 	
	
	function getExceptionRange(index,lineNo) {
		return  '<span id = "exceptionLine1" style = "opacity:0">Exception: <b>java.lang.StringIndexOutOfBoundsException:</b> String ' 
		+ 'index out of range: <b>' + index + '</b></span>\n\t<span id = "exceptionLine2" style = "opacity:0">at java.lang.String.charAt<b>' 
		+ '(String.java:646)</b></span>\n\t<span id = "exceptionLine3" style = "opacity:0">at StringMethodsDemo.main<b>(StringMethodDemo.java:'+lineNo+')</b></span>';
	} 
	
	function getExceptionRange2(beginIndex, endIndex, lineNo) {
		if (beginIndex > endIndex) {
			return '<span id = "substring1Exception1" style = "opacity:0">Exception: <b>java.lang.StringIndexOutOfBoundsException:</b> String index' 
						+ ' out of range: <b>'+(endIndex-beginIndex)+'</b></span>\n<span id = "substring1Exception2" style = "opacity:0">at ' 
						+ 'java.lang.String.substring<b>(String.java:1955)</b></span>\n<span id = "substring1Exception3" style = "opacity:0">at ' 
						+ ' StringMethodDemo.main<b>(StringMethodDemo.java:'+lineNo+')</b></span>';
		}
		
		if(endIndex > content.length) {			
			return '<span id = "substring2Exception1" style = "opacity:0" >Exception: <b>java.lang.StringIndexOutOfBoundsException:</b> String ' 
			+ 'index out of range: <b>' + endIndex + '</b></span>\n<span id = "substring2Exception2" style = "opacity:0" >at ' 
			+ 'java.lang.String.substring<b>(String.java:1955)</b></span>\n<span id = "substring2Exception3" style = "opacity:0" >' 
			+ 'at StringMethodDemo.main<b>(StringMethodDemo.java:'+lineNo+')</b></span>';
		}
	}
	
	function hiding() {	
		$("#code").hide();
		$('#execute').hide();
		$('#liveDisplay1').hide();
		$('#skip').hide();			
		$('#liveDisplay2').hide();
		$('#skip2').hide();
		$('#liveDisplay3').hide();
		$('#skip3').hide();
		$('#liveDisplay4').hide();
		$('#skip4').hide();
		$('#liveDisplay5').hide();
		$('#skip5').hide();	
		$('#substring_result').hide();
		$('#substring_result2').hide();	
		$('#liveDisplay6').hide();
		$('#skip6').hide();
		$('#liveDisplay7').hide();
		$('#skip7').hide();
		$("#findingLength").hide();
		$("#convertLowerCase").hide();
		$("#convertUpperCase").hide();
		$("#substring1Div").hide();
		$("#substring2Div").hide();
		$("#nextAfterBoxes").hide();
		$("#nextAfterException").hide();
    }
	function typingOutput(id, content) {
        $(id).typewriting( content , {
              "typing_interval": 50,
              "cursor_color": 'white',    
              
          }, function() {
        	  $(id).removeClass('typingCursor');
          }); 
      } 
	 function typing(id, content) {
	 $(id).removeClass('typingCursor');
         $(id).typewriting( content , {
               "typing_interval": 75,
               "cursor_color": 'white'
           }, function() {	    
         	  $(id).removeClass('typingCursor');
         }); 
     }
	 function givenTween() {					//function for given string
		$("#mainBoxes").show();
		for(var i = 0; i < content.length; i++) {
			$("#row1").append($("#textIndices"));
			$("#row2").append($("#enteredText"));
			$("#row1").append($("#executeIndexes"));
			$("#row2").append($("#executeBoxes")); 
			
			$("#executeIndexes").append("<span class='circle'><b class='indexLetter'>" + i + "</b></span>&nbsp;");
			$("#executeBoxes").append("<span class='box green'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;");						
		}
	}
	function stringLength(){					//Given string	Length animate	
		for(var i = 0; i < content.length; i++)	{
			$("#animationDiv").append($("#findingLength"));
			$("#animateIndexes").append("<span class = 'circle'><b class='indexLetter' id = 'count" + i + "'>" + i + "</b></span>&nbsp;");
			$("#animateBoxes").append("<span class='box green' id = 'lengthBoxId" + i + "'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;");									
		}
	}
	function flipText(){				// function for flip
		$("#myFlip").show();
		$("#myFlip").empty();
		for(var i = 0; i < content.length; i++) {
			$("#animationDiv").append($("#convertLowerCase"));
			$("#beforeLowerCaseIndexes").append("<span class='circle'><b class='indexLetter'>"+i+"</b></span>&nbsp;");
			$("#beforeLowerCaseBoxes").append("<span class='box green'><b class='letter'>"+content.charAt(i)+"</b></span>&nbsp;")
			$("#myFlip").append("<span class='box green'><b class='letter before-covert' >"+content.charAt(i)+"</b> <b class = 'letter convert'> "+content.charAt(i).toLowerCase()+" </b></span>&nbsp;");	
		
			$('.convert').hide();
		}
	}
	function next() {
		$('.introjs-nextbutton').click();
		var tl = new TimelineLite();
		$('.introjs-helperLayer ').one('transitionend', function() {
			typingOutput("#runEditor2", "text.toLowerCase() = " + content.toLowerCase() + "");
		});
		tl.from("#runEditor2", 0.5, {delay:2.4, onComplete : function() {
			$("#mainBoxes").show();
			hiding();
			$('#liveDisplay3').show();
			$('#skip3').show();
			$('.introjs-nextbutton').click();
		}});
	} 
	function flipText2(){				// function for flip
		$("#myFlip2").show();
		$("#myFlip2").empty();
		
		for(var i = 0; i < content.length; i++){
			$("#animationDiv").append($("#convertUpperCase"));
			$("#beforeUpperCaseIndexes").append("<span class='circle'><b class='indexLetter'>" + i + "</b></span>&nbsp;");
			$("#beforeUpperCaseBoxes").append("<span class='box green'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;")
			$("#myFlip2").append("<span class='box green'><b class='letter before-convert2' >" + content.charAt(i) + "</b> <b class = 'letter convert2'> "+content.charAt(i).toUpperCase()+" </b></span>&nbsp;");		
			
			$('.convert2').hide();
		}
	}
	function next2() {			
		$('.introjs-nextbutton').click();	
		
		var tl = new TimelineLite();
		
		$('.introjs-helperLayer ').one('transitionend', function() {
			typingOutput("#runEditor3", "text.toUpperCase() = "+content.toUpperCase()+"");
		});
	
		tl.from("#runEditor3", 0.5, {delay:2.4, onComplete: function() {
			$("#mainBoxes").show();
			hiding();
			$('#liveDisplay4').show();
			$('#skip4').show();
			$('.introjs-nextbutton').click();
		}});
	}
	function charAtTween(){				// function for charAt display			
		var index = parseInt($('#charAtIndex').text());
		for(var i = 0; i < content.length; i++)	{
			if(i == index) {
				$("#indexAt").append("<span class='circle' id='index_box" + i + "'><b id = 'charIndex'  class='indexLetter'>" + i + "</b></span>&nbsp;");
				$("#charAtBoxes").append("<span class='box green' id='charAnimateBox" + i + "'><b  id='letterTransfer' class='letter'>" + content.charAt(i) + "</b><b class='letter' id='append_index" + i + "'></b></span>&nbsp;");							
			} else {		
			 	$("#indexAt").append("<span class='circle' id='index_box" + i + "'><b id='not_found" + i + "' class='indexLetter'>" + i + "</b></span>&nbsp;");
			 	$("#charAtBoxes").append("<span class='box green' id='charAnimateBox" + i + "'><b id='char_notfound" + i + "' class='letter'>" + content.charAt(i )+ "</b></span>&nbsp;")
			}
		}				
	}
	
	function next3() {	
		$('.introjs-nextbutton').click();
		var index = parseInt($('#charAtIndex').text());			// next after display				
		var tl = new TimelineLite();
		$('.introjs-helperLayer ').one('transitionend', function() {
			typingOutput("#runEditor4", "text.charAt(" + index + ") = " + content.charAt(index) + "");
		});
	
		tl.from("#runEditor4", 0.5, {delay:2.3, onComplete : function() {
			$("#mainBoxes").show();
			hiding();
			$('#restart').fadeTo(1000,1);
			$('#charAtDiv').hide();
			$('#charAtIndex').hide();
			$('.introjs-nextbutton').click();
		}});
	}
	function color() {             //  adding color effect
		var index = parseInt($('#charAtIndex').text());	
		$("#index_box"+index).css("border", "2px solid #A9A9A9");					
		setTimeout(function(){
			$("#append_index"+index).append(content.charAt(index));
			$("#charAnimateBox"+index).effect("highlight", {color: 'green'}, 1000);
			
			var l1 = $("#letterTransfer").offset();
			var l2 = $("#result").offset();
			
			var topLength = l2.top - l1.top;
			var leftLength = l2.left-l1.left;
			
			TweenMax.staggerTo("#letterTransfer", 2, {color:'green', top:"+=" + (topLength-6.5), left: "+=" + (leftLength-4),  onComplete : next3});
		},1000);					
	} 
	
	function substringTween(){				// function for substring display
		$("#substring1Div").show();
	
		var subIndex = parseInt($("#substring1Index").text());
		
		for(var i = 0; i < content.length; i++){
			$("#animationDiv").append($("#substring1Div"));			
		
			if(i >= subIndex){
				$("#subBoxes").append("<span class='box green'><b class='letter' >" + content.charAt(i) + "</b> </span>&nbsp;");							
				$("#originalBoxes").append("<span class='box green move'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;");
				$("#originalIndexes").append("<span id = 'roundUp" + i + "' class='circle'><b class='indexLetter'>" + i + "</b></span>&nbsp;");
			} else {
				$("#originalBoxes").append("<span class='box green'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;");
				$("#originalIndexes").append("<span class='circle'><b class='indexLetter'>" + i + "</b></span>&nbsp;");
			}
		}				
	}
	
	function next4() {							// next after display
		var subIndex = parseInt($("#substring1Index").text());		
		var tl = new TimelineLite();
		
		tl.from("#subBoxes", 0.5 , {delay:0.5, onComplete : function() {
			$('.introjs-nextbutton').click();
		}});
	
		$('.introjs-helperLayer ').one('transitionend', function() {
			typingOutput("#runEditor1", "text.substring("+subIndex+") = "+content.substring(subIndex)+"");
		});

		tl.from("#runEditor1", 0.5, {delay:2.4, onComplete: function() {
			$("#mainBoxes").show();
			hiding();
			$('#liveDisplay6').show();
			$('#skip6').show();
			$('.introjs-nextbutton').click();
		}});
	}
	
	function substring2Tween(){				// function for charAt display
		hiding();
		$("#substring2Div").show();
		
		var beginIndex = parseInt($("#beginIndex").text());
		var endIndex = parseInt($("#endIndex").text()-1);
		
		for(var i = 0; i < content.length; i++){				
			if(i >= beginIndex && i <= endIndex) {
				$("#subBoxes2").append("<span class='box green'><b class='letter' >" + content.charAt(i) + "</b> </span>&nbsp;");							
				$("#originalBoxes2").append("<span class='box green move2'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;");
				$("#originalIndexes2").append("<span id='roundUp2"+i+"' class='circle'><b class='indexLetter'>" + i + "</b></span>&nbsp;");
			} else {
				$("#originalBoxes2").append("<span class='box green'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;");
				$("#originalIndexes2").append("<span class='circle'><b class='indexLetter'>" + i + "</b></span>&nbsp;");
			}
		}				
	} 
	function next5() {							// next after display
		var beginIndex = parseInt($("#beginIndex").text());
		var endIndex = parseInt($("#endIndex").text()-1);						
		var tl = new TimelineLite();
		
		tl.from("#subBoxes2", 0.5 , {delay:0.5, onComplete : function() {
			$('.introjs-nextbutton').click();
		}});
		
		$('.introjs-helperLayer ').one('transitionend', function() {
			typingOutput("#runEditor2", "text.substring("+ beginIndex +", "+ (endIndex + 1) +") = "+content.substring(beginIndex,(endIndex+1))+"");
		});
	
		tl.from("#runEditor2", 0.5, {delay:2.4, onComplete: function() {
			$("#mainBoxes").show();
			hiding();
			$('#restart').fadeTo(1000,1);
			$('.introjs-nextbutton').click();
		}});
	}
	function replace() {
		hiding();
		var oldChar = $("#oldChar").text();
		
		for(var i = 0; i < content.length; i++) {
			$("#mainIndex").append("<span class='circle'><b class='indexLetter'>" + i + "</b></span>&nbsp;");
			$("#beforeReplace").append("<span class='box green move'><b class='letter'>" + content.charAt(i) + "</b></span>&nbsp;");
			$("#afterReplace").append("<div id='add" + i + "' class='box green'></div>&nbsp;");
			$("#add"+i).append("<div id='forReplace" + i + "'> </div>");
				
			if(content.charAt(i) == oldChar) {
				$('#forReplace' + i).append("<b class='oldChar-hide letter for-replace ' id = 'removeOpacity" + i + "' style='color:red'>" + content.charAt(i) + "</b>");
			} else {
				$('#forReplace' + i).append("<b class='letter for-replace' >" + content.charAt(i) + "</b>");
			}
		}			
	}
	function next6() {							// next after display
		var oldChar = $("#oldChar").text();
		var newChar = $("#newChar").text();
		var replacedValue =  eval('content.replace(/' + oldChar + '/g, "' + newChar + '")');		
		var tl = new TimelineLite();
		
			if(!(content.contains(oldChar))) {
				$('.introjs-nextbutton').click();
			
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor1", "text.replace(" + oldChar + ", " + newChar + ") = " + replacedValue);
				});
			
				setTimeout(function() {
					$("#restartDiv").css("margin-top", "6%");
					$('#restart').fadeTo(1000, 1);
					$('.introjs-nextbutton').click();
				},2400);	
			} 
			if(content.contains(oldChar)) {
				tl.from(".for-replace", 0.5 , {delay: 1, onComplete : function() { 
					$('.introjs-nextbutton').click();
				}}); 
			
				$('.introjs-helperLayer ').one('transitionend', function() {
					typingOutput("#runEditor1", "text.replace(" + oldChar + ", " + newChar + ") = " + replacedValue);
				});
			
				tl.from("#", 0.5 , {delay:2.4, onComplete : function() {
					$("#restartDiv").css("margin-top", "6%");
					$('#restart').fadeTo(1000, 1);
					$('.introjs-nextbutton').click();
				}});
		}	
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