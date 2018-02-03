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
<script src="/secure/lang/java/js/string-length-charat-methods.js"></script>
<title>id = 1</title>
<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.margin-top-15 {
	margin-top: 15px;
}

.margin-top-5 {
	margin-top: 5px;
}


.margin-top-25 {
	margin-top: 25px;
}

pre {
	 -moz-tab-size: 4;
	  background-color: #fffae6;
	  font-size: 10px;
	  margin-left: -15px;
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

.error, .red {
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


.temp1 {
	display: inline-block;
}

.padding00 {
	padding: 0px;
}

.green-circle {
	border: 2px solid green;
	border-radius: 50%;
}


.output-console-body {
    color: white;
    font-size: 14px;
    font-weight: bold;
    white-space: pre-line;
}
.display-none {
	display: none;
}

.user-btn {
	background: green;
}

.user-btn-back {
	background: #5bc0de;
}

#mainAnimationDiv {
font-size: 13px;
}

.ui-effects-transfer {
	border: 2px solid green;
	border-radius: 50%;
	padding: 3px;
	z-index: 9999999 !important;
}



.count-length {
	color: seagreen;
	font-size: 18px;
	font-weight: bold;
	padding: 6px 12px; 
	position: relative;
	display: inline-block;
}


</style>

<script type="text/javascript">
$(document).ready(function()  {
	stringSubstringMethods();
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
		<span id = "sopLine">System.out.println("text.charAt(<span id='onlyVal'>2</span>) = " + text.<b>charAt(<span id="editor2" class="key" maxlength="0">2</span>)</b>);</span>
		<span id = "sopLowerCase">System.out.println("text.toLowerCase() = " + text.toLowerCase());</span>
		<span id = "sopUpperCase">System.out.println("text.toUpperCase() = " + text.toUpperCase());</span>
		<span id = "sopLength">System.out.println("text.length() = " + text.length());</span></span>
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

					<div class='col-xs-4 margin-top-25'>
						<strong id="animationType"></strong>
					</div>
					<div class='col-xs-8 margin-top-20 padding00' id="resultDiv"></div>
				</div>
			</div>
		</div>
		<div class='col-xs-12 margin-top-20'>
		<div class="col-xs-offset-2 col-xs-8 margin-top-20">
			<div class='col-xs-12 padding00 opacity00' id="consoleId">
				<div class='col-xs-12 output-console-title-bar'>
					<span class="title">Output</span>
				</div>
					<div class='col-xs-12 output-console-body'>
						<div class='margin-top-5'>
							<p id="outputDivFinal"></p>
						</div>
						<div>
							<p id="outputDivFinalResult"></p>
						</div>
						<div>
							<p id="consoleUpperCaseSop"></p>
						</div>
						<div>
							<p id="consoleLengthSop"></p>
						</div>
						<div class="exception red display-none">
						<span class="fade opacity00">Exception in thread "main" java.lang.StringIndexOutOfBoundsException: String index out of range: <span class='range'></span></span>
						<span class="fade opacity00">&emsp;&emsp;&emsp;&emsp;at java.base/java.lang.StringLatin1.charAt(StringLatin1.java:44)</span>
						<span class="fade opacity00">&emsp;&emsp;&emsp;&emsp;at java.base/java.lang.String.charAt(String.java:704)</span>
						<span class="fade opacity00">&emsp;&emsp;&emsp;&emsp;at StringMethodsDemo.main(StringMethodsDemo.java:4)</span>
						</div>
					</div>
				</div>
		</div>
		</div>
		<div class='col-xs-12 text-center margin-top-20' id="btnDiv">
			<button type="button" class="btn btn-warning opacity00"
				id="restartBtn">Restart</button>
		</div>
	</div>
</body>
</html>