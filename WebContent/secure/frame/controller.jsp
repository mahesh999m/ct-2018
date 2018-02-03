<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<title>Insert title here</title>
</head>
<body>
<p>Try to change the names.</p>

<div ng-app="myApp" ng-controller="myCtrl">

First Name: <input type="text" ng-model="red" ng-maxlength="5" style="background-color:{{red}}"><br>
Last Name: <input type="text" ng-model="lastName" ng-maxlength="5"><br>
<br>
Full Name: {{red + " " + lastName}}
<p ng-bind="red + lastName"></p>
</div>

<script>
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope) {
	$scope.red = "blue";
	$scope.lastName = "David";
	$scope.maxlength = 5;
});
</script>
</body>
</html>