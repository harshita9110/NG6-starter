class HomeController {

  constructor($location,$anchorScroll) {
    "ngInject";
    this.name = 'home';
    this._$location=$location;
    this._$anchorScroll=$anchorScroll;
    this.userInput=[];

  //  this.submitservice=submitservice;
    this.isCollapsed=false;
  }
  onEscape(){
    this.userInput.push(this.formInput);

  }
  onSubmit(){
    //this.submitservice.submitFn(this.userInput);
  }
  goToSection(){
     this._$location.hash('pickyourdestination');

    this._$anchorScroll();
  }
}


export default HomeController;
