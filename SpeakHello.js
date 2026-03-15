(function (global) {

  var SpeakHello = function () {
    return new SpeakHello.init();
  };

  SpeakHello.prototype = {
    sayHello: function (name) {
      console.log("Hello " + name);
    }
  };

  SpeakHello.init = function () {};
  SpeakHello.init.prototype = SpeakHello.prototype;

  global.$hello = SpeakHello;

}(window));
