import angular from 'angular';
import Home from './home/home';
import Partialhome from './partialhome/partialhome';
import services from './services/services';



let componentModule = angular.module('app.components', [
  Home.name,
  Partialhome.name,
  services.name


]);

export default componentModule;
