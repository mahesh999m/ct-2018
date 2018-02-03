<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/jquery-ui.css">
	<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	<link rel="stylesheet" href="/css/introjs.css">
	<link rel="stylesheet" href="/css/introjs-ct.css">
	
	<script src="/js/jquery-latest.js"></script>
	<script src="/js/intro.js"></script>
 	<script src="/js/bootstrap.min.js"></script>
  	<script src="/js/jquery-ui-latest.js"></script>
	<script src="/js/gs/TweenMax.min.js"></script>
	<script src="/js/gs/TweenLite.min.js"></script>
	<script src="/js/typewriting.min.js"></script>
	<!-- <script src="../js-min/siom.min.js"></script> -->
	<script src="/secure/lang/java/js/string-indexof-methods.js"></script>

<title>Insert title here</title> 

<style type="text/css">

.titles {
	background-color: highlight;
    border-radius: 19px;
    padding: 3px 8px;
    position: relative;
    z-index: 1000000;
}
.headings{
	text-align: center !important;
} 
.creamPreTab4 {
   -moz-tab-size: 4;
    background-color: #fffae6;
    margin-left: -21px;
    white-space: pre;
}
.code-box {
	border-radius: 8px;
	margin-left: 2%;
	padding-right: 0;
	width: 47%;
}
.codeAndAnimation {
	margin-top: 25px;
}
pre {
 	font-size: 10px;
 	margin-top: 30px;
}
.animation-box {
    margin-top: 2.5%;
    margin-left: 1%;
    width: 47%;
}
.letter, .indexLetter {
	font-size: 120%;
    padding-left: 27%;
    padding-top: 7%;
    position: absolute;
}
.box {
    border-radius: 6px;
    display: inline-block;
    height: 29px;
    position: relative;
    width: 30px;
}

.circle {
    display: inline-block;
    height: 29px;
    position: relative;
    width: 30px;
    border-radius: 50px;
    color: #B8860B;
}

.check {
    display: inline-block;
    position: relative;
    width: 30px;
    color: green;
}

.not-matched {
	display: inline-block;
    position: relative;
    width: 30px;
    color: red;
}

.letter {
	color:white;
}
.green{
  	background-color: #6fb936;
}
.result-font {
	color:#434D56;
	font-size:90%;
}

.comparingCircle {
	border: 2px solid blue;
    border-radius: 50%;
    margin-left: -13%;
    margin-top: -25%;
    padding: 22% 88% 105% 28%;
}

#result, #resultAtTarget{
    margin-left: 26.5%;
}

.output-console-body {
	height: 175px !important;
}

#output {
     z-index: 1000000;
     position: absolute; 
     margin-top: 23%;
}
.length {
    border-radius: 50%;
    color: green;
    padding: 1%;
}

.errorText {
	color: red;
}

#restart {
	opacity: 0;
}

#restartDiv {
    margin-top: -1%;
    padding-left: 110px;
    position: absolute;
}

.given-text, .index-length-limit {
	outline: none;
}

.blink {
    background: #FFD700;
    !important;
}
.fa {
    margin-left: 3.5px;
}

.introjs-tooltip {
	min-width: 300px;
}

.myNext {
	margin: 3px !important;
}

.text-font {
	font-family: monospace;
	font-weight: bold;
}

.opacity-mark{
	opacity: 0.3;
}

.ct-code-pink {
	color: #ed138e;
}

.row {
	margin-right: 0px !important;
}

</style>

</head>
<body>

<script type="text/javascript">

	$(document).ready(function(){
		stringIndexOfMethods();
	});

</script>

	<h3 class="headings" ><span class="label label-default titles">IndexOf Methods in Action</span></h3>

	<div class = 'codeAndAnimation row'>
		<div class="col-xs-5 code-box">
				<pre class="creamPreTab4">public class StringMethodsDemo {
	public static void main(String[] args) {<div id = 'codeIntro'>		<span id = 'textId'>String text = "<span id = 'changeText' contenteditable="false" class="given-text ct-code-pink" maxlength="9" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">ababcdedaf</span>"; </span>
		<span id = "indexOfMethod">System.out.println("indexOf '<span id = 'textChange'>abc</span>' : " + text.<b>indexOf("<span id = 'indexOfText' contenteditable="false" class="given-text ct-code-pink" maxlength="9" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">abc</span>")</b>); </span>
		<span id = "indexOfMethodWithParameter">System.out.println("indexOf '<span id = 'parameterText'>b</span>', after index <span id = 'parameterChange'>2</span> : " + text.<b>indexOf("<span id = 'textWithParameter' contenteditable="false" class="given-text ct-code-pink" maxlength="9" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">b</span>", <span id = 'parameterIndex' contenteditable="false" class="index-length-limit ct-code-pink" maxlength="0">2</span>)</b>); </span>
		<span id = "lastIndexOfMethod">System.out.println("lastIndexOf '<span id = 'lastIndextextChange'>d</span>' : " + text.<b>lastIndexOf("<span id = 'lastIndexOfText' contenteditable="false" class="given-text ct-code-pink" maxlength="9" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">d</span>")</b>); </span>
		<span id = "lastIndexOfMethodWithParameter">System.out.println("lastIndexOf '<span id = 'lastParameterText'>de</span>' before index <span id = 'lastIndexParameter'>7</span> : " + text.<b>lastIndexOf("<span id = 'lastIndexTextWithParameter' contenteditable="false" class="given-text ct-code-pink" maxlength="9" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">de</span>", <span id = 'lastIndexParameterIndex' contenteditable="false" class="index-length-limit ct-code-pink" maxlength="0">7</span>)</b>); </span></div>	}
}				</pre>
		</div>
	
		<div class = "col-xs-6 animation-box" id = 'animationDiv'></div>
		
	<div id = "output" class="col-xs-offset-3 col-xs-5">
			<div class="output-console" id="consoleId">
					<div class="output-console-title-bar">
							<span class="title">Output</span>
					</div>
							
	<div class="output-console-body" style='color:white'>
<span id="runEditor1"></span>
<span id="runEditor2"></span>
<span id="runEditor3"></span>
<span id="runEditor4"></span>
	</div>
		
			</div>
	</div>
	<div id = 'restartDiv' class = 'col-xs-offset-5'> <button id ='restart' type="button" class="btn btn-warning">Restart</button> </div>
	</div>
		
	<div id = "textBoxes" class="row col-xs-offset-0">	
		<div class="row" id="row1">
			<div id="textIndices" class='col-xs-3 result-font text-font' style="text-align:right;margin-top:5px"></div>
			<div id="excecuteIndices" class="col-xs-8"></div>
		</div>
		
		<div class="row" id="row2">
			<div id="enteredText" class='col-xs-3 result-font text-font' style="text-align:right;margin-top:4px"></div>
			<div id="executeBoxes" class="col-xs-8"></div>	
		</div>	
		<div id= "result" class='results'> &nbsp;</div>
		<div id='compareLength' class='result-font'>  </div> <br>
	</div>
	
	<div id = "targetBoxes" class="row col-xs-offset-0">
		
		<div class="row" id="indexOfRow">
			<div id="indexOfTextChecking" class='col-xs-3 result-font text-font' style="text-align:right;margin-top:4px"></div>
			<div id="indexOfBoxes" class="col-xs-8"></div>	
		</div>	
		
		<div class="row" id="indexOfRow2">
			<div id="indexOfTextChecking2" class='col-xs-3 result-font text-font' style="text-align:right;margin-top:4px"></div>
			<div id="indexOfBoxes2" class="col-xs-8"></div>	
		</div>	
		
		<div class="row" id="lastIndexOfRow">
			<div id="lastIndexOfTextChecking" class='col-xs-3 result-font text-font' style="text-align:right;margin-top:4px"></div>
			<div id="lastIndexOfBoxes" class="col-xs-8"></div>	
		</div>	
		
		<div class="row" id="lastIndexOfRow2">
			<div id="lastIndexOfTextChecking2" class='col-xs-3 result-font text-font' style="text-align:right;margin-top:4px"></div>
			<div id="lastIndexOfBoxes2" class="col-xs-8"></div>	
		</div>	
		<div id= "resultAtTarget" class='results'> &nbsp;</div>
		<div id='compareLength2' class='result-font'>  </div>
		<div id = 'lengthResult' class='result-font remove-typingCursor'> </div>
	</div>
	
	<div id = 'conclusion' class='result-font remove-typingCursor'> </div>
	<span id = 'space' class = 'nbsps'>&nbsp;&nbsp;</span>
	<a id = "nextButton" style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>
	<a id = "nextButton2" style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>
	<a id = "nextButton3" style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>
	<a id = "nextButton4" style='background-color:green' class='myNext introjs-button'>Next &#8594;</a>
</body>
</html>
