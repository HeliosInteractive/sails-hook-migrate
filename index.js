module.exports = function(sails) {
  return {
    defaults: {
      __configKey__:{
        _hookTimeout: 30000 // 30 seconds to migrate
      }
    },
    configure: function(){

    },
    initialize: function(done){

      return done();
    }
  };
}
