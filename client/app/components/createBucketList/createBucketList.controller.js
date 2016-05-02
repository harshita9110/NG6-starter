class CreateBucketListController {
  constructor(manageBucketListService) {
    this.name = 'createBucketList';
    this.manageBucketListService=manageBucketListService;
  }
  getCountriesList=function(){
    var promise=this.manageBucketListService.then(
      (data) => {
      this.allCountries=data;
      }
    )
  }
}

export default CreateBucketListController;
