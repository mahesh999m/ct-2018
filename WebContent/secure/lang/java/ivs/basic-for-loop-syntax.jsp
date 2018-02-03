<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>java for loop</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="/secure/lang/c/js-min/bic.min.js"></script> -->
<script src="/secure/lang/java/js/basic-for-loop-syntax.js"></script>
<style type="text/css">
body {
	-moz-tab-size: 4;
	tab-size: 4;
}

.margin-top20 {
	margin-top: 20px;
}
.creamePreTab4 {
	background-color: #fffae6;
	margin-top: 12px;
	white-space: pre;
}

.cup-bg {
	background-color: #003399;
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    height: 38px;
    left: 450px;
    padding-bottom: 2px;
    position: absolute;
    top: 20px;
    /* transition: all 1.3s ease-out 0s;  */
    width: 57px;
    z-index: 1000004;
}

.cup {
	display: inline-block;
	left: 15px;
	position: relative;
	top: 2px;
	z-index: 1000000;
}

#cup_value {
	bottom: 53px;
	color: black;
	left: 9px;
	position: relative;
	z-index: 1000005 !important;
}

.i-position {
	bottom: 32px;
	color: white;
	font-family: monospace;
	font-size: 10px;
	position: relative;
	right: 11px;
	font-weight: bold;
}

.fa-inverse {
    font-size: 30px;
}

.box-border {
	border-radius: 8px;
	margin: 5px;
}

.output-console-body {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 132px;
    margin-bottom: 14px;
    padding: 10px;
}

.title {
	font-size: 12px;
}

.introjs-tooltip {
	min-width: 300px;
}

[contenteditable]:focus {
    outline: 0px solid transparent;
    background: yellow;
}

.position-relative {
	position: relative;
}

.user-btn {
	background: green;
}

.user-done-btn {
	background: orange;
}

.error {
	font-weight: bold;
	color: red;
}

p {
	font-size: 12px;
	font-weight: bold;
}


</style>

<script type="text/javascript">
	
	$(document).ready(function() {
		basicForLoopSyntaxReady();
	});
	
</script>
</head>
<body>
	<div class="col-xs-12">
		<div class="text-center col-xs-12">
			<h4>
				<span class="label ct-demo-heading">For Loop in Action</span>
			</h4>
		</div>
		<div class="col-xs-12 margin-top20">
			<div class="col-xs-6">
				<div class="col-xs-12">
				<pre class="creamePreTab4">public class ForLoopDemo {  
	<span id='main'>public static void main(String[] args) {</span>
		<span id='forloop'>for(<span class="position-relative" id="initialization">int i = <span
						id="initialization_Value" class="position-relative" maxlength="1" contenteditable=false>0</span>;</span> <span id="condition"
						class="condition position-relative"><span style="position: relative;">i < <span
							id="condition_Value" maxlength="1" contenteditable=false>3</span>;</span></span><span class="cup-bg opacity00"><span class="hide-sm cup"><i class="fa fa-coffee fa-inverse fa-2"></i><h5 class="i-position"><span id='cup_i'>i</span>= <h6 id="cup_value" class='opacity00'></h6></h5></span></span><span> <span id="increment" class="increment">i++</span>) {</span>
			<span id="sop" class="body-Of-The-Loop">System.out.println("i value = " + i);</span>
		}</span>
	}
}
</pre>
				</div>
			</div>
			<div class="col-xs-offset-2 col-xs-4">
				<div id="outputMainDiv" class="col-xs-12 box-border outputDiv">
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div>
					<div class="output-console-body"><span id="output"></span></div>
				</div>
			</div>
		</div>
		<div class="text-center col-xs-12 margin-top20">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</body>
</html>