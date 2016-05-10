class PartialhomeController {
  constructor(manageBucketListService) {
    "ngInject";
    this.name = 'partialhome';
    this.manageBucketListService=manageBucketListService;
  //  this.getAllCountries();
    this.playlist='';

    this.popup1 = {
      opened: false
    };

    this.popup2 = {
      opened: false
    };
    this.altInputFormats = ['M!/d!/yyyy'];
    this.parent = {dt:''};
    this.showWeather();

  }
  change(data){
    console.log(data);
  }
  getAllCountries(){
    this.countries=this.manageBucketListService.getAllCountries();
  }
  open1($event){
    $event.preventDefault();
           $event.stopPropagation();
    this.popup1.opened = !this.popup1.opened;
  }
  open2($event) {
    $event.preventDefault();
           $event.stopPropagation();
    this.popup2.opened = !this.popup2.opened;
  };
  destinationPicked(){
    var data={
      country:this.selectedCountry,
      startDate:this.dt,
      endDate:this.dt2,
      notes:this.tripNotes
    }
    this.manageBucketListService.saveTripInfo(data);
  }
  showWeather(){
    var promise=this.manageBucketListService.getData('92780')
    .then(data=>{this.playlist=data;console.log(data);});
  }


}

export default PartialhomeController;
