<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

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
	<!-- <script src="../js-min/smd.min.js"></script> -->
	<script src="/secure/lang/java/js/string-methods-demo.js"></script>
   		
<title>String Methods</title>

<%
	String demoType = request.getParameter("id");
	if (demoType == null ||
			!("1".equals(demoType) || "2".equals(demoType) || "3".equals(demoType))) {
		demoType = "1";
	}
%>

<style type="text/css">

.method-box {
	border-radius: 8px;
	margin: 2px;
    width:  50%;
}

.introjs-tooltip {
	min-width: 300px;
}

.animation-box {
	border-radius: 8px;
	margin: 2px; 
    width: 48%; 
}

.headings{
	text-align: center !important;
} 
 
.methods-div{
	border-radius: 10px; 
	padding-left: 9px !important;
	padding-right :0px !important;
	height: 300px;
}

.margin-adjust{
 	margin-left: 0px !important;
}

.executionDiv {
	margin-top: 25px;
} 

[contenteditable=true]:empty:before {
  content: attr(placeholder);
  color: #B8B8A0;
  outline: none;
}

span[contenteditable=true] {
  display: inline-block;
  border: 0px !important;
  outline: none;
}

.codeText {
	font-family: monospace !important;
}

h5 {
	color: DarkSlateGray;
}

pre {
 	font-size: 10px;
 	margin-top: 30px;
}
  
.creamPreTab4 {
   -moz-tab-size: 4;
    background-color: #fffae6;
    margin-left: -15px;
    white-space: pre;
    width: 104%;
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

.green{
  	background-color: #6fb936;
}

#textIndices {
    padding-left: 2px;
}

.letter, .indexLetter {
	font-size: 120%;
    padding-left: 27%;
    padding-top: 7%;
    position: absolute;
}

.letter, #myFlip, #myFlip2 {
	color: white;
}
#myFlip, #myFlip2, #afterReplace, #subBoxes, #subBoxes2 {
	margin-top: 5%;
} 
 
#charAtIndex {
	z-index: 10000000 !important; 
}

.position-absolute{
	position: absolute;
}

.position-relative{
	position: relative;
}

#findingLength, #charAtDiv {
	margin-top: 7%;
}

#mainBoxes {
	margin-top: 7%;
	height: 35%;
	position: absolute;
	width: 90%;
	padding-left: 0%;
    padding-top: 3%;
}

#convertLowerCase, #convertUpperCase {
	width: 100%;
	height: 60%;
	margin-top: 4%
}

#substring1Div, #substring2Div {
	width: 105%;
	height: 58%;
	margin-top: 3%
}

#replaceChar {
	/* width: 130%; */
	height: 58%;
	margin-top: 3%
}

#charAtDiv, #findingLength {
	width: 95%;
	height: 45%
}

.rw-words b {
	opacity: 0;
	overflow: hidden;
    -webkit-transform-origin: 0% 100% 0;
	transform-origin: 0% 100% 0;
	animation: rotateWord 4s linear;
	display: inline;
	font-size: 125%;
	color:red;
    text-indent: 0px;
}

@keyframes rotateWord {
    
    0% { opacity: 1; }
	17% { opacity: 1; -webkit-transform: rotate(98deg); transform: rotate(98deg); }
	21% { opacity: 1; -webkit-transform: rotate(86deg); transform: rotate(86deg); }
	23% { opacity: 1; -webkit-transform: translateY(85px) rotate(83deg); transform: translateY(85px) rotate(83deg); }
	25% { opacity: 0; -webkit-transform: translateY(170px) rotate(80deg); transform: translateY(170px) rotate(80deg); }
	80% { opacity: 0; }
    100% { opacity: 0; }  
}  

.result-font{
	color:#434D56;
	font-size:90%;
	font-weight: bold;
}

.titles {
	background-color: highlight;
    border-radius: 19px;
    padding: 3px 8px;
    position: relative;
    z-index: 1000000;
}

.remove-typingCursor::after {
	width: 0 !important;
}

.introjs-tooltip {
	max-width: 900 !important;
}

.output-console-body {
	height: 175px !important;
}

#restart {
	opacity: 0;
}

#output {
     margin-top: -5%; 
     z-index: 1000000;
     position: absolute; 
}

#restartDiv {
	padding-left: 72px;
	position: absolute;
	margin-top: 2%;
}

.countingCircle {
	border: 1px solid black;
    border-radius: 50%;
    margin-left: -13%;
    margin-top: -25%;
    padding: 22% 88% 105% 28%;
}

#contentLength {
    padding-left: 1.5%;
    font-size: 120%;
}

.opacity00 {
	opacity: 0;
	pointer-events: none;
	cursor: default;
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
var content;
var introjs;
var firstEditor;

	$(document).ready(function(){
		stringMethodsReady();
	});

		 
</script>

	<h3 class="headings" ><span id="span_label" class="label label-default titles">String Methods in Action</span></h3>
	
 	<div class="row  margin-adjust executionDiv">
     	<div class="col-xs-6 method-box methods-div">   
      			<div class="col-xs-12">
					<pre class="creamPreTab4">public class StringMethodsDemo {
	public static void main(String[] args) { 
<span id='string_code'>		<span class="textDiv">String text = "<span class="ct-code-pink" contenteditable="false" id="givenText" maxlength="9" spellcheck="false">Ganga</span>"; </span>
<%
	if ("1".equals(demoType)) {
%>		<span id = "lengthMethod">System.out.println("text.length() = " + text.<b>length()</b>);</span>
		<span id = "lowercaseMethod">System.out.println("text.toLowerCase() = " + text.<b>toLowerCase()</b>);</span>
		<span id = "uppercaseMethod">System.out.println("text.toUpperCase() = " + text.<b>toUpperCase()</b>);</span>
		<span id = "charAt">System.out.println("text.charAt(<span id='charIndexInMethod'>1</span>) = " + text.<b>charAt(<span class="indexLengthLimit ct-code-pink" contenteditable="true" id="charAtIndex" maxlength="0">1</span><span id='back_index' contenteditable="true" style = "position: absolute"></span>)</b>);</span>
<%
	} else if ("2".equals(demoType)) {
%>		<span id = "substringMethod1">System.out.println("text.substring(<span id='beginIndexInMethod'>2</span>) = " + text.<b>substring(<span class="indexLengthLimit ct-code-pink" contenteditable="true" id="substring1Index" maxlength="0">2</span>)</b>);</span>
		<span id = "substringMethod2">System.out.println("text.substring(<span id='beginIndexInSub2'>1</span>, <span id='endIndexInSub2'>3</span>) = " + text.<b>substring(<span class="indexLengthLimit ct-code-pink" contenteditable="true" id="beginIndex" maxlength="0">1</span>, <span class="indexLengthLimit ct-code-pink" contenteditable="true" id="endIndex" maxlength="0">3</span>)</b>);</span>
<%
	} else if ("3".equals(demoType)) {
%>		<span id = "replace">System.out.println("text.replace('<span id='oldCharInMethod'>a</span>', '<span id='newCharInMethod'>z</span>') = " + text.<b>replace('<span class="replace-keys ct-code-pink" contenteditable="true" id="oldChar" maxlength="0">a</span>', '<span class="replace-keys ct-code-pink" contenteditable="true" id="newChar" maxlength="0">z</span>')</b>);</span>
<%
	} 
%></span>	}
}</pre>	
	</div>
     	</div>
     		
              <div  class="col-xs-4 animation-box methods-div" id="animationDiv" >	
                <div class="row">
			    </div>			 	
		     </div>			
   </div>			 
   
   <div id = "output" class="col-xs-offset-3 col-xs-6 ">
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
					<div id = "mainBoxes" class="row col-xs-offset-0">
						<div class="row" id="row1">
  							<div id="textIndices" class='col-xs-3 result-font remove-typingCursor' style="text-align:right;margin-top:5px"></div>
							<div id="executeIndexes" class="col-xs-8"></div>
						</div>
						
						<div class="row" id="row2">
							<div id="enteredText" class='col-xs-3 result-font remove-typingCursor' style="text-align:right;margin-top:4px"></div>
  								<div id="executeBoxes" class="col-xs-8"></div>	
						</div>			
  							 			 				
					</div>
	 			
					<div id="findingLength" class="row col-xs-offset-0">
		
						<div class="row" id="lengthRow1">
   								<div id="indexesAtLength" class='col-xs-3 result-font remove-typingCursor' style="text-align:right;margin-top:5px"></div>
								<div id="animateIndexes" class="col-xs-8"></div>
						</div>
						
						<div class="row" id="lengthRow2">
								<div id="textAtLength" class='col-xs-3 result-font remove-typingCursor' style="text-align:right;margin-top:4px"></div>
   								<div id="animateBoxes" class="col-xs-8"></div>	
						</div>	
						<div id= "lengthResult" class='col-xs-offset-0 result-font remove-typingCursor	'> </div>
					</div>
				
					<div id="convertLowerCase" class="row col-xs-offset-0">			
						<div class="row" id="lowerCaseRow1">
   								<div id="indexesAtLowerCase" class='col-xs-4 result-font remove-typingCursor' style="text-align:right;margin-top:5px"></div>
								<div id="beforeLowerCaseIndexes" class="col-xs-8"></div>
						</div>
						
						<div class="row" id="lowerCaseRow2">
								<div id="textAtLowerCase" class='col-xs-4 result-font remove-typingCursor' style="text-align:right;margin-top:4px"></div>
   								<div id="beforeLowerCaseBoxes" class="col-xs-8"></div>	
						</div>	
							
							<div class="row" id="lowerCaseRow3"></div>						
					</div>
				
					<div id="convertUpperCase" class="row col-xs-offset-0">		
						<div class="row" id="upperCaseRow1">
   								<div id="indexesAtUpperCase" class='col-xs-4 result-font remove-typingCursor' style="text-align:right;margin-top:5px"></div>
								<div id="beforeUpperCaseIndexes" class="col-xs-8"></div>
						</div>
						
						<div class="row" id="UpperCaseRow2">
								<div id="textAtUpperCase" class='col-xs-4 result-font remove-typingCursor' style="text-align:right;margin-top:4px"></div>
   								<div id="beforeUpperCaseBoxes" class="col-xs-8"></div>	
						</div>	
						<div class="row" id="upperCaseRow3"></div>	
					</div>
					
					<div id='charAtDiv' class="row col-xs-offset-0"> 
	 					<div class="row" id="charAtRow1">
   								<div id="indexesAtCharAt" class='col-xs-3 result-font remove-typingCursor' style="text-align:right;margin-top:5px"></div>
								<div id="indexAt" class="col-xs-8"></div>
						</div>
						
						<div class="row" id="charAtRow2">
								<div id="textAtCharAt" class='col-xs-3 result-font remove-typingCursor' style="text-align:right;margin-top:4px"></div>
   								<div id="charAtBoxes" class="col-xs-8"></div>	
						</div>	
						<div id= "charAtResult" class='col-xs-offset-0 result-font remove-typingCursor'> </div>
					</div>		
									
					<div id='substring1Div' class="row col-xs-offset-0"> 
	 					<div class="row" id="substring1Row1">
   								<div id="indexesAtSubstring1" class='col-xs-4 result-font remove-typingCursor' style="text-align:right;margin-top:5px"></div>
								<div id="originalIndexes" class="col-xs-8"></div>
						</div>
						
						<div class="row" id="substring1Row2">
								<div id="textAtSubstring1" class='col-xs-4 result-font remove-typingCursor' style="text-align:right;margin-top:4px"></div>
   								<div id="originalBoxes" class="col-xs-8"></div>	
						</div>	
						<div class="row" id="substring1Row3"></div>	
					</div> 
						
					<div id='substring2Div' class="row col-xs-offset-0"> 										
	 					<div class="row" id="substring2Row1">
   								<div id="indexesAtSubstring2" class='col-xs-4 result-font remove-typingCursor' style="text-align:right;margin-top:5px"></div>
								<div id="originalIndexes2" class="col-xs-8"></div>
						</div>
						
						<div class="row" id="substring2Row2">
								<div id="textAtSubstring2" class='col-xs-4 result-font remove-typingCursor' style="text-align:right;margin-top:4px"></div>
   								<div id="originalBoxes2" class="col-xs-8"></div>	
						</div>	
							
						<div class="row" id="substring2Row3"></div>	
					</div> 
						
					<div id="replaceChar" class="row col-xs-offset-0">							
						<div class="row" id="replaceRow1">
   								<div id="indexesAtReplace" class='col-xs-4 result-font remove-typingCursor' style="text-align:right;margin-top:5px"></div>
								<div id="mainIndex" class="col-xs-6"></div>
						</div>
						
						<div class="row" id="replaceRow2">
								<div id="textAtReplace" class='col-xs-4 result-font remove-typingCursor' style="text-align:right;margin-top:4px"></div>
   								<div id="beforeReplace" class="col-xs-6"></div>	
						</div>	
						<div class="row" id="replaceRow3"></div>	
					</div>
					
		<div id = 'restartDiv' class = 'col-xs-offset-5'> <button id ='restart' type="button" class="btn btn-success">Restart</button> </div>			
</body>  
</html>
