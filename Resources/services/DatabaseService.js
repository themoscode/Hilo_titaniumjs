App.Services.Database = {

    execute: function () {

        // App.Log.debug('App.Services.Database.execute > ', arguments);

        return Function.prototype.apply.call(db.execute, db, arguments);

    }

};