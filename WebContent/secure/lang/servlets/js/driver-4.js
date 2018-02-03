var intro;
var typingInterval = 5;
var tl = new TimelineLite();
var databasedriver4 = function() {

	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
				element :'#mainDiv',
				intro :'',
				tooltipClass : "hide"
			}]
		});
intro.onafterchange(function(targetElement) {
	var elementId = targetElement.id;
		switch (elementId) {
		case "mainDiv":
			$('.introjs-nextbutton').hide();
			$('#animationDiv').popover({
				placement: 'left',
				viewport: '#animationDiv',
				html: true,
				trigger: "focus",
				content: '<div id="popover1"></div>',
			});
			$('#animationDiv').popover('show');
			$(".popover").css("top" , "0");
			var text = "Type-4 driver";
			typing("#popover1", text, function(){
				$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="client();">Next &#8594;</span><div>');

			});
			
		break;	
		}
	});
	intro.start();
	$('.introjs-nextbutton').show();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();

}
function client() {
	$(".ct-btn-next").remove();
	$("#callJavaBox").addClass("blinking-border-background-green");
		TweenMax.to("#callJavaBox", 1, {"opacity" : "1", onComplete:function() {
			TweenMax.to("#jdbcApiBox", 1, {"opacity" : "1", onComplete:function() {
			$('#callJavaBox').popover({
				placement: 'right',
				viewport: '#callJavaBox',
				tip: "#callJavaBox",
				html: true,
				trigger: "focus",
				content: '<div id="popover2"></div>',
			});
			$('#callJavaBox').popover('show');
			$(".popover").css("top" , "0");
			var text = " API (Application programming interface) is a document that contains description of all the features of a product or software. It represents classes and interfaces that software programs can follow to communicate with each other. An API can be created for applications, libraries, operating systems, etc .";
			typing("#popover2", text, function(){
				$('#popover2').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="Thinlayer();">Next &#8594;</span><div>');
			});
		}});
		}});
	
}
/*function javaApi() {
	$(".ct-btn-next").remove();
	$("#jdbcApiBox").addClass("blinking-border-background-purple")
	TweenMax.to("#jdbcApiBox", 1, {"opacity" : "1", onComplete:function() {
		
	$('#jdbcApiBox').popover({
		placement: 'right',
		viewport: '#jdbcApiBox',
		tip: "#jdbcApiBox",
		html: true,
		trigger: "focus",
		content: '<div id="popover3"></div>',
	});
		$('#jdbcApiBox').popover('show');
		$(".popover").css("top" , "0");
		var text = "API (Application programming interface) is a document that contains description of all the features of a product or software. It represents classes and interfaces that software programs can follow to communicate with each other. An API can be created for applications, libraries, operating systems, etc .";
		typing("#popover3", text, function(){
			$('#popover3').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="Thinlayer();">Next &#8594;</span><div>');
		});
	}});

}*/
function Thinlayer() {
	$(".ct-btn-next").remove();
	$("#thintype").addClass("blinking-border-background-green");
	TweenMax.to("#thintype", 1, {"opacity" : "1", onComplete:function() {
		$("#line5").show();
		TweenMax.to($(".svg-arrow-line1"), 1, {attr:{y2: "99%" }, onComplete:function() {
			/*$(".line2").show();
			TweenMax.to($(".line2").eq(0), 1, {attr:{x1: "0%" }});
			TweenMax.to($(".line2").eq(1), 1, {attr:{x1: '200%' }, onComplete:function() {*/
		$('#thintype').popover({
			placement: 'left',
			viewport: '#thintype',
			tip: "#thintype",
			html: true,
			trigger: "focus",
			content: '<div id="popover4"></div>',
		});
		$('#thintype').popover('show');
		$(".popover").css("top" , "0");
		var text = "The thin driver converts JDBC calls directly into the vendor-specific database protocol. That is why it is known as thin driver. It is fully written in Java language. ."
		typing("#popover4", text, function(){
			$('#popover4').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="animation1();">Next &#8594;</span><div>');
		});
			//}});
	}});
	}});
}
/*function oracle() {
	$(".ct-btn-next").remove();
	TweenMax.to("#databaseBox1", 1, {"opacity" : "1", onComplete:function() {
	$('#databaseBox1').popover({
		placement: 'left',
		viewport: '#databaseBox1',
		tip: "#databaseBox1",
		html: true,
		trigger: "focus",
		content: '<div id="popover5"></div>',
	});
	$('#databaseBox1').popover('show');
	$(".popover").css("top" , "0");
	var text = "oracle database"
	typing("#popover5", text, function(){
		$('#popover5').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="sql();">Next &#8594;</span><div>');

	});
	}});
}
function sql() {
	$(".ct-btn-next").remove();
	TweenMax.to("#databaseBox2", 1, {"opacity" : "1", onComplete:function() {
	$('#databaseBox2').popover({
		placement: 'right',
		viewport: '#databaseBox2',
		tip: "#databaseBox2",
		html: true,
		trigger: "focus",
		content: '<div id="popover6"></div>',
	});
	$('#databaseBox2').popover('show');
	$(".popover").css("top" , "0");
	var text = "sql database"
	typing("#popover6", text, function(){
		$('#popover6').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="lines();">Next &#8594;</span><div>');

	});
	}});
}*/

function animation1() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	$("#databaseBox1").addClass("blinking-border-background-green");
	$("#databaseBox1").removeClass("opacity00").hide().fadeIn(2000,function() {
	});
	$("#databaseBox2").addClass("blinking-border-background-green")
	$("#databaseBox2").removeClass("opacity00").hide().fadeIn(2000,function() {
	});
		$("#line1").show();
		TweenMax.to(".svg-arrow-line2", 1, {attr:{y2: "45%" },onComplete:function(){
			$(".line3").show();
			TweenMax.to($(".line3").eq(0), 1, {attr:{x1: "0%" }});
			TweenMax.to($(".line3").eq(1), 1, {attr:{x1: '200%' }, onComplete:function() {
			
								$('#databaseBox1').popover({
									placement: 'left',
									viewport: '#databaseBox1',
									html: true,
									trigger: "focus",
									content: '<div id="popover5"></div>',
								});
									$('#databaseBox1').popover('show');
									$(".popover").css("top" , "0");
									var text = "This are the different types of data bases.";
									typing("#popover5", text, function(){
										$('#popover5').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="a();">Next &#8594;</span><div>');
									});
							}});
		}});
			
	}
function a() {
	$(".ct-btn-next").remove();
	var text = "<b>Advantages</b>:<br>------------------<br>" 
    + "<br>1.Better performance than all other drivers</br>" 
    + "<br>2.No software is required at client side or server side</br>"
    + "<b>Disadvatage</b>:<br>-----------</br> Drivers depends on the Database."
	typing("#popover1", text, function(){
	});
}
function typing(typingId, typingContent,callBackFunction) {
	$(typingId).append("<div></div>");
	$(typingId + " > div:last-child").typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId + " > div:last-child").removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}