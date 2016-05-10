import angular from 'angular';
import Home from './home/home';
import Partialhome from './partialhome/partialhome';
import Privatehome from './privatehome/privatehome';
import Facebookcomponent from './facebookcomponent/facebookcomponent';
import Soundcloudcomponent from './soundcloudcomponent/soundcloudcomponent';
import services from './services/services';



let componentModule = angular.module('app.components', [
  Home.name,
  Partialhome.name,
  Privatehome.name,
  Facebookcomponent.name,
  Soundcloudcomponent.name,
  services.name


]);

export default componentModule;
