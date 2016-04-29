import angular from 'angular';
import Home from './home/home';
import Partialhome from './partialhome/partialhome';


let componentModule = angular.module('app.components', [
  Home.name,
  Partialhome.name

]);

export default componentModule;
