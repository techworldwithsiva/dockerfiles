var app=angular.module("qiApp",[]);
app.controller("qiCtrl",function($scope,$http,$timeout){
	$scope.sendMsg=function(){
	$http({
    url: 'http://35.227.89.108:8080/qi/webapi/enquiry',
    dataType: 'json',
    method: 'POST',
    data: $scope.obj

}).then(function(response){
   // $scope.response = response;
	$scope.successMsg  = response.data.response;
	$timeout(function(){
			$scope.successMsg  =  "";
	},3000)
},function(error){
    $scope.error = error;
});
	
}


$scope.getContactData = function(){
	$http({
    url: 'http://35.227.89.108:8080/qi/webapi/enquiry',
    dataType: 'json',
    method: 'GET'

}).then(function(response){
   $scope.response = response.data.enquiries;
},function(error){
    $scope.error = error;
});
};

$scope.getContactData();

});