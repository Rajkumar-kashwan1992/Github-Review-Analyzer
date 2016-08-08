(function() {
    'use strict';
    /* jshint camelcase: false */
    angular.module('wmsApp')
        .controller('mainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$http'];

    function MainCtrl($scope, $http) {
        $scope.name="";
        $scope.date_from = document.getElementById("date_from").value;
        //$scope.date_from=$scope.date_from.toISOString().substring(0, 10);
        //var dt_fr=date_from.getDay()+"-"+date_from.getMonth()+"-"+date_from.getFullYear();
         //&scope.v = $filter('date')($scope, "dd/MM/yyyy");
        // $scope.dt_fr = $scope.date_from.getFullYear()+"-"+($scope.date_from.getMonth()+1)+"-"+$scope.date_from.getDate();
        $scope.date_to = document.getElementById("date_to").value;
       // var v = {{$scope.date_from.toISOString().substring(0, 10)}};
        $scope.search=function(){
            /*---------------------------------------
            //if($scope.name!== null){
                $http.get("http://localhost:9000/app/main/name.json")
                .success(function(response) {
                    //var a = $scope.date_from.getDay();

                //document.write($scope.date_from);
                //console.log($scope.date_from);
                //$scope.root_link=
                $scope.employees = response.results;
                $scope.next_page = response.next;
                $scope.previous_page = response.previous;
                $scope.count= response.count;
                $scope.limit =2;
                $scope.no_of_pages = Math.ceil($scope.count/$scope.limit);
                $scope.page_array = new Array($scope.no_of_pages);
                //console.log($scope.next_page);
                console.log($scope.page_array);
                }

            ).error(function(data, status) {
                     $scope.employees = null;
                      alert("Comment not found");
                    }
                );
        //}
        //---------------------------------------------
        ----------------------------------------------------------*/
            $scope.sortType     = 'commented_by.username'; // set the default sort type
            $scope.sortReverse  = false;  // set the default sort order
            if($scope.date_from === "" && $scope.date_to === ""){
                $http.get("http://10.2.8.188:8000/gitapi/get_user_comment/"+$scope.name+"/?format=json&limit=2&offset=0")
                .success(function(response) {
                    //var a = $scope.date_from.getDay();

                //document.write($scope.date_from);
                    //console.log($scope.name);
                    //$scope.employees = response;
                    $scope.employees = response.results;
                    $scope.next_page = response.next;
                    $scope.previous_page = response.previous;
                    $scope.count= response.count;
                    $scope.limit =2;
                    $scope.no_of_pages = Math.ceil($scope.count/$scope.limit);
                    $scope.page_array = new Array($scope.no_of_pages);
                    $scope.root_link = "http://10.2.8.188:8000/gitapi/get_user_comment/"+$scope.name+"/?format=json";
                    console.log($scope.name);
                    }

                ).error(function(data, status) {
                     $scope.employees = null;
                      alert("Comment not found");
                    }
                );
            }
//----------------------------------------------------------
           else if($scope.date_to === "" ){
            $http.get("http://10.2.8.21:188/gitapi/get_user_comment/"+$scope.name+"/?format=json&from_date="+$scope.date_from.getFullYear()+"-"+($scope.date_from.getMonth()+1)+"-"+$scope.date_from.getDate()+"&limit=2&offset=0")
                .success(function(response) {
                    //var a = $scope.date_from.getDay();

                //document.write($scope.date_from);
                    console.log($scope.date_from);
                    $scope.employees = response;
                    $scope.employees = response.results;
                    $scope.next_page = response.next;
                    $scope.previous_page = response.previous;
                    $scope.count= response.count;
                    $scope.limit =2;
                    $scope.no_of_pages = Math.ceil($scope.count/$scope.limit);
                    $scope.page_array = new Array($scope.no_of_pages);
                    $scope.root_link = "http://10.2.8.21:188/gitapi/get_user_comment/"+$scope.name+"/?format=json&from_date="+$scope.date_from.getFullYear()+"-"+($scope.date_from.getMonth()+1)+"-"+$scope.date_from.getDate();
                    console.log($scope.name);

                    }

                ).error(function(data, status) {
                     $scope.employees = null;
                      alert("Comment not found");
                    }
                );

           }

            else if($scope.date_from === "" ){
            $http.get("http://10.2.8.188:8000/gitapi/get_user_comment/"+$scope.name+"/?format=json&to_date="+$scope.date_to.getFullYear()+"-"+($scope.date_to.getMonth()+1)+"-"+$scope.date_to.getDate()+"&limit=2&offset=0")
                .success(function(response) {
                    //var a = $scope.date_from.getDay();

                //document.write($scope.date_from);
                    console.log($scope.date_from);
                     $scope.employees = response.results;
                    $scope.next_page = response.next;
                    $scope.previous_page = response.previous;
                    $scope.count= response.count;
                    $scope.limit =2;
                    $scope.no_of_pages = Math.ceil($scope.count/$scope.limit);
                    $scope.page_array = new Array($scope.no_of_pages);
                    $scope.root_link = "http://10.2.8.188:8000/gitapi/get_user_comment/"+$scope.name+"/?format=json&to_date="+$scope.date_to.getFullYear()+"-"+($scope.date_to.getMonth()+1)+"-"+$scope.date_to.getDate();

                    }

                ).error(function(data, status) {
                     $scope.employees = null;
                      alert("Comment not found");
                    }
                );

           }
           else
           {
            $http.get("http://10.2.8.188:8000/gitapi/get_user_comment/"+$scope.name+"/?format=json"+"&from_date="+$scope.date_from.getFullYear()+"-"+($scope.date_from.getMonth()+1)+"-"+$scope.date_from.getDate()+"&to_date="+$scope.date_to.getFullYear()+"-"+($scope.date_to.getMonth()+1)+"-"+$scope.date_to.getDate()+"&limit=2&offset=0")
                .success(function(response) {
                    //var a = $scope.date_from.getDay();

                //document.write($scope.date_from);
                console.log($scope.date_from);
                $scope.employees = response.results;
                    $scope.next_page = response.next;
                    $scope.previous_page = response.previous;
                    $scope.count= response.count;
                    $scope.limit =2;
                    $scope.no_of_pages = Math.ceil($scope.count/$scope.limit);
                    $scope.page_array = new Array($scope.no_of_pages);
                    $scope.root_link = "http://10.2.8.188:8000/gitapi/get_user_comment/"+$scope.name+"/?format=json"+"&from_date="+$scope.date_from.getFullYear()+"-"+($scope.date_from.getMonth()+1)+"-"+$scope.date_from.getDate()+"&to_date="+$scope.date_to.getFullYear()+"-"+($scope.date_to.getMonth()+1)+"-"+$scope.date_to.getDate();

                }

            ).error(function(data, status) {
                     $scope.employees = null;
                      alert("Comment not found");
                    }
                );
           }







         //----------------------------------------------------------
        }
        $scope.go_to_next_page = function(page_index){
           //console.log($scope.page_index);
           //$scope.next_page="dsfsd";
           $scope.page_index1=page_index;
           $scope.offset=$scope.page_index1 *2;
           $scope.page_link = $scope.root_link+"&limit=2&offset="+$scope.offset;
           console.log($scope.page_index1);
           $http.get($scope.page_link)
                .success(function(response) {
                    //var a = $scope.date_from.getDay();

                //document.write($scope.date_from);
                //console.log($scope.date_from);
                //console.log($scope.next_page);
                $scope.employees = response.results;
                $scope.next_page = response.next;
                $scope.previous_page = response.previous;
                //console.log($scope.employees);
                //console.log($scope.previous_page);
                }

            ).error(function(data, status) {
                     $scope.employees = null;
                      alert("Comment not found");
                    }
                );
           //console.log($scope.next_page);
        }
        $scope.go_to_previous_page = function(){
           //console.log($scope.next_page);
           //$scope.next_page="dsfsd";
           $http.get($scope.previous_page)
                .success(function(response) {
                    //var a = $scope.date_from.getDay();

                //document.write($scope.date_from);
                //console.log($scope.date_from);
                console.log($scope.previous_page);
                $scope.employees = response.results;
                $scope.next_page = response.next;
                $scope.previous_page = response.previous;
                console.log($scope.employees);
                //console.log($scope.previous_page);
                }

            ).error(function(data, status) {
                     $scope.employees = null;
                      alert("Comment not found");
                    }
                );
           //console.log($scope.next_page);
        }
    }
})();

//"10.2.8.21:8000/gitapi/get_user_comment/"+$scope.name+"/"+$scope.date_from"+"/?format=json"

//http://10.2.8.21:8000/gitapi/get_user_comment/devendraratnam747/2016-07-28/?format=json
//10.2.8.21:8000/gitapi/get_user_comment/devendraratnam747/2016-7-28/?format=json
//10.2.8.21:8000/gitapi/get_user_comment/devendraratnam747/?format=json&from_date=2016-07-27&to_date=2016-07-29