namespace myapp.Controllers {

    const apiUrl = '/api/cars/search';

    export class HomeController {
        public message = 'Hello from the home page!';
        public cars;
        public search;

        public fetch() {
          this.$http.get(apiUrl + this.search).then((res) => {
            console.log(res);
            this.cars = res.data;
          })
        }

      

        constructor(private $http: ng.IHttpService) {
            this.$http.get('/api/cars')
                .then((response) => {
                    this.cars = response.data;
                })
                .catch((response) => {
                    console.error('Could not retrieve cars.');
                });
        }

    }


    export class AboutController {
        public message = 'Welcome to the about page!';
    }

}
