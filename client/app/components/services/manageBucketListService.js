export default class manageBucketListService{
  constructor($q,$http){
      "ngInject";
      this._$q=$q;
      this._$http=$http;
    this.allcountries=["Australia","Belgium","China","Czech Republic","Denmark","Egypt","France",
    "Germany","Greece","Hungary","India","Italy","Japan","Kuwait","Libya","Malaysia","New Zealand",
    "Peru","South Africa","United States"];
    this.OAUTH2_CLIENT_ID='303834639003-k4n3umte7q3eumlndn6qrredd5dg1ma4.apps.googleusercontent.com';
    this.OAUTH2_SCOPES=[
      'https://www.googleapis.com/auth/youtube'
    ];
    this.response_type='token';
    this.redirect_uri="http://localhost:3000/privatehome";
    this.accesstoken='EAACEdEose0cBALus25wLIiLPkEF1rxuAAMur8tiHZCkQ3okYCzZCI9HcOyZAJWPKxHSAHWZAHNW1HBYVoSFQJsE9ZCx7f7tssTvERgboeenz7ropLpYChZA9MKQZCmEJyrsgEjdwZBpfUjFLyf9tOX4C5opYzFX3NC5rYPgDFB2zJwZDZD';

  }
  getAllCountries(){
    return this.allcountries;
  }
  callback(){
    console.log("success");
  }
  saveTripInfo(data){
  console.log(data);

  }
  getData(zip){
    var deferred=this._$q.defer();
    this._$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=soccer&type=playlist&key=AIzaSyCJ3Q7-BymhUoqggh1T_s2CejqVlIzhNCs')
    .success(data => deferred.resolve(data.items))
        .error(err => deferred.reject(err));
     return deferred.promise;
  }
  initAuthorize(){
    var deferred=this._$q.defer();
    var url="https://accounts.google.com/o/oauth2/auth?client_id="+
    this.OAUTH2_CLIENT_ID+"&redirect_uri="+this.redirect_uri+"&scope="+this.OAUTH2_SCOPES+"&response_type=token";
    return url;
  }
  verifyToken(token){
    var deferred=this._$q.defer();
    this._$http.get('https://www.googleapis.com/oauth2/v1/tokeninfo?access_token='+token)
    .success(data => deferred.resolve(data))
        .error(err => deferred.reject(err));
     return deferred.promise;
  }
  getData(token){
    var deferred=this._$q.defer();
    this._$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=soccer&type=playlist&access_token='+token)
    .success(data => deferred.resolve(data))
        .error(err => deferred.reject(err));
     return deferred.promise;
  }
  refreshToken(token){
    var deferred=this._$q.defer();
  this._$http.post('https://accounts.google.com/o/oauth2/auth??client_id='+
  this.OAUTH2_CLIENT_ID+'&client_secret=jlc4x5lWejdoKO8OvfQ_Rc4B&refresh_token='+token+'&grant_type=refresh_token')
  .success(data => deferred.resolve(data))
      .error(err => deferred.reject(err));
   return deferred.promise;
  }
  getPhotos(token){
    var deferred=this._$q.defer();
    this._$http.get('https://graph.facebook.com/me/photos?access_token='+token)
    .success(data => deferred.resolve(data))
        .error(err => deferred.reject(err));
     return deferred.promise;
  }
  getPhotosFBApi(){
        var deferred=this._$q.defer();
    FB.api('/me', {
                fields: 'last_name,picture'
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
  }
  getPhotosListFBApi(token){
    // var deferred=this._$q.defer();
    //   var url='https://graph.facebook.com/972676859422994/photos?access_token=' + token;
    //   this._$http.get(url)
    //   .success(data => deferred.resolve(data))
    //       .error(err => deferred.reject(err));
    //    return deferred.promise;
    var deferred=this._$q.defer();
FB.api('/me/photos', {
            fields: 'picture,place'
        }, function(response) {
            if (!response || response.error) {
                deferred.reject('Error occured');
            } else {
                deferred.resolve(response);
            }
        });
        return deferred.promise;
  }
  getLoginStatus(){
    var deferred=this._$q.defer();
    FB.getLoginStatus(function(response) {
      deferred.resolve(response);
    }
  );
  return deferred.promise;
  }
  getLogin(){
    var deferred=this._$q.defer();
    // initiate auth popup
    SC.connect().then(function() {
      return SC.get('/me');
    }).then(function(me) {
      deferred.resolve(response);
    });
    return deferred.promise;
  }
  getTracks(keyword){
      var deferred=this._$q.defer();
      SC.get('/tracks', {
    q: keyword
    }).then(function(tracks) {
  deferred.resolve(tracks);
    });
  return deferred.promise;
  }

}
