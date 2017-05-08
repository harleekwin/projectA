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

    export class Dropdown {
      disabled = false;
      items: Array<string> = ['BMW', 'Tesla', 'Mini Cooper'];
      status = {isopen: false};
      toggled(open:any) {
        console.log('Car Makes: ', open);
      }
      toggleDropdown ($event: MouseEvent){
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
      }
    }


    export class AboutController {
        public message = 'Welcome to the about page!';
    }

}
