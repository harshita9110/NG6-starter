class PartialhomeController {
  constructor(manageBucketListService) {
    "ngInject";
    this.name = 'partialhome';
    this.manageBucketListService=manageBucketListService;
    this.getAllCountries();
    this.inlineOptions = {

      minDate: new Date(),
      showWeeks: true
    };

    this.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
    this.popup1 = {
      opened: false
    };

    this.popup2 = {
      opened: false
    };
    this.altInputFormats = ['M!/d!/yyyy'];


  }
  getAllCountries(){
    this.countries=this.manageBucketListService.getAllCountries();
  }
  open1(){
    this.popup1.opened = true;
  }
  open2() {
    this.popup2.opened = true;
  };
  setDate(year, month, day) {
    this.dt = new Date(year, month, day);
    this.dt2=new Date(year, month, day);
  };
  


}

export default PartialhomeController;
