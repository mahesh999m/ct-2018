
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="/secure/lang/c/js-min/ieic.min.js"></script> -->
<script src="/secure/lang/java/js/if-else.js"></script>

<style type="text/css">

.introjs-tooltip-custom-width {
	min-width: -moz-fit-content;
	width: intrinsic; /* Safari/WebKit uses a non-standard name */
	width: -moz-max-content; /* Firefox/Gecko */
	width: -webkit-max-content;
}

.position-absolute {
	position: absolute;
	font-family: monospace;
}

.allowNumbers {
	background-color: transparent;
	border: none;
	width: 20px;
}

.allowNumbers:focus {
	outline: none;
}

.introjs-tooltip {
	min-width: 300px; !important;
}

body {
	-moz-tab-size: 4;
	tab-size: 4;
}

#outputDiv {
	position: relative;
	z-index: 1000000;
}

.output-console-title-bar {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	margin-top: 14px;
}

.output-console-body {
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	height: 150px;
	margin-bottom: 14px;
	padding: 10px;
	font-weight: bold;
}

.title {
	font-size: 12px;
}

.creamePreTab4 {
	background-color: #fffae6;
	margin-top: 12px;
	white-space: pre;
}

.opacity00 {
	opacity: 0;
	pointer-events: none;
	cursor: default;
}

.initializeBtn, .evaluateBtn, .continueBtn, .animateBtn {
	background-color: green !important;
}

.FinishBtn {
	margin-right: 15px !important;
	background-color: orange !important;
}

.errorText {
	color: red;
	font-weight: bold;
}

#conditionTest {
	position: relative;
	font-family: monospace;
}

.flip-back, .flip-front {
	position: absolute;
	top: 0;
}

.flip-front, .flip-back {
	backface-visibility: hidden;
	transition: transform 1s ease 0s;
}

.flip-back {
	transform: rotateX(-180deg);
}

.flipped .flip-front {
	transform: rotateX(-180deg);
}

.flipped .flip-back {
	transform: rotateX(0deg);
}

.color-red {
	color: red;
}

.distinction_marks {
	position: absolute;
	display: inline-block;
}

#citizenSpan {
	position: relative;
	left: 30px;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.introjs-tooltiptext br {
	content: "";
	display: block;
	margin-top: 10px;
}

.else-css {
	left: 180px !important;
}

pre {
	font-size: 11px;
}

in {
	color: rgb(62, 50, 173);
	font-weight: bold;
}

ink {
	color: 	rgb(255, 0, 191);
}

go {
	color: rgb(134, 19, 19);
	font-weight: bold;
}

g {
	color: 	rgb(64, 130, 65);
	font-weight: bold;
}

r {
	color: red;
}


/* a:focus {
	outline: none;
} */


y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}



</style>

</head>
<body>
	<div class="col-xs-12">
		<div class="text-center">
			<h4>
				<span class="label ct-demo-heading">if-else in Action</span>
			</h4>
		</div>
		<div class="col-xs-offset-1 col-xs-6">
			<div>
<pre class="creamePreTab4"><in>public class</in> <ink>IfElseDemo</ink> {
	<in>public static void main</in>(String[] args) {
		<span id='citizenAge'><g>int</g> SENIOR_CITIZEN_AGE = <ink>75</ink>;</span>
		<span id='initialization'><g>int</g> age = <ink><input type="text" name="lname" id='initializationValue' class='allowNumbers'  maxlength="2" value='60'></span></ink>;
		<span id='ifElseBlock'><span id='ifBlock'><go>if</go> (<span id='condition'>age > SENIOR_CITIZEN_AGE</span>) {
			<span id='ifStmt'>System.out.println(<ink>"Person is a senior citizen"</ink>);</span>
		}</span> <span id='elseBlock'><go>else</go> {
			<span id='elseStmt'>System.out.println("<ink>Person is not a senior citizen</ink>");</span>
		}</span></span>
	<span id='mainEnd'>}</span>
}
</pre>
			</div>
		</div>
		<div class="col-xs-4" id="outputDiv">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body"><span id="output"></span>
			</div>
		</div>
	</div><br>
	<div class="text-center col-xs-12">
		<a class="btn btn-warning opacity00" id="restart">Restart</a>
	</div>
	
<script type="text/javascript">

	$(document).ready(function() {
		ifElseInCReady();	
	});

</script>
	
</body>
</html>
