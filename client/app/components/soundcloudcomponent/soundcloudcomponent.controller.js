class SoundcloudcomponentController {

  constructor(manageBucketListService,$sce) {
      "ngInject"
    this.name = 'soundcloudcomponent';
    this.tracks='';
    this.$sce=$sce;
    this.manageBucketListService=manageBucketListService;


  }

  searchTracks(){
    var promise=this.manageBucketListService.getTracks(this.searchParameter).then(response=>{

          this.trackList=response;
        });

  }



    play(trackuri)
  {
  var html='<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url='+trackuri+'"></iframe>'
this.player_html = this.$sce.trustAsHtml(html);

  }


}

export default SoundcloudcomponentController;
