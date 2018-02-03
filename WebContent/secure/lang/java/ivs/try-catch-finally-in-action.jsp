<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="../js-min/tcfia.min.js"></script> -->
<script src="/secure/lang/java/js/try-catch-finally-in-action.js"></script>
<title>try-catch-finally in Action</title>

<style>

.ct-code-b-yellow {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.ct-box-main {
	margin: 10px;
	padding: 10px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.buttons-div {
	margin-top: 20px;
	text-align: center;
}

.box-border {
	margin-top: 30px;
}

.col-sm-6 {
	padding-left: 10px;
    padding-right: 10px;
}

.creamPreTab4 {
	-moz-tab-size: 6;
    background-color: #fffae6;
    border-radius: 8px;
    font-size: 11px;
    margin: 5px;
    padding: 10px;
    white-space: pre;
}

.output-console {
	margin: 10px;
}

.output-console-body {
	padding-left: 15px;
}

.visibility-hidden {
	visibility: hidden !important;
}

.output-printStackTrace-css {
	color: red;
	opacity: 0;
}

ol, ul {
	margin-bottom: 0;
    margin-left: -15px;
}

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltiptext {
	min-height: 25px !important;
}

.typingCursor::after {
    width: 0 !important;
}

.output-console-body {
	min-height: 143px;
}

#textEditable:focus {
	outline: none;
}

.exceptionCheckBtn {
	background-color:green !important;
}

y {
	font-weight: bold;
	color: yellow;
}

</style>

</head>
<body>

<div class='ct-box-main'>
	<div class='text-center'>
		<h1 class='label ct-demo-heading'>try-catch-finally in Action</h1>
	</div>
	<div class='buttons-div'>
		<!-- <button type="button" class="btn btn-success" id="startBtn">Start</button> -->
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div>
	<div>
		<div class='row'>
		<div class='col-sm-6 box-border'>
<pre class='creamPreTab4'>
public class TryCatchFinallyDemo {
	public static void main(String[] args) {
<span id='mainMethodBlock'>		<span id='textLine'>String text = "<span id='textEditable' maxlength="2" class="input-val" contenteditable=false>3gg</span>";</span>
		<span id='valueLine'>int value = 0;</span>
		<span id='tryLine'><b>try</b> {</span>
			<span id='parseIntLine'>value = Integer.parseInt(text);</span>
			<span id='sopInsideTry'>System.out.println("Successfully parsed text as integer");</span>
		} <span id='catchLine'><b>catch</b> (NumberFormatException e) {</span>
			<span id='sopInsideCatch'>System.out.println("Unable to parse text as integer");</span>
			<span id='printStackTraceLine'>e.printStackTrace();</span>
		} <span id='finallyLine'><b>finally</b> {</span>
			<span id='sopInsideFinally1'>System.out.println("Inside finally block");</span>
		}</span>
	}
}
</pre>
		</div>
		<div class='col-sm-6 box-border'>
		<div class="output-console center" id='output'>
					<div class="output-console-title-bar"> 
						<span>Output</span>
					</div>
	        		<div class="output-console-body">
<span id='outputOfSopInsideTry'></span><span id='outputOfSopInsideCatch'></span><span id='output-printStackTrace'>
<span class='output-printStackTrace-css' id='outputOfprintStackTraceLine1'>java.lang.<b>NumberFormatException</b>: For input string: <b>"<span id='output-text-value'></span>"</b></span>
	<span class='output-printStackTrace-css' id='outputOfprintStackTraceLine2'>at java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)</span>
	<span class='output-printStackTrace-css' id='outputOfprintStackTraceLine3'>at java.lang.Integer.parseInt(Integer.java:580)</span>
	<span class='output-printStackTrace-css' id='outputOfprintStackTraceLine4'>at java.lang.Integer.parseInt(Integer.java:615)</span>
	<span class='output-printStackTrace-css' id='outputOfprintStackTraceLine5'>at com.ct.TryCatchFinallyDemo.main(TryCatchFinallyDemo.java:<b>6</b>)</span></span>
<span id='outputOfSopInsideFinally1'></span>
	        		</div>
				</div>
		</div>
		</div>
	</div>
</div>

<script>
	
	$(document).ready(function() {
		tryCatchFinallyInAction();
	});

</script>

</body>
</html>