// Compiled by ClojureScript 0.0-2311
goog.provide('ga2.bootstrap');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
goog.require('ga2.core');
goog.require('ga2.core');
cljs.core.enable_console_print_BANG_.call(null);
ga2.bootstrap.app = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
var ufv___10774 = schema.utils.use_fn_validation;var output_schema10762_10775 = schema.core.Any;var input_schema10763_10776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10764_10777 = schema.core.checker.call(null,input_schema10763_10776);var output_checker10765_10778 = schema.core.checker.call(null,output_schema10762_10775);/**
* Inputs: [app owner]
*/
ga2.bootstrap.view_port = ((function (ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778){
return (function view_port(G__10766,G__10767){var validate__7745__auto__ = ufv___10774.get_cell();if(cljs.core.truth_(validate__7745__auto__))
{var args__7746__auto___10779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10766,G__10767], null);var temp__4126__auto___10780 = input_checker10764_10777.call(null,args__7746__auto___10779);if(cljs.core.truth_(temp__4126__auto___10780))
{var error__7747__auto___10781 = temp__4126__auto___10780;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"view-port","view-port",503486764,null),cljs.core.pr_str.call(null,error__7747__auto___10781)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10763_10776,new cljs.core.Keyword(null,"value","value",305978217),args__7746__auto___10779,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___10781], null));
} else
{}
} else
{}
var o__7748__auto__ = (function (){var app = G__10766;var owner = G__10767;while(true){
if(typeof ga2.bootstrap.t10771 !== 'undefined')
{} else
{
/**
* @constructor
*/
ga2.bootstrap.t10771 = (function (G__10767,owner,output_checker10765,view_port,validate__7745__auto__,input_checker10764,G__10766,output_schema10762,app,ufv__,input_schema10763,meta10772){
this.G__10767 = G__10767;
this.owner = owner;
this.output_checker10765 = output_checker10765;
this.view_port = view_port;
this.validate__7745__auto__ = validate__7745__auto__;
this.input_checker10764 = input_checker10764;
this.G__10766 = G__10766;
this.output_schema10762 = output_schema10762;
this.app = app;
this.ufv__ = ufv__;
this.input_schema10763 = input_schema10763;
this.meta10772 = meta10772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ga2.bootstrap.t10771.cljs$lang$type = true;
ga2.bootstrap.t10771.cljs$lang$ctorStr = "ga2.bootstrap/t10771";
ga2.bootstrap.t10771.cljs$lang$ctorPrWriter = ((function (validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"ga2.bootstrap/t10771");
});})(validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778))
;
ga2.bootstrap.t10771.prototype.om$core$IDisplayName$ = true;
ga2.bootstrap.t10771.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778){
return (function (_){var self__ = this;
var ___$1 = this;return "view-port";
});})(validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778))
;
ga2.bootstrap.t10771.prototype.om$core$IRender$ = true;
ga2.bootstrap.t10771.prototype.om$core$IRender$render$arity$1 = ((function (validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "app"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "topbar"})],null))));
});})(validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778))
;
ga2.bootstrap.t10771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778){
return (function (_10773){var self__ = this;
var _10773__$1 = this;return self__.meta10772;
});})(validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778))
;
ga2.bootstrap.t10771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778){
return (function (_10773,meta10772__$1){var self__ = this;
var _10773__$1 = this;return (new ga2.bootstrap.t10771(self__.G__10767,self__.owner,self__.output_checker10765,self__.view_port,self__.validate__7745__auto__,self__.input_checker10764,self__.G__10766,self__.output_schema10762,self__.app,self__.ufv__,self__.input_schema10763,meta10772__$1));
});})(validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778))
;
ga2.bootstrap.__GT_t10771 = ((function (validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778){
return (function __GT_t10771(G__10767__$1,owner__$1,output_checker10765__$1,view_port__$1,validate__7745__auto____$1,input_checker10764__$1,G__10766__$1,output_schema10762__$1,app__$1,ufv____$1,input_schema10763__$1,meta10772){return (new ga2.bootstrap.t10771(G__10767__$1,owner__$1,output_checker10765__$1,view_port__$1,validate__7745__auto____$1,input_checker10764__$1,G__10766__$1,output_schema10762__$1,app__$1,ufv____$1,input_schema10763__$1,meta10772));
});})(validate__7745__auto__,ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778))
;
}
return (new ga2.bootstrap.t10771(G__10767,owner,output_checker10765_10778,view_port,validate__7745__auto__,input_checker10764_10777,G__10766,output_schema10762_10775,app,ufv___10774,input_schema10763_10776,null));
break;
}
})();if(cljs.core.truth_(validate__7745__auto__))
{var temp__4126__auto___10782 = output_checker10765_10778.call(null,o__7748__auto__);if(cljs.core.truth_(temp__4126__auto___10782))
{var error__7747__auto___10783 = temp__4126__auto___10782;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"view-port","view-port",503486764,null),cljs.core.pr_str.call(null,error__7747__auto___10783)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10762_10775,new cljs.core.Keyword(null,"value","value",305978217),o__7748__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___10783], null));
} else
{}
} else
{}
return o__7748__auto__;
});})(ufv___10774,output_schema10762_10775,input_schema10763_10776,input_checker10764_10777,output_checker10765_10778))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,ga2.bootstrap.view_port),schema.core.make_fn_schema.call(null,output_schema10762_10775,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10763_10776], null)));
ga2.bootstrap.__GT_view_port = (function() {
var __GT_view_port = null;
var __GT_view_port__1 = (function (cursor__9522__auto__){return om.core.build.call(null,ga2.bootstrap.view_port,cursor__9522__auto__);
});
var __GT_view_port__2 = (function (cursor__9522__auto__,m10761){return om.core.build.call(null,ga2.bootstrap.view_port,cursor__9522__auto__,m10761);
});
__GT_view_port = function(cursor__9522__auto__,m10761){
switch(arguments.length){
case 1:
return __GT_view_port__1.call(this,cursor__9522__auto__);
case 2:
return __GT_view_port__2.call(this,cursor__9522__auto__,m10761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_view_port.cljs$core$IFn$_invoke$arity$1 = __GT_view_port__1;
__GT_view_port.cljs$core$IFn$_invoke$arity$2 = __GT_view_port__2;
return __GT_view_port;
})()
;
om.core.root.call(null,ga2.bootstrap.view_port,ga2.bootstrap.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app-container")], null));

//# sourceMappingURL=bootstrap.js.map