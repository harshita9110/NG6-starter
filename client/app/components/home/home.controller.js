class HomeController {

  constructor($location,$anchorScroll,manageBucketListService,$window,$scope) {
    "ngInject";
    this.name = 'home';
    this._$location=$location;
    this._$anchorScroll=$anchorScroll;
    this.userInput=[];
    this.manageBucketListService=manageBucketListService;
  //  this.submitservice=submitservice;
    this.isCollapsed=false;
     this._$window=$window;
     this._$scope=$scope;
     this.user_perma='';


  }

Login(){

              SC.connect(function () {
                SC.get("/me", function (me) {
                     this.user_perma = me.permalink;
                     console.log("user_perma"+user_perma);
                 });
      });
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
  openPrivateApp(){

    var url=this.manageBucketListService.initAuthorize();
    this._$window.open(url);

  }
  openFacebookApp(){

  }
}


export default HomeController;
