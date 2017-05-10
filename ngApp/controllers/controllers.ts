namespace myapp.Controllers {

    const apiUrl = '/api/cars/search/';

    export class HomeController {
        public cars;
        public search;

        fetch() {
          if (this.search) {
            console.log('searching');
            this.$http.get(apiUrl + this.search)
                .then((results) => {
                  this.cars = results.data;
                });
          }

        }

        constructor(private $http: ng.IHttpService) { }



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
