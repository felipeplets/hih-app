/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Core'],function(q,C){"use strict";var P={};var p=null;var t=null;function r(){p=null}function l(){var u=q(this).css("background-image");var a=/\(["']data:text\/plain;utf-8,(.*)["']\)$/i.exec(u);if(a&&a.length>=2){var s=a[1];if(s.charAt(0)!=="{"&&s.charAt(s.length-1)!=="}"){try{s=decodeURI(s)}catch(e){q.sap.log.warning("Could not decode theme parameters URI from library.css.")}}try{var o=q.parseJSON(s);q.extend(p,o);return}catch(e){q.sap.log.warning("Could not parse theme parameters from library.css. Loading library-parameters.json as fallback solution.")}}var u=this.href,R,b;u=u.replace(/\/library([^\/.]*)\.(?:css|less)($|[?#])/,function($,c,d){return"/library-parameters.json"+(d?d:"")});R=q.sap.sjax({url:u,dataType:'json'});if(R.success){b=(typeof R.data=="string")?q.parseJSON(R.data):R.data;if(q.isArray(b)){for(var j=0;j<b.length;j++){q.extend(p,b[j])}}else{q.extend(p,b)}}else{q.sap.log.warning("Could not load theme parameters from: "+u)}}function g(){if(!p){p={};t=sap.ui.getCore().getConfiguration().getTheme();q("link[id^=sap-ui-theme-]").each(l)}return p}P._addLibraryTheme=function(L){if(p){var o=q.sap.domById("sap-ui-theme-"+L);l.apply(o)}};P.get=function(n){if(arguments.length==1){var s=g()[n];if(typeof s==="undefined"&&typeof n==="string"){var i=n.indexOf(":");if(i!==-1){n=n.substr(i+1)}s=g()[n]}return s}else if(arguments.length==0){return q.extend({},g())}else{return undefined}};P._setOrLoadParameters=function(L){p={};t=sap.ui.getCore().getConfiguration().getTheme();q("link[id^=sap-ui-theme-]").each(function(){var $=q(this);var s=$.attr("id").substr(13);if(L[s]){q.extend(p,L[s])}else{l.apply(this)}})};P.reset=function(){var o=arguments[0]===true;if(!o||sap.ui.getCore().getConfiguration().getTheme()!==t){r()}};P._getThemeImage=function(s,f){s=s||"sapUiGlobalLogo";var a=sap.ui.core.theming.Parameters.get(s);if(a){var m=/url[\s]*\('?"?([^\'")]*)'?"?\)/.exec(a);if(m){a=m[1]}else if(a==="''"||a==="none"){a=null}}if(!!f&&!a){return sap.ui.resource('sap.ui.core','themes/base/img/1x1.gif')}return a};return P},true);
