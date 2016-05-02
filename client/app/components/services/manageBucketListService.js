export default class manageBucketListService{
  constructor($q){
      "ngInject";
      this._$q=$q;
    this.allcountries=["Australia","Belgium","China","Czech Republic","Denmark","Egypt","France",
    "Germany","Greece","Hungary","India","Italy","Japan","Kuwait","Libya","Malaysia","New Zealand",
    "Peru","South Africa","United States"]
  }
  getAllCountries(){
    // var deferred=_$q.defer();
    // deferred.resolve(this.allcountries);
    // return deferred.promise;
    return this.allcountries;
  }
}
