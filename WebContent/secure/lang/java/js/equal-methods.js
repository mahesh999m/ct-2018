	function introJsTest(stepNo){
		introjs = introJs();
		
		var stepsArr = [];
		
		if (demoType == 1) {
			stepsArr.push({
    	    	element: '#codeIntro' ,
    	    	intro: 'The above code demonstrates the working of <b>equals(String str)</b> method.',
    	    	position: 'bottom',
    	    });
		}
		
		if (demoType == 2) {
			stepsArr.push({
    	    	element: '#codeIntro' ,
    	    	intro: 'The above code demonstrates the working of <b>equalsIgnoreCase(String str)</b> method.',
    	    	position: 'bottom',
    	    });
		}
			
		stepsArr.push({
  				element: '#text1Id', 
  				intro: "",
  				position: 'right',
				});
		stepsArr.push({
  				element: '#animationDiv', 
  				intro: "",
  				position: 'bottom',
  				tooltipClass: "hide"
				});
		stepsArr.push({
				element: '#text2Id', 
  				intro: "",
  				position: 'right',
				});
				
		stepsArr.push({
  				element: '#animationDiv', 
  				intro: "",
  				position: 'bottom',
  				tooltipClass: "hide"
				});
		
		if (demoType == 1) {
			stepsArr.push({
					element: '#equalsMethod', 
  				intro: "This statement prints the result of executing <b>equals</b> method.",
  				position: 'right',
			});
			stepsArr.push({
  				element: '#animationDiv', 
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
		
		if (demoType == 2) {
			stepsArr.push({
				element: '#equalsIgnoreCaseMethod', 
  				intro: "This statement prints the result of executing <b>equalsIgnoreCase</b> method.",
  				position: 'right',
			});
			stepsArr.push({
  				element: '#animationDiv', 
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
	  		element: '.exit-main', 
	  		intro: "",
	  		tooltipClass: "hide"
	  	});
		stepsArr.push({
			element: '#restart', 
			intro: "Click to restart.",
			position: 'right',
		});
		
		introjs.setOptions({
			steps: stepsArr
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

	function equalMethodsReady() {
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
		
		$("#changeText2").keyup(function() {
			introjs.refresh();
			$(".tooltip-text-edit").text($("#changeText2").text());
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
			text1 = $('#changeText1').text();
			text2 = $('#changeText2').text();
			
			if(element == "text1Id") {
				
				introjs._introItems[introjs._currentStep].intro = "This statement initializes the reference <b>text1</b> with "
					+"<b class='tooltip-text-edit ct-code-b-yellow'>" +$("#changeText1").text()+ "</b>. The text can be changed to "
					+"any value.<br><br><span class = 'errorText'></span>";
				
				$('.temp + span, .temp').remove();
				$('#enteredText, #textIndices').empty();
				$('.introjs-prevbutton').show();
			$("#changeText1").attr("contenteditable", true);
				setTimeout(function() {
					charAtEnd(document.getElementById("changeText1"));
				},1000);
			}
			
			if (element == "restart") {
				$('.introjs-prevbutton').hide();
			}
			
			if ( element == "codeIntro") {
				$('.introjs-prevbutton').hide();
				$("[contenteditable]").attr("contenteditable", false);
			}
			
			if(element == "text2Id") {
				
				
				introjs._introItems[introjs._currentStep].intro = "This statement initializes the reference <b>text2</b> with "
					+"<b class='tooltip-text-edit ct-code-b-yellow'>" +$("#changeText2").text()+ "</b>. The text can be changed to "
					+"any value.<br><br><span class = 'errorText'></span>";
				$('.temp1 + span, .temp1').remove();
				$('#enteredText2, #textIndices2').empty();
				$('#').empty().append("Indices = ");
			$("#changeText2").attr("contenteditable", true);
				setTimeout(function() {
					charAtEnd(document.getElementById("changeText2"));
				},1000);
			}
			if(element == "animationDiv") {
				$("#animationDiv").append( $("#textBoxes") );
				$("#animationDiv").append( $("#textBoxes2") );
				$("#animationDiv").append( $("#result") );
				$("#animationDiv").append( $("#differInCase") );
								
				var tl = new TimelineLite();
				if(text1.length > 0 && text2.length > 0) {
					if(introjs._currentStep == 2) {
						$("#changeText1").attr("contenteditable", false);
						$('#enteredText').hide();
						$('#textIndices').hide();
						givenText1();
			      		$('.introjs-helperLayer ').one('transitionend', function() {
			      			$('#enteredText').empty().append("text1 = ");
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
						$("#changeText2").attr("contenteditable", false);
						$("#skipButton").show();
						$('#enteredText2').hide();
						$('#textIndices2').hide();
						givenText2();
						$('.introjs-helperLayer ').one('transitionend', function() {
			      			$('#enteredText2').empty().append("text2 = ");
							$('#enteredText2').fadeIn(500);
			      		}); 
						tl.staggerFrom("#executeBoxes2", 0.5, {opacity:0, y:-200, delay:1.8});
						tl.from("#executeBoxes2", 0.5, {onComplete: function() {
							$('#textIndices2').empty().append("Indices = ");
							$('#textIndices2').fadeIn(500);
						}});
						tl.staggerFrom("#excecuteIndices2", 0.5, {opacity:0, y:-200, delay:0.5});
						tl.from("#excecuteIndices2", 0.5, {delay:0.5, onComplete : function() {
							//$('.introjs-nextbutton').click();
							if (introjs._direction == "forward") {
								introjs.nextStep();
							} else {
								introjs.previousStep();
							}
						}});
					} 
				
	          		if(demoType == 1 && introjs._currentStep == 6) {
						$('.introjs-nextbutton').hide();
						$("#skipButton").hide();
						$("#animationDiv").append("<br><br><br><br>");
						$("#compareLength").hide();
						$("#compareLength2").hide();
						
						var x = 0;
						tl.from("#", 0.5, {delay: 1.3, onComplete: function() {
							$("#compareLength").append("Length of the <b>text1</b> = <span class = 'length'> "+ text1.length + "</span><br>" );
							$("#compareLength").fadeIn(500);
						}});
						tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
							$("#compareLength2").append("Length of the <b>text2</b> = <span class = 'length'> "+ text2.length + "</span><br>");
							$("#compareLength2").fadeIn(500);
						}});
						
						if(text1.length == text2.length) {
							tl.from("#", 0.5, {delay: 0.8, onComplete: function() {
								$(".length").css("border", "1px solid blue");
								typing("#conclusion", "<br>Since the lengths of <b>text1</b> and <b>text2</b> are <b>equal</b>, we will compare characters along with their <b>case</b>.");
							}});
							tl.from("#", 0.5, {delay: 8.5, onComplete: function() {
								$("#compareLength").fadeOut(500);
								$("#hideAfter").fadeOut(500);
							}});
							tl.from("#", 0.5, {onComplete: function() {
								stringInterval = setInterval(function() {
									$('#removeCircle'+ (x-1)).hide();
									$('#removeCircle2'+ (x-1)).hide();
									
									$("#text1Box"+x).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'removeCircle" + x + "'></span>");
									$("#text2Box"+x).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'removeCircle2" + x + "'></span>");
									
									$('#removeCircle'+ x).hide();
									$('#removeCircle2'+ x).hide();
									$('#removeCircle'+ x).fadeIn(500);
									$('#removeCircle2'+ x).fadeIn(1200);
									if (x == (text1.length-1)) {
										clearInterval(stringInterval);
										$('.comparingCircle').fadeOut(800);
										setTimeout(function() {
											$('.introjs-nextbutton').click();
										},2200);
									}
									if(text1.charAt(x) === text2.charAt(x)) {
										setTimeout(function() {
											$("#result").append("<span class='check fa fa-check'></span>&nbsp;");
											++x;
										},1300);
									} else {
										setTimeout(function() {
											$("#result").append("<span class='not-matched fa fa-times'></span>&nbsp;");
											if(text1.charAt(x).toLowerCase() === text2.charAt(x).toLowerCase()) {
												typing("#differInCase", "<br> '<b style = 'color:blue'>" + text1.charAt(x) + "</b>' and '<b style = 'color: blue'>" + text2.charAt(x) + "</b>' differ in case.");
											}
											clearInterval(stringInterval);
											$('.comparingCircle').fadeOut(800);
										},1300);
										if(text1.charAt(x).toLowerCase() === text2.charAt(x).toLowerCase()) {
											setTimeout(function() {
												if (x != (text1.length-1)) {
													$('.introjs-nextbutton').click();
												}
											},4500);
										} else {
											setTimeout(function() {
												if (x != (text1.length-1)) {
													$('.introjs-nextbutton').click();
												}
											},2500);
										}
									}
								},2200);
							}}, "-=1.8");
						} else {
							tl.from("#", 0.5, {delay: 0.8, onComplete: function() {
								$(".length").css("border", "1px solid blue");
								typing("#conclusion", "<br>Since the lengths of <b>text1</b> and <b>text2</b> are <b style = 'color:red'>not</b> equal, we can't compare characters.");
							}});
							tl.from("#", 0.5, {delay: 6.5, onComplete: function() {
								$('.introjs-nextbutton').click();
							}});
						}
					} 
				
					if(demoType == 2 && introjs._currentStep == 6) {
						$('.introjs-nextbutton').hide();
						$('#animationDiv br').remove();
						$("#animationDiv").append("<br><br><br><br>");
						$("#textBoxes").append("<br>");
						$("#hideAfter").show();
						$("#compareLength").hide();
						$("#compareLength2").hide();
						
						var x = 0;
						tl.from("#", 0.5, {delay: 1.3, onComplete: function() {
							$("#compareLength").append("Length of the <b>text1</b> = <span class = 'length'> "+ text1.length + "</span><br>" );
							$("#compareLength").fadeIn(500);
						}});
						tl.from("#", 0.5, {delay: 0.5, onComplete: function() {
							$("#compareLength2").append("Length of the <b>text2</b> = <span class = 'length'> "+ text2.length + "</span><br>");
							$("#compareLength2").fadeIn(500);
						}});
						
						if(text1.length == text2.length) {
							tl.from("#", 0.5, {delay: 0.8, onComplete: function() {
								$(".length").css("border", "1px solid blue");
								typing("#conclusion", "<br>Since the lengths of <b>text1</b> and <b>text2</b> are <b>equal</b>,  we will compare characters <b> ignoring their case</b>.");
							}});
							tl.from("#", 0.5, {delay: 8.5, onComplete: function() {
								$("#compareLength").fadeOut(500);
								$("#hideAfter").fadeOut(500);
							}});
							tl.from("#", 0.5, {onComplete: function() {
								stringInterval = setInterval(function() {
									var element1 = (text1.charAt(x)).toLowerCase();
									var element2 = (text2.charAt(x)).toLowerCase();
									$('#circleId'+ (x-1)).hide();
									$('#circleId2'+ (x-1)).hide();
									
									$("#text1Box"+x).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleId" + x + "'></span>")
									$("#text2Box"+x).append("<span style = 'color:green; position: absolute;' class = 'comparingCircle' id = 'circleId2" + x + "'></span>")
									
									$('#circleId'+ x).hide();
									$('#circleId2'+ x).hide();
									$('#circleId'+ x).fadeIn(500);
									$('#circleId2'+ x).fadeIn(1200);
									if (x == (text1.length-1)) {
										clearInterval(stringInterval);
										$('.comparingCircle').fadeOut(800);
										setTimeout(function() {
											$('.introjs-nextbutton').click();
										},2200);
									}
									if(element1 === element2) {
										setTimeout(function() {
											$("#result").append("<span class='check fa fa-check'></span>&nbsp;");
											++x;
										},1300);
									} else {
										setTimeout(function() {
											$("#result").append("<span class='not-matched fa fa-times'></span>&nbsp;");
											clearInterval(stringInterval);
											$('.comparingCircle').fadeOut(800);
										},1300);
										setTimeout(function() {
											if (x != (text1.length-1)) {
												$('.introjs-nextbutton').click();
											}
										},2500);
									}
								},2200);
							}},"-=1.8");
						} else {
							tl.from("#", 0.5, {delay: 0.8, onComplete: function() {
								$(".length").css("border", "1px solid blue");
								typing("#conclusion", "<br>Since the lengths of <b>text1</b> and <b>text2</b> are <b style = 'color:red'>not</b> equal, we can't compare characters.");
							}});
							tl.from("#", 0.5, {delay: 6.5, onComplete: function() {
								$('.introjs-nextbutton').click();
							}});
						}
					} 
				
				}
			}
			
			if(element == "consoleId") {
				text1 = $('#changeText1').text();
				text2 = $('#changeText2').text();

				var testElement1 = text1.toLowerCase();
				var testElement2 = text2.toLowerCase();
				var returnVal = (text1 === text2);
				var returnVal2 = (testElement1 === testElement2);
			
					if(demoType == 1 && introjs._currentStep == 7) {
						console.log("currentStep7 : " + introjs._currentStep);
						$('.introjs-helperLayer').one('transitionend', function() {
							typingOutput("#runEditor1", "equals : " + returnVal);
						});
						setTimeout(function() {
				       		$('.introjs-nextbutton').click();
				       		$('.introjs-helperLayer').one('transitionend', function() {
				       			$('.exit-main').fadeTo(500, 1);
							});
				       	}, 2800);
					}
			 
					if(demoType == 2 && introjs._currentStep == 7) {
						$('.introjs-helperLayer ').one('transitionend', function() {
							typingOutput("#runEditor1", "equalsIgnoreCase : " + returnVal2);
							
						});
						setTimeout(function() {
				       		$('.introjs-nextbutton').click();
				       		$('.introjs-helperLayer').one('transitionend', function() {
				       			$('.exit-main').fadeTo(500, 1);
							});
				       	}, 2800);
					}
			
			}
			if(introjs._currentStep == 8) {
	       		setTimeout(function() {
		       		$('.introjs-nextbutton').click();
		       		$('.introjs-helperLayer ').one('transitionend', function() {
						$('#restart').fadeTo(500, 1);
					});
		       	}, 2800);
	       	}
			
		});
	
	}
	
	/* ------------------------   functions    -------------------------- */
	var i;
	function givenText1() {	
		$('.temp + span, .temp').remove();
		for(i = 0; i < text1.length; i++) {
			/*$("#row1").append($("#textIndices"));
			$("#row2").append($("#enteredText"));
			$("#row1").append($("#excecuteIndices"));
			$("#row2").append($("#executeBoxes")); */
			
			$("#excecuteIndices").append("<span id = 'text1Index"+i+"' class = 'circle temp'><b class='indexLetter'>" + i + "</b></span><span>&nbsp;</span>");
			$("#executeBoxes").append("<span id = 'text1Box"+i+"' class='box green temp'><b class='letter'>" + text1.charAt(i) + "</b></span><span>&nbsp;</span>");						
		}
	}
	function givenText2() {	
		$('.temp1 + span, .temp1').remove();
		for(i = 0; i < text2.length; i++) {
			/*$("#text2Row1").append($("#textIndices2"));
			$("#text2Row2").append($("#enteredText2"));
			$("#text2Row1").append($("#excecuteIndices2"));
			$("#text2Row2").append($("#executeBoxes2")); */
			
			$("#excecuteIndices2").append("<span id = 'text2Index"+i+"' class='circle temp1'><b class='indexLetter'>" + i + "</b></span><span>&nbsp;</span>");
			$("#executeBoxes2").append("<span id = 'text2Box"+i+"' class='box green temp1'><b class='letter'>" + text2.charAt(i) + "</b></span><span>&nbsp;</span>");						
		}
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