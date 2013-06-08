

Ext.define('App.view.Main', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.main',

	initComponent : function(config) {
		var me = this;
		var cfg = config || {};
		Ext.apply(me, cfg);
		me.callParent([cfg]);
	},

	addItems : function(items) {
		var me = this;
		var items = Ext.Array.from(items);
		this.add(items);
		this.flush();
	},

	addButtons : function(buttons) {
		var me = this;
		var buttons = Ext.Array.from(buttons);
		var toolbar = {
			xtype : 'toolbar',
			dock : 'bottom',
			ui : 'footer',
			layout : {
				pack : me.buttonAlign || 'end'
			},
			minWidth : me.minButtonWidth,
			items : buttons
		}
		this.addDocked(toolbar);
		this.flush();
	},

	addTools : function(tools) {
		var me = this;
		var tools = Ext.Array.from(tools);
		me.addTool(tools);
		this.flush();
	},

	flush : function() {
		var me = this;
		me.doLayout();
	}

});

