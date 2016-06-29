
(function () {

    //create angularjs controller
    var app = angular.module('app', []);//set and get the angular module
    app.controller('customerController', ['$http', customerController]);

    //angularjs controller method
    function customerController($http) {
        debugger;
        var vm = this;
        vm.customer = {};

        //declare variable for mainain ajax load and entry or edit mode
        vm.loading = true;
        vm.addMode = false;
        vm.editMode = false;

        //get all customer information
        $http.get('/api/Customer/').success(function (data) {
            debugger;
            vm.customers = data;
            vm.loading = false;
        })
        .error(function () {
            vm.error = "An Error has occured while loading posts!";
            vm.loading = false;
        });

        //by pressing toggleEdit button ng-click in html, this method will be hit
        vm.toggleEdit = function (customer) {
            debugger;

            customer.editMode = !customer.editMode;
        };

        //by pressing toggleAdd button ng-click in html, this method will be hit
        vm.toggleAdd = function () {
            debugger;
            vm.addMode = !vm.addMode;
        };

        //Insert Customer
        vm.add = function () {
            vm.loading = true;
            $http.post('/api/Customer/', this.newcustomer).success(function (data) {
                alert("Added Successfully!!");
                vm.addMode = false;
                vm.customers.push(data);
                vm.loading = false;
            }).error(function (data) {
                vm.error = "An Error has occured while Adding Customer! " + data;
                vm.loading = false;
            });
        };

        //Edit Customer
        vm.save = function (customer) {
            debugger;
            vm.loading = true;
            var frien = customer;
            $http.put('/api/Customer/' + frien.Id, frien).success(function (data) {
                alert("Update Successfully!!");
                customer.editMode = false;
                vm.loading = false;
            }).error(function (data) {
                vm.error = "An Error has occured while Saving customer! " + data;
                vm.loading = false;
            });
        };

        //Delete Customer
        vm.deletecustomer = function (customer) {
            debugger;
            vm.loading = true;
            var Id = customer.Id;
            var check = confirm('Are you sure you want to delete this?');
            if (check == false) {
                return false;
            }
            else {
                $http.delete('/api/Customer/' + Id).success(function (data) {
                    alert("Deleted Successfully!!");
                    $.each(vm.customers, function (i) {
                        if (vm.customers[i].Id === Id) {
                            vm.customers.splice(i, 1);
                            return false;
                        }
                    });
                    vm.loading = false;
                }).error(function (data) {
                    vm.error = "An Error has occured while Saving Customer! " + data;
                    vm.loading = false;
                });
            }
        };
    }
})();