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
<link href="/css/animate.css" rel="stylesheet">
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/gs/TweenLite.min.js"></script>
<script src="/secure/lang/java/js/string-replace-methods.js"></script>
<title>33333</title>
<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.margin-top-15 {
	margin-top: 15px;
}

pre {
	 -moz-tab-size: 4;
	/*  margin-top: 30px; */
	  background-color: #fffae6;
	  font-size: 10px;
	  margin-left: -15px;
}

input {
	background: transparent;
	width: 40px;
	border: none;
}

.output-console-body {
	height: 150px;
	border-radius: 0 0 10px 10px;
}

.introjs-tooltip {
	min-width: 300px;
}

y {
	color: yellow;
	font-weight: bold;
}

:FOCUS {
	outline: none;
	font-weight: bold;
}

[maxlength] {
	color: hotpink;
}

.error {
	color: red;
	font-weight: bold;
}

#mainAnimationDiv {
	height: 150px;
}

.display-margin {
	display: inline-block;
	margin-top: 5px;
}

.box {
    border-radius: 6px;
    display: inline-block;
    height: 29px;
    position: relative;
    width: 30px;
}

.letter, .indexLetter {
    font-size: 120%;
    padding-left: 27%;
    padding-top: 7%;
    position: absolute;
}

.green {
	background: #6fb936;
}

.circle {
    display: inline-block;
    height: 29px;
    width: 30px;
    color: #B8860B;
    position: relative;
}

.letter {
	color: white;
}

#totalIndexDiv {
	height: 34px;
}

.blue {
	color: blue;
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


.temp1 {
	display: inline-block;
}

#outputDivFinal {
	font-size: 15px;
	font-weight: bold;
}

.padding00 {
	padding: 0px;
}

/* .replace-value {
	position: relative;
	display: inline-block;
}  */



/* var temp = $('input').val().length * 8;
$('input').innerWidth(temp); */
</style>

<script type="text/javascript">
$(document).ready(function()  {
	stringRepalceMethods();
});

</script>
</head>
<body>
	<div class='col-xs-12'>
		<div class='col-xs-12 text-center margin-top-20'>
		<h1 class='label ct-demo-heading'>String Methods in Action</h1>
		</div>
		<div class='col-xs-12 margin-top-20'>
		<div class='col-xs-6'>
		<div class='col-xs-12'>
<pre>public class StringMethodsDemo {
	public static void main(String[] args) {
		<span id='stringCode'><span id="textDiv">String text = "<span id="editor1" spellcheck="false" maxlength =9 >Ganga</span>";</span>		
		<span id = "sopLine">System.out.println("text.replace('<span id='oldCh'>a</span>', '<span id='newCh'>z</span>') = " + text.<b>replace('<span class="key" id="oldChar" maxlength="0">a</span>', '<span class="key" id="newChar" maxlength="0">z</span>')</b>);</span></span>
	}
}</pre>
		</div>
		</div>
			<div class='col-xs-6' id="mainAnimationDiv">
				<div class='col-xs-12 row1'>
					<div class='col-xs-4 text-right'>
						<strong class="opacity00 display-margin">indices =</strong>
					</div>
					<div class='col-xs-8 opacity00 padding00' id="totalIndexDiv"></div>
				</div>
				<div class='col-xs-12 row2'>
					<div class='col-xs-4 text-right'>
						<strong class="opacity00 display-margin">text =</strong>
					</div>
					<div class='col-xs-8 padding00' id="totalValueDiv"></div>

				</div>
				<div class='col-xs-12 row3'>

					<div class='col-xs-offset-1 col-xs-3 margin-top-15'>
						<strong id="animationType"></strong>
					</div>
					<div class='col-xs-8 margin-top-20 padding00' id="resultDiv"></div>
				</div>
			</div>
		</div>
		<div class='col-xs-12 margin-top-20'>
		<div class="col-xs-offset-4 col-xs-4 margin-top-20">
			<div class='col-xs-12 padding00 opacity00' id="consoleId">
				<div class='col-xs-12 output-console-title-bar'>
					<span class="title">Output</span>
				</div>
				<div class='col-xs-12 output-console-body'>
				<div id="outputDivFinal"></div>
				</div>		
			</div>
		</div>
		</div>
		<div class='col-xs-12 text-center margin-top-20'><button type="button" class="btn btn-warning opacity00" id="restartBtn">Restart</button></div>
	</div>
</body>
</html>