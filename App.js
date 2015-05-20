Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	
	launch:function()
	{
		console.log("our first app");
		this._loadData();
	},

	_loadData:function()
	{
		var myStore=Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			autoLoad: true,
			listeners: {
				load: function(myStore, myData, success) {
            //process data
					console.log("got data",myStore,myData,success);

					this._loadGrid(myStore);
					},
					scope:this
			},
			fetch: ['FormattedID','Name', 'ScheduleState']
		});

	},

	_loadGrid:function(myStore)
	{

		var myGrid=Ext.create('Rally.ui.grid.Grid',{
							store:myStore,
							columnCfgs:[
							'FormattedID','Name','ScheduleState'
							]					
						});
					console.log("my grid",myGrid);
					
					this.add(myGrid);
					
	}
	

});
