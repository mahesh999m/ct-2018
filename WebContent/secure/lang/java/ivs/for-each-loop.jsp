<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>for-each-back-button</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="../js-min/fel.min.js"></script> -->
<script src="../js/for-each-loop.js"></script>
<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

pre {
	-moz-tab-size: 4;
}

.animationDiv {
    left: 50%;
    top: 21%;
  	width: 65%;
    z-index: 10000001 !important;
    position: absolute;
}

.creamePreTab4 {
    background-color: #fffae6;
}

#output {
    font-size: 14px;
    font-weight: bold;
}

.output-console-title-bar {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

.output-console-body {
	white-space: nowrap;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.introjs-tooltip {
	min-width: 300px;
}

:FOCUS {
	outline: none;
	background: yellow;
}

.error {
	font-weight: bold;
	color: red;
}

table {
	position: relative;
	z-index: 1000004;
}

td {
    padding: 5px !important;
    min-width: 45px !important;
    text-align: center;
}

.td-border {
	border: 2px solid gray;
}

.user-btn {
	background: green;
	margin-top: 0px !important;
}

.bgcolor-cream {
    background-color: #ffffcc;
    border-radius: 8px;
    height: 90px;
}

.ui-effects-transfer {
    border: 1px solid #003399;
    position: relative;
    z-index: 10000001 !important;
}

.index, .position-relative {
	position: relative;
}

.absolute-left {
    left: 43.2%;
    position: absolute;
}

.position-absolute {
	 position: absolute;
}

.arrow {
	position: relative;
	right: 28px;
}

.cup-bg {
	background-color: #003399;
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    height: 35px;
    position: fixed;
    transition: all 1.3s ease-out 0s;
    width: 60px;
    z-index: 10000000 !important;
}

.cup {
	display: inline-block;
    left: 23px;
    position: relative;
    z-index: 10000000 !important;
}

#cupValue {
	bottom: 56px;
	 left: 11px; 
	position: relative;
	z-index: 10000050 !important;
}

.num-position {
	bottom: 35px;
    color: white;
    font-family: monospace;
    font-size: 10px;
    position: relative;
    right: 22px;
}

.fa-inverse {
	font-size: 32px;
}

#output {
    height: 215px;
}

h6 {
	left: 25%;
}
.user-back-btn {
	background-color: #5bc0de !important;
}


</style>
</head>
<body>
<script type="text/javascript">

$(document).ready(function() {
	forEachLoopReady();
});

</script>
<span class="cup-bg"><span class="hide-sm cup"><i class="fa fa-coffee fa-inverse fa-2"></i><h5 class="num-position"><span id="cup_i">val</span>= </h5><h6 id="cupValue" class='opacity00'>1</h6></span></span>
	<div class="col-xs-12">
		<div class="text-center margin-top-20">
			<h4>
				<span class="label ct-demo-heading">for-each in Action</span>
			</h4>
		</div>
		<div class="col-xs-12 margin-top-20">
			<div class='col-xs-8'>
				<div class='col-xs-12'>
				<pre class="creamePreTab4">public class ForEachLoopDemo {  
	<span class="main">public static void main(String[] args) {
		<span id='array_initialize'>int[] <span id='intArr'>intArr = </span> <span id='new_array_initialization'>new int[4];</span></span>
		<span id='intArr_1'>intArr[<span>0</span>] = <span id='value1' class="allowNumbers" maxlength="2" contenteditable=false>34</span>;</span>
		<span id='intArr_2'>intArr[<span>1</span>] = <span id='value2' class="allowNumbers" maxlength="2" contenteditable=false>32</span>;</span><span id='testCupPosition'></span>
		<span id='intArr_3'>intArr[<span>2</span>] = <span id='value3' class="allowNumbers" maxlength="2" contenteditable=false>74</span>;</span>
		<span id='intArr_4'>intArr[<span>3</span>] = <span id='value4' class="allowNumbers" maxlength="2" contenteditable=false>27</span>;</span>
		<span id='forloop'><span id='syntax'>for (<span id='condition'>int val : <span>intArr</span></span>) { </span>
			<span id='body_of_loop'>System.out.println("val : " + val);</span>
		<span id='forLoopEnd'>}</span></span>
	<span id='mainEnd'>}</span></span><span class="animationDiv position-absolute"><div class="col-xs-8 bgcolor-cream text-center opacity00"><table><tr id='indexTr'><td><span class="opacity00">indices =  </span></td><td class='index'><span>0</span><span id="innerIndex1" class='absolute-left'></span></td><td class='index'><span>1</span><span id="innerIndex2" class='absolute-left'></span></td><td class='index'><span>2</span><span id="innerIndex3" class='absolute-left'></span></td><td class='index'><span>3</span><span id="innerIndex4" class='absolute-left'></span></td></tr><tr id='arrayTr'><td><span id='td0' class='opacity00 position-relative'>intArr = </span></td><td><span id='td1' class='opacity00 position-relative'>100</span></td><td><span  id='td2' class='opacity00 position-relative'>200</span></td><td><span id='td3' class='opacity00 position-relative'>300</span></td><td><span id='td4' class='opacity00 position-relative'>400</span></td></tr><tr id='arrowTr'><td></td><td><span id='arrowTd1'></span></td><td><span id='arrowTd2'></span></td><td><span id='arrowTd3'></span></td><td><span id='arrowTd4'></span></td></tr></table><br><br><span class='arrow opacity00 fa fa-arrow-up'></span></div></span>
}
</pre>
				</div>
			</div>
			<div class='col-xs-4' id="outputDiv">
				<div class='col-xs-12'>
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div>
					<div class="output-console-body">
						<div id="output">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="text-center col-xs-12">
		<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>

</body>
</html>