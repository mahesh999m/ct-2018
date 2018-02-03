<<!DOCTYPE head PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Java Language Index</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/custom-styles.css">
<link rel="stylesheet" href="/css/font-awesome.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>

<style type="text/css">
r {
	color: red;
	font-weight: bold;
}

.fa-check {
	color: #8B0000;
}
</style>

<script type="text/javascript">

	function opendialog(className, url, width, height) {
		if (width == undefined) {
			width = 600;
		} else {
			width = jQuery(window).width() * width;
		}
		if (height == undefined) {
			height = 400;
		} else {
			height = jQuery(window).height() * height;
		}
		var $dialog = $('#javaDocBrowserDiv').html(
				'<iframe id="javaDocIFrame" style="border: 0px; " src="' + url
						+ '" width="100%" height="100%"></iframe>').dialog({
			title : className,
			autoOpen : false,
			dialogClass : 'dialog_fixed ui-widget-header jqueryUIPopupDialog',
			modal : false,
			height : height,
			minWidth : width,
			minHeight : height,
			draggable : true
		});
		$dialog.dialog('open');
		$dialog.closest('.ui-dialog').css("z-index", "1043");
	}
</script>



</head>
<body>
	<div id="javaDocBrowserDiv"></div>
	<div class='container'>

		<div class='well text-center' style='margin-top: 40px;'>
			<h1>Java Language Interactive Video's</h1>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-1: Introduction to Java</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Java program life cycle</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Java program life cycle', '/secure/lang/j/basics/program-life-cycle.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Java program life cycle</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Command line arguments</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Command line arguments', '/secure/lang/j/basics/command-line-arguments-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Command line arguments</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>Java program with println</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Java program with println', '/secure/lang/j/basics/simple-java-program-with-println.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Java program with println</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>4</td>
						<td>Difference between print and println</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Difference between print and println', '/secure/lang/j/basics/difference-between-print-n-println.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Difference between print and println</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>5</td>
						<td>Decimal to binary</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Decimal to binary', '/secure/lang/j/basics/decimal-to-binary.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal to binary</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>6</td>
						<td>Decimal to octal</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Decimal to octal', '/secure/lang/j/basics/decimal-to-octal.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal to octal</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>7</td>
						<td>Decimal to hexadecimal</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Decimal to hexadecimal', '/secure/lang/j/basics/decimal-to-hexadecimal.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal to hexadecimal</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-2: Control Statements</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>if else</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of if else', '/secure/lang/j/basics/if-else.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of if else</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Counting</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Counting', '/secure/lang/j/basics/counting.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Counting</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>Switch case</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of switch case', '/secure/lang/j/basics/switch.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of switch case</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>4</td>
						<td>for each loop</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of for each loop', '/secure/lang/j/basics/for-each-loop.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of for each loop</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>5</td>
						<td>for loop</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of for loop', '/secure/lang/j/basics/basic-for-loop-syntax.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of for loop</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>6</td>
						<td>While</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of while', '/secure/lang/j/basics/while.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of while</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>7</td>
						<td>do while</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of do while', '/secure/lang/j/basics/do-while.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of do while</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>8</td>
						<td>Break statement</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of break statement', '/secure/lang/j/basics/break.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of break statement</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>9</td>
						<td>Continue statement</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of continue statement', '/secure/lang/j/basics/continue.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of continue statement</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-3: Arrays in Java</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Array introduction</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Array introduction', '/secure/lang/j/basics/array-introduction.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Array introduction</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-5: Text Processing</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>String methods</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('String methods', '/secure/lang/j/string/string-methods-demo.jsp?id=1', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String methods</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>String methods</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
								href="javascript:opendialog('String equal method', '/secure/lang/j/string/equal-methods.jsp?id=1', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String equal method</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
								href="javascript:opendialog('String equalsIgnoreCase method', '/secure/lang/j/string/equal-methods.jsp?id=2', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String equalsIgnoreCase method</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
								href="javascript:opendialog('String startsWith method', '/secure/lang/j/string/starts-with-methods.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String startsWith method</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
								href="javascript:opendialog('String endsWith method', '/secure/lang/j/string/ends-with-method.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String endsWith method</span>
							</div>
						</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>String methods</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('String indexOf method', '/secure/lang/j/string/string-indexof-methods.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String indexOf method</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>4</td>
						<td>String methods</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('String substring method', '/secure/lang/j/string/string-methods-demo.jsp?id=2', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String substring method</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>5</td>
						<td>String methods</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('String replace method', '/secure/lang/j/string/string-methods-demo.jsp?id=3', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String replace method</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>1</td>
						<td></td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('', '', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green"></span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-15: Data Structures - Part - 2</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Array list introduction</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Array list introduction', '/secure/lang/j/basics/arraylist-introduction.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Array list introduction</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-16: Data Structures - Part - 3</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>hashmap</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('hashmap', '/secure/lang/j/col/hashmap-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">hashmap</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>1</td>
						<td>Different maps</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Different maps', '/secure/lang/j/col/different-maps.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Different maps</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-17: Data Structures - Part - 4</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>set</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('set', '/secure/lang/j/col/set-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">set</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>1</td>
						<td>Different sets</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Different sets', '/secure/lang/j/col/different-sets.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Different sets</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-18: Data Structures - Part - 5</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Queue</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Queue', '/secure/lang/j/col/queue-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Queue</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>1</td>
						<td>ArrayDeque</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('ArrayDeque', '/secure/lang/j/col/deque-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">ArrayDeque</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-22: Exception Handling - Part - 1</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Usage of try, catch and finally</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of try, catch and finally', '/secure/lang/j/basics/try-catch-finally-intro.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of try, catch and finally</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Understanding try-catch-finally syntax</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Understanding try-catch-finally syntax', '/secure/lang/j/basics/try-catch-finally-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Understanding try-catch-finally syntax</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-24: Multi-Threading</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Multitasking and Multithreading</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Multitasking and Multithreading', '/secure/lang/j/threads/live-threads-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Understanding multitasking and multithreading</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Single Thread</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Single Thread', '/secure/lang/j/threads/live-threads-in-action-with-code.jsp?id=1', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Single Thread</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td> Multiple Threads</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Multiple Threads', '/secure/lang/j/threads/live-threads-in-action-with-code.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Multiple Threads</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>4</td>
						<td>Stop Thread</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Stop Thread Demo', '/secure/lang/j/threads/threads-stop-demo-automatic.jsp?id=1', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Understanding Thread states</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>5</td>
						<td>Stop Feature - Multiple Threads</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Stop Thread Demo', '/secure/lang/j/threads/threads-stop-demo-automatic.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Understanding Thread states</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>6</td>
						<td>Wait and notify</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Wait and Notify Demo', '/secure/lang/j/threads/threads-wait-notify-demo-automatic.jsp?id=1', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Understanding wait and notify</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>7</td>
						<td> Pause and Resume - Multiple Threads</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Wait and Notify Demo', '/secure/lang/j/threads/threads-wait-notify-demo-automatic.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Understanding wait and notify</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		
		
	</div>
</body>
</html>
