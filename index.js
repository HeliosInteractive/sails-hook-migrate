'use strict';

const DBMigrate = require('db-migrate');

module.exports = function(sails) {

  var adapters = [
    {driver: 'sqlite3', regex: /sqlite/i},
    {driver: 'mysql', regex: /mysql/i},
    {driver: 'pg', regex: /postgre|pg/i},
    {driver: 'mongodb', regex: /mongo/i},
  ]

  return {
    defaults: {
      __configKey__:{
        _hookTimeout: 30000 // 30 seconds to migrate
      }
    },
    configure: function(){

    },
    initialize: function(done){

      var connection;
      try{
        connection = sails.config.connections[sails.config.models.connection];
      }catch(e){}

      if( !connection || !connection.adapter){
        sails.log.warn('Connection not supported or missing adapter');
        return done();
      }

      let driver = adapters.filter(adapter => adapter.regex.test(connection.adapter))
        .reduce((o, n) => n.driver || o, false);

      if( !driver ){
        sails.log.warn('adapter %s not supported for sails-hook-migrate', connection.adapter);
        return done();
      }

      var migrate = DBMigrate.getInstance(true, {
          config: {
            [process.env.NODE_ENV]: Object.assign({
              driver: driver,
            }, connection)
          }
        });

      migrate.up(function(){
        //console.log('done', arguments.length);
        //console.log('arguments', Array.prototype.slice.call(arguments))
        return done();
      });


    }
  };
}
