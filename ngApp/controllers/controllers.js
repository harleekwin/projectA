var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var apiUrl = '/api/cars/search/';
        var HomeController = (function () {
            function HomeController($http) {
                this.$http = $http;
            }
            HomeController.prototype.fetch = function () {
                var _this = this;
                if (this.search) {
                    console.log('searching');
                    this.$http.get(apiUrl + this.search)
                        .then(function (results) {
                        _this.cars = results.data;
                    });
                }
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var Dropdown = (function () {
            function Dropdown() {
                this.disabled = false;
                this.items = ['BMW', 'Tesla', 'Mini Cooper'];
                this.status = { isopen: false };
            }
            Dropdown.prototype.toggled = function (open) {
                console.log('Car Makes: ', open);
            };
            Dropdown.prototype.toggleDropdown = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                this.status.isopen = !this.status.isopen;
            };
            return Dropdown;
        }());
        Controllers.Dropdown = Dropdown;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Welcome to the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
