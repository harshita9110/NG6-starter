class FacebookcomponentController {
  constructor(manageBucketListService,$rootScope,$window) {
    "ngInject"
    this.name = 'facebookcomponent';
    this.last_name='';
    this.photourl='';
    this.photos='';
    this._$rootScope=$rootScope;
    this._$window=$window;
    this.manageBucketListService=manageBucketListService;
    this.init();

  }
  init(){

    var promise=this.manageBucketListService.getLoginStatus().then(response=>{
      if (response.status === 'connected') {
        var uid = response.authResponse.userID;
          var accessToken = response.authResponse.accessToken;
          this.fbTokenDetails={
            uid:uid,
            accessToken:accessToken
          };
          this._$window.localStorage['fbTokenDetails']= JSON.stringify(this.fbTokenDetails);
          this.getLastName();
        }
        else {
          FB.login();
        }
    });
}


  getLastName(){
    this.manageBucketListService.getPhotosFBApi()
    .then(response=>{
      //console.log(response);
      this.last_name=response.last_name;

      this.photourl=response.picture.data.url;
    this.getPhotos();
    //this.getPermissions();
    }).catch(ex=>alert("Could not retrieve pictures becuse your session has expired"));
  }
  getPhotos(){

    this.manageBucketListService.getPhotosListFBApi(JSON.parse(this._$window.localStorage.getItem("fbTokenDetails")).accessToken)
    .then(response=>{
      console.log(response);
      this.photos=response.data;

    }).catch(ex=>alert("Could not retrieve pictures becuse your session has expired"));
  }
  getPermissions(){
    this.manageBucketListService.getPermissions()
    .then(response=>{
      console.log(response);

    }).catch(ex=>alert("Could not retrieve pictures becuse your session has expired"));

  }

}

export default FacebookcomponentController;
