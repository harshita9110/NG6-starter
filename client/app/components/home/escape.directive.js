export default function(){
  const ESCAPE_KEY = 27;
  return function(scope,elem,args){
    elem.bind('keydown', function (event) {
      if (event.keyCode === ESCAPE_KEY) {
        scope.$apply(args.onEscape);
      }
    });

    scope.$on('$destroy', function () {
      elem.unbind('keydown');

    });
  }
}
