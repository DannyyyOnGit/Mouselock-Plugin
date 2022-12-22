//Converted with C2C3AddonConverter v1.0.0.15
"use strict";

{
	const PLUGIN_ID = "armaldio_mouse_lock";
	const PLUGIN_VERSION = "2.0.0.0";
	const PLUGIN_CATEGORY = "input";

	let app = null;

	const PLUGIN_CLASS = SDK.Plugins.armaldio_mouse_lock = class armaldio_mouse_lock extends SDK.IPluginBase
	{
		constructor()
		{
			super(PLUGIN_ID);
			SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());
			this._info.SetIcon("icon.png", "image/png");
			this._info.SetName(lang(".name"));
			this._info.SetDescription(lang(".description"));
			this._info.SetVersion(PLUGIN_VERSION);
			this._info.SetCategory(PLUGIN_CATEGORY);
			this._info.SetAuthor("Armaldio");
			this._info.SetHelpUrl(lang(".help-url"));
			this._info.SetIsSingleGlobal(true);
			this._info.SetIsDeprecated(false);
			this._info.SetSupportsEffects(false);
			this._info.SetMustPreDraw(false);
			this._info.SetCanBeBundled(false);
			SDK.Lang.PushContext(".properties");
			this._info.SetProperties([
				new SDK.PluginProperty("combo", "activate-on", {initialValue:"none", items:["none","any click","custom key"]}),
				new SDK.PluginProperty("integer", "custom-key", 32),
				new SDK.PluginProperty("combo", "bounding", {initialValue:"bound to window", items:["bound to window","bound to layout","unbounded"]}),
				new SDK.PluginProperty("combo", "auto-enable-on-out-of-focus", {initialValue:"true", items:["false","true"]}),
				new SDK.PluginProperty("combo", "invert-x", {initialValue:"false", items:["false","true"]}),
				new SDK.PluginProperty("combo", "invert-y", {initialValue:"false", items:["false","true"]}),
				new SDK.PluginProperty("float", "cursor-speed", 1)
			]);
			SDK.Lang.PopContext();		// .properties
			SDK.Lang.PopContext();
		}
	};
	PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
