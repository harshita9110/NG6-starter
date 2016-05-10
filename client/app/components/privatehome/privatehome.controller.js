class PrivatehomeController {
  constructor($window,manageBucketListService,$location) {
      "ngInject";
    this.name = 'privatehome';
     this.OAUTH2_CLIENT_ID='303834639003-k4n3umte7q3eumlndn6qrredd5dg1ma4.apps.googleusercontent.com';
     this.OAUTH2_SCOPES=[
       'https://www.googleapis.com/auth/youtube'
     ];
     this.showPreAuth=false;
     this.authorizeDisabled=true;
     this._$window=$window;
     this._$location=$location;
     this.manageBucketListService=manageBucketListService;
     //this.googleApiClientReady();
     this.tokenDetails='';
     this.getAuthToken();


  }
  googleApiClientReady() {
  var url=this.manageBucketListService.initAuthorize();
  this._$window.open(url);
    }

handleAuthResult(authResult){
  if (authResult && !authResult.error) {
    this.showPreAuth=true;
    loadAPIClientInterfaces();
  }
  else{
    this.authorizeDisabled=false;
  }
}
userAuthorize(){
  gapi.auth.authorize({
       client_id: this.OAUTH2_CLIENT_ID,
       scope: this.OAUTH2_SCOPES,
       immediate: false
     }, this.handleAuthResult);
}
loadAPIClientInterfaces(){
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}
handleAPILoaded(){
  console.log("Api loaded");
}
getAuthToken(){
  var token=this._$location.hash();
  var responseParameters = (token).split("&");
  var parameterMap = [];
            for(var i = 0; i < responseParameters.length; i++) {
                parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
            }
            if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                this.tokenDetails = {
                    oauth: {
                        access_token: parameterMap.access_token,
                        expires_in: parameterMap.expires_in,
                        account_username: parameterMap.account_username
                    }
                }
              this._$window.localStorage['tokenDetails']= JSON.stringify(this.tokenDetails);
                this._$window.location.href="http://localhost:3000/privatehome";
              }
              else {

            }
            var promise=this.manageBucketListService.verifyToken(JSON.parse(this._$window.localStorage.getItem("tokenDetails")).oauth.access_token)
            .then(data=>
              {
                if(data.error)
                {
                  alert("Problem authenticating");
                  var p=this.manageBucketListService.refreshToken(JSON.parse(this._$window.localStorage.getItem("tokenDetails")).oauth.access_token)
                  then(data=>
                    {
                        this.getData();
                    });
                }
                else{
                    this.getData();
                }
              });
}
getData(){
  var promise=this.manageBucketListService.getData(JSON.parse(this._$window.localStorage.getItem("tokenDetails")).oauth.access_token)
  .then(data=>
    {if(data.error)
      {
        this.$_window.alert("Problem authenticating");
      }
      else{
        this.playlist=data.items;
      }
    });

}

}

export default PrivatehomeController;
