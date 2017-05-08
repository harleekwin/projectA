var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var apiUrl = '/api/cars/search';
        var HomeController = (function () {
            function HomeController($http) {
                var _this = this;
                this.$http = $http;
                this.message = 'Hello from the home page!';
                this.$http.get('/api/cars')
                    .then(function (response) {
                    _this.cars = response.data;
                })
                    .catch(function (response) {
                    console.error('Could not retrieve cars.');
                });
            }
            HomeController.prototype.fetch = function () {
                var _this = this;
                this.$http.get(apiUrl + this.search).then(function (res) {
                    console.log(res);
                    _this.cars = res.data;
                });
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
