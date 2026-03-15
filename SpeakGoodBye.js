(function (global) {

  var SpeakGoodBye = function () {
    return new SpeakGoodBye.init();
  };

  SpeakGoodBye.prototype = {
    sayGoodBye: function (name) {
      console.log("Goodbye " + name);
    }
  };

  SpeakGoodBye.init = function () {};
  SpeakGoodBye.init.prototype = SpeakGoodBye.prototype;

  global.$goodbye = SpeakGoodBye;

}(window));
