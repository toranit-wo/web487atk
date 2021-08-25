function initCalendar() {
    $('.datepicker').datepicker({
        dateFormat: "dd/mm/yy",
        todayBtn: "linked",
        language: "th",
        autoclose: true,
        todayHighlight: true
    });
    $('.datepicker').on('focus', function(e) {
        e.preventDefault();
        $(this).datepicker('show');
        $(this).datepicker('widget').css('z-index', 1051);
    });
}

function number_format(input, delimiter) {
    return input.toLocaleString('en-US', {
        minimumFractionDigits: delimiter
    });
}

var app = angular.module("myApp", ['ngRoute']);
var rand = Math.random();

app.directive('ngFiles', ['$parse', function($parse) {
    function fn_link(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on('change', function(event) {
            onChange(scope, {
                $files: event.target.files
            });
        });
    };
    return {
        link: fn_link
    }
}]);
var app = angular.module('myApp', []);

app.controller('IndexController', function ($scope, $http) {
    $scope.colorPage = "black";
    $scope.page = "home";
    $scope.articlePage = "ghost house";
    // $scope.articlePage = "home";
	$scope.status = "Connect";
	  
	$scope.loginCheck = function () {
		// $http.post('api/loadmenu.php',params).then(res => {
                
        // });
        $http({
            method: 'get',
            url: 'api/loadmenu.php'
          }).then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available
              console.log(response.data);
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
	};
	
	$scope.gridFunc = function () {
        if ($scope.grid == true) {
            $scope.grid = false;
        } else {
            $scope.grid = true;
        }
	};

	$scope.LoginFunc = function () {
        var user = $scope.user;
        var pass = $scope.pass;
    };
    
    $scope.loadMenu = function () {
        $scope.home = "หน้าแรก";
        $scope.linkIn = "Link รับทรัพย์";
        $scope.article = "บทความ";
        $scope.contact = "ติดต่อเรา";
        $scope.game = "เกมส์ออนไลน์";
        $scope.football = "ฟุตบอล";
        $scope.baccarat = "บาคาร่า";
        $scope.slot = "สล็อต";
        $scope.heilo = "ไฮโล";
    }

    $scope.getMenu = function (input) {
        
        $scope.page = input;
        if(input == "home"){
            $scope.colorPage = "black";
        }else{
            $scope.colorPage = "";
        }

    };

    $scope.articleFunc = function (input) {
        
        $scope.articlePage = input;

    };
    
    $scope.startPage = function() {
        $scope.loadMenu();
    };
});