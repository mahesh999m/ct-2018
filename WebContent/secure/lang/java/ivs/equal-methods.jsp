<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

		<link rel="stylesheet" href="/css/bootstrap.min.css">
  		<script src="/js/jquery-latest.js"></script>
   		<script src="/js/jquery-ui-latest.js"></script>
		<link rel="stylesheet" href="/css/jquery-ui.css">
		<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
		<link rel="stylesheet" href="/css/font-awesome.min.css">
  		<script src="/js/bootstrap.min.js"></script>
  		       
   		<script src="/js/intro.js"></script>
   		<link rel="stylesheet" href="/css/introjs.css">
   		<link rel="stylesheet" href="/css/introjs-ct.css">
   		<script src="/js/gs/TweenMax.min.js"></script>
   		<script src="/js/gs/TweenLite.min.js"></script>
   		<script src="/js/typewriting.min.js"></script>
   		<!-- <script src="../js-min/em.min.js"></script> -->
   		<script src="/secure/lang/java/js/equal-methods.js"></script>

<title>Insert title here</title>

<%
	String demoType = request.getParameter("id");
	if (demoType == null || !("1".equals(demoType) || "2".equals(demoType) )) {
		demoType = "1";
	}
%>

<style type="text/css">

.titles {
	background-color: highlight;
    border-radius: 19px;
    padding: 3px 8px;
    position: relative;
    z-index: 1000000;
}
.headings {
	text-align: center !important;
} 
.creamPreTab4 {
   -moz-tab-size: 4;
    background-color: #fffae6;
    margin-left: -15px;
    white-space: pre;
    width: 104%;
}
.code-box {
	border-radius: 8px;
	margin-left: 2%;
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
    height: 29px;
    position: relative;
    width: 30px;
    border-radius: 50px;
    color: green;
}
.not-matched {
	display: inline-block;
    height: 29px;
    position: relative;
    width: 30px;
    border-radius: 50px;
    color: red;
}
.letter {
	color:white;
}
.green{
  	background-color: #6fb936;
}
.result-font{
	color:#434D56;
	font-size:90%;
}
.remove-typingCursor::after {
	width: 0 !important;
}
.comparingCircle {
	border: 2px solid blue;
    border-radius: 50%;
    margin-left: -13%;
    margin-top: -25%;
    padding: 22% 88% 105% 28%;
}
#result{
    margin-left: 27.3%;
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
.opacity00 {
	opacity: 0;
	pointer-events: none;
	cursor: default;
}
.errorText {
	color: red;
}
#restart, .exit-main {
	opacity: 0;
}
#restartDiv {
	padding-left: 72px;
	position: absolute;
}
#differInCase {
    margin-left: 12.6%;
}
.given-text {
	outline: none;
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

var demoType = <%= demoType %>;


var stringInterval;
var text1;
var text2;
var startsWithText;
var startIndex;
var endsWithText;
var introjs;

$(document).ready(function() {
	equalMethodsReady();
});

</script>

<%
	if ("1".equals(demoType)) {
%>
	<h3 class="headings" ><span class="label label-default titles">Equals Method in Action</span></h3>
<%
	} if ("2".equals(demoType)) {
%>
	<h3 class="headings" ><span class="label label-default titles">EqualsIgnoreCase Method in Action</span></h3>
<%
	}
%>

	<div class = 'codeAndAnimation row'>
		<div class="col-xs-5 code-box">
				<pre class = "creamPreTab4">public class StringMethodsDemo {
	public static void main(String[] args) {<div id = 'codeIntro'>		<span id = 'text1Id'>String text1 = "<span id = 'changeText1' contenteditable="false" class="given-text ct-code-pink" maxlength="9" placeholder="Enter text here" spellcheck="false">Jurassic</span>"; </span>
		<span id = 'text2Id'>String text2 = "<span id = 'changeText2' contenteditable="false" class="given-text ct-code-pink" maxlength="9" placeholder="Enter text here" spellcheck="false">JuraSSic</span>"; </span>
<%
	if ("1".equals(demoType)) {
%>		<span id = "equalsMethod">System.out.println("equals : " + text1.<b>equals(text2)</b>);</span></div>	} <span  class = 'exit-main' style = 'color:blue'>Exiting main method.</span>
} 
<%
	} else if ("2".equals(demoType)) {
%>		<span id = "equalsIgnoreCaseMethod">System.out.println("equalsIgnoreCase : " + text1.<b>equalsIgnoreCase(text2)</b>);</span></div>	} <span  class = 'exit-main' style = 'color:blue'>Exiting main method.</span>
}
<%
	}
%>	
				</pre>
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
		</div>
		
			</div>
	</div>
	<div id = 'restartDiv' class = 'col-xs-offset-5'> <button id ='restart' type="button" class="btn btn-warning">Restart</button> </div>
	</div>
		
	<div id = "textBoxes" class="row col-xs-offset-0">	
		<div class="row" id="row1">
			<div id="textIndices" class='col-xs-3 result-font' style="text-align:right;margin-top:5px"></div>
			<div id="excecuteIndices" class="col-xs-8"></div>
		</div>
		
		<div class="row" id="row2">
			<div id="enteredText" class='col-xs-3 result-font' style="text-align:right;margin-top:4px"></div>
			<div id="executeBoxes" class="col-xs-8"></div>	
		</div>	
		<div id='compareLength' class='result-font'>  </div> 		<br>
	</div>
	
	<div id = "textBoxes2" class="row col-xs-offset-0">	
		<div class="row" id="text2Row1">
			<div id="textIndices2" class='col-xs-3 result-font' style="text-align:right;margin-top:5px"></div>
			<div id="excecuteIndices2" class="col-xs-8"></div>
		</div>
		
		<div class="row" id="text2Row2">
			<div id="enteredText2" class='col-xs-3 result-font' style="text-align:right;margin-top:4px"></div>
			<div id="executeBoxes2" class="col-xs-8"></div>
		</div>	
		
		<div id = 'hideAfter'>
			<div id='compareLength2' class='result-font'>  </div>
			<div id = 'conclusion' class='result-font remove-typingCursor'> </div>
		</div>
	<div id= "result" class='results'> &nbsp;</div>
	<div id = 'differInCase' class = 'result-font remove-typingCursor'> </div>
	</div>
	
</body>
</html>
