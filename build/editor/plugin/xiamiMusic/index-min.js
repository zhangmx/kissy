/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 19 16:41
*/
KISSY.add("editor/plugin/xiamiMusic/index",function(c,k,l,j){function i(){i.superclass.constructor.apply(this,arguments)}function h(b){this.config=b||{}}c.extend(i,l,{_updateTip:function(b,g){var e=this.get("editor").restoreRealElement(g);e&&(b.html(g.attr("title")),b.attr("href",this._getFlashUrl(e)))}});c.augment(h,{renderUI:function(b){function g(a){return/xiami\.com/i.test(a)}var e=b.htmlDataProcessor,c=e&&e.dataFilter;c&&c.addRules({tags:{object:function(a){var b=a.getAttribute("title"),d,f;
d=a.getAttribute("classid");var c=a.childNodes;if(!d){for(d=0;d<c.length;d++)if(f=c[d],"embed"==f.nodeName){if(!j.isFlashEmbed(f))break;if(g(f.attributes.src))return e.createFakeParserElement(a,"ke_xiami","xiamiMusic",!0,{title:b})}return null}for(d=0;d<c.length;d++)if(f=c[d],"param"==f.nodeName&&"movie"==f.getAttribute("name")&&g(f.getAttribute("value")))return e.createFakeParserElement(a,"ke_xiami","xiamiMusic",!0,{title:b})},embed:function(a){if(j.isFlashEmbed(a)&&g(a.getAttribute("src")))return e.createFakeParserElement(a,
"ke_xiami","xiamiMusic",!0,{title:a.getAttribute("title")})}}},4);var h=new i({editor:b,cls:"ke_xiami",type:"xiamiMusic",bubbleId:"xiami",pluginConfig:this.config,contextMenuId:"xiami",contextMenuHandlers:{"虾米属性":function(){var a=this.get("editorSelectedEl");a&&h.show(a)}}});b.addButton("xiamiMusic",{tooltip:"插入虾米音乐",listeners:{click:function(){h.show()}},mode:k.WYSIWYG_MODE})}});return h},{requires:["editor","../flashCommon/baseClass","../flashCommon/utils"]});
