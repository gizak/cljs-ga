// Compiled by ClojureScript 0.0-2311
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__7775__7776__auto__){var G__10933 = p1__7775__7776__auto__;if(G__10933)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__10933.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__10933.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10933);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10933);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__10934_SHARP_){return (cljs.core.val.call(null,p1__10934_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__10936 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__10936,(0),null);var v = cljs.core.nth.call(null,vec__10936,(1),null);var p = vec__10936;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___10942 = schema.utils.use_fn_validation;var output_schema10937_10943 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema10938_10944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker10939_10945 = schema.core.checker.call(null,input_schema10938_10944);var output_checker10940_10946 = schema.core.checker.call(null,output_schema10937_10943);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___10942,output_schema10937_10943,input_schema10938_10944,input_checker10939_10945,output_checker10940_10946){
return (function unwrap_schema_form_key(G__10941){var validate__7745__auto__ = ufv___10942.get_cell();if(cljs.core.truth_(validate__7745__auto__))
{var args__7746__auto___10947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10941], null);var temp__4126__auto___10948 = input_checker10939_10945.call(null,args__7746__auto___10947);if(cljs.core.truth_(temp__4126__auto___10948))
{var error__7747__auto___10949 = temp__4126__auto___10948;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7747__auto___10949)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10938_10944,new cljs.core.Keyword(null,"value","value",305978217),args__7746__auto___10947,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___10949], null));
} else
{}
} else
{}
var o__7748__auto__ = (function (){var k = G__10941;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__7745__auto__))
{var temp__4126__auto___10950 = output_checker10940_10946.call(null,o__7748__auto__);if(cljs.core.truth_(temp__4126__auto___10950))
{var error__7747__auto___10951 = temp__4126__auto___10950;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7747__auto___10951)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10937_10943,new cljs.core.Keyword(null,"value","value",305978217),o__7748__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___10951], null));
} else
{}
} else
{}
return o__7748__auto__;
});})(ufv___10942,output_schema10937_10943,input_schema10938_10944,input_checker10939_10945,output_checker10940_10946))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema10937_10943,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10938_10944], null)));
var ufv___10957 = schema.utils.use_fn_validation;var output_schema10952_10958 = schema.core.Any;var input_schema10953_10959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker10954_10960 = schema.core.checker.call(null,input_schema10953_10959);var output_checker10955_10961 = schema.core.checker.call(null,output_schema10952_10958);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___10957,output_schema10952_10958,input_schema10953_10959,input_checker10954_10960,output_checker10955_10961){
return (function explicit_schema_key_map(G__10956){var validate__7745__auto__ = ufv___10957.get_cell();if(cljs.core.truth_(validate__7745__auto__))
{var args__7746__auto___10962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10956], null);var temp__4126__auto___10963 = input_checker10954_10960.call(null,args__7746__auto___10962);if(cljs.core.truth_(temp__4126__auto___10963))
{var error__7747__auto___10964 = temp__4126__auto___10963;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7747__auto___10964)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10953_10959,new cljs.core.Keyword(null,"value","value",305978217),args__7746__auto___10962,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___10964], null));
} else
{}
} else
{}
var o__7748__auto__ = (function (){var s = G__10956;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__7745__auto__))
{var temp__4126__auto___10965 = output_checker10955_10961.call(null,o__7748__auto__);if(cljs.core.truth_(temp__4126__auto___10965))
{var error__7747__auto___10966 = temp__4126__auto___10965;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7747__auto___10966)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10952_10958,new cljs.core.Keyword(null,"value","value",305978217),o__7748__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___10966], null));
} else
{}
} else
{}
return o__7748__auto__;
});})(ufv___10957,output_schema10952_10958,input_schema10953_10959,input_checker10954_10960,output_checker10955_10961))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema10952_10958,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10953_10959], null)));
var ufv___10972 = schema.utils.use_fn_validation;var output_schema10967_10973 = schema.core.Any;var input_schema10968_10974 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker10969_10975 = schema.core.checker.call(null,input_schema10968_10974);var output_checker10970_10976 = schema.core.checker.call(null,output_schema10967_10973);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___10972,output_schema10967_10973,input_schema10968_10974,input_checker10969_10975,output_checker10970_10976){
return (function split_schema_keys(G__10971){var validate__7745__auto__ = ufv___10972.get_cell();if(cljs.core.truth_(validate__7745__auto__))
{var args__7746__auto___10977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10971], null);var temp__4126__auto___10978 = input_checker10969_10975.call(null,args__7746__auto___10977);if(cljs.core.truth_(temp__4126__auto___10978))
{var error__7747__auto___10979 = temp__4126__auto___10978;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7747__auto___10979)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10968_10974,new cljs.core.Keyword(null,"value","value",305978217),args__7746__auto___10977,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___10979], null));
} else
{}
} else
{}
var o__7748__auto__ = (function (){var s = G__10971;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__7745__auto__))
{var temp__4126__auto___10980 = output_checker10970_10976.call(null,o__7748__auto__);if(cljs.core.truth_(temp__4126__auto___10980))
{var error__7747__auto___10981 = temp__4126__auto___10980;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7747__auto___10981)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10967_10973,new cljs.core.Keyword(null,"value","value",305978217),o__7748__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___10981], null));
} else
{}
} else
{}
return o__7748__auto__;
});})(ufv___10972,output_schema10967_10973,input_schema10968_10974,input_checker10969_10975,output_checker10970_10976))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema10967_10973,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10968_10974], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__10985){var vec__10986 = p__10985;var k = cljs.core.nth.call(null,vec__10986,(0),null);var v = cljs.core.nth.call(null,vec__10986,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__10987 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__10987,(0),null);var ov = cljs.core.nth.call(null,vec__10987,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__10988){
var key_project = cljs.core.first(arglist__10988);
arglist__10988 = cljs.core.next(arglist__10988);
var key_combine = cljs.core.first(arglist__10988);
arglist__10988 = cljs.core.next(arglist__10988);
var val_combine = cljs.core.first(arglist__10988);
var maps = cljs.core.rest(arglist__10988);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___10996 = schema.utils.use_fn_validation;var output_schema10990_10997 = plumbing.fnk.schema.InputSchema;var input_schema10991_10998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker10992_10999 = schema.core.checker.call(null,input_schema10991_10998);var output_checker10993_11000 = schema.core.checker.call(null,output_schema10990_10997);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___10996,output_schema10990_10997,input_schema10991_10998,input_checker10992_10999,output_checker10993_11000){
return (function union_input_schemata(G__10994,G__10995){var validate__7745__auto__ = ufv___10996.get_cell();if(cljs.core.truth_(validate__7745__auto__))
{var args__7746__auto___11001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10994,G__10995], null);var temp__4126__auto___11002 = input_checker10992_10999.call(null,args__7746__auto___11001);if(cljs.core.truth_(temp__4126__auto___11002))
{var error__7747__auto___11003 = temp__4126__auto___11002;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7747__auto___11003)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10991_10998,new cljs.core.Keyword(null,"value","value",305978217),args__7746__auto___11001,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11003], null));
} else
{}
} else
{}
var o__7748__auto__ = (function (){var i1 = G__10994;var i2 = G__10995;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__7745__auto__,ufv___10996,output_schema10990_10997,input_schema10991_10998,input_checker10992_10999,output_checker10993_11000){
return (function (p1__10989_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__10989_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__10989_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__7745__auto__,ufv___10996,output_schema10990_10997,input_schema10991_10998,input_checker10992_10999,output_checker10993_11000))
,((function (validate__7745__auto__,ufv___10996,output_schema10990_10997,input_schema10991_10998,input_checker10992_10999,output_checker10993_11000){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__7745__auto__,ufv___10996,output_schema10990_10997,input_schema10991_10998,input_checker10992_10999,output_checker10993_11000))
,((function (validate__7745__auto__,ufv___10996,output_schema10990_10997,input_schema10991_10998,input_checker10992_10999,output_checker10993_11000){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__7745__auto__,ufv___10996,output_schema10990_10997,input_schema10991_10998,input_checker10992_10999,output_checker10993_11000))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__7745__auto__))
{var temp__4126__auto___11004 = output_checker10993_11000.call(null,o__7748__auto__);if(cljs.core.truth_(temp__4126__auto___11004))
{var error__7747__auto___11005 = temp__4126__auto___11004;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7747__auto___11005)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10990_10997,new cljs.core.Keyword(null,"value","value",305978217),o__7748__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11005], null));
} else
{}
} else
{}
return o__7748__auto__;
});})(ufv___10996,output_schema10990_10997,input_schema10991_10998,input_checker10992_10999,output_checker10993_11000))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema10990_10997,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10991_10998], null)));
var ufv___11011 = schema.utils.use_fn_validation;var output_schema11006_11012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema11007_11013 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker11008_11014 = schema.core.checker.call(null,input_schema11007_11013);var output_checker11009_11015 = schema.core.checker.call(null,output_schema11006_11012);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___11011,output_schema11006_11012,input_schema11007_11013,input_checker11008_11014,output_checker11009_11015){
return (function required_toplevel_keys(G__11010){var validate__7745__auto__ = ufv___11011.get_cell();if(cljs.core.truth_(validate__7745__auto__))
{var args__7746__auto___11016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11010], null);var temp__4126__auto___11017 = input_checker11008_11014.call(null,args__7746__auto___11016);if(cljs.core.truth_(temp__4126__auto___11017))
{var error__7747__auto___11018 = temp__4126__auto___11017;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7747__auto___11018)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11007_11013,new cljs.core.Keyword(null,"value","value",305978217),args__7746__auto___11016,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11018], null));
} else
{}
} else
{}
var o__7748__auto__ = (function (){var input_schema = G__11010;while(true){
return cljs.core.keep.call(null,((function (validate__7745__auto__,ufv___11011,output_schema11006_11012,input_schema11007_11013,input_checker11008_11014,output_checker11009_11015){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__7745__auto__,ufv___11011,output_schema11006_11012,input_schema11007_11013,input_checker11008_11014,output_checker11009_11015))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__7745__auto__))
{var temp__4126__auto___11019 = output_checker11009_11015.call(null,o__7748__auto__);if(cljs.core.truth_(temp__4126__auto___11019))
{var error__7747__auto___11020 = temp__4126__auto___11019;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7747__auto___11020)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11006_11012,new cljs.core.Keyword(null,"value","value",305978217),o__7748__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11020], null));
} else
{}
} else
{}
return o__7748__auto__;
});})(ufv___11011,output_schema11006_11012,input_schema11007_11013,input_checker11008_11014,output_checker11009_11015))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema11006_11012,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11007_11013], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4278__auto__ = (function iter__11029(s__11030){return (new cljs.core.LazySeq(null,(function (){var s__11030__$1 = s__11030;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11030__$1);if(temp__4126__auto__)
{var s__11030__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11030__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__11030__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__11032 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__11031 = (0);while(true){
if((i__11031 < size__4277__auto__))
{var vec__11035 = cljs.core._nth.call(null,c__4276__auto__,i__11031);var k = cljs.core.nth.call(null,vec__11035,(0),null);var v = cljs.core.nth.call(null,vec__11035,(1),null);cljs.core.chunk_append.call(null,b__11032,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__11037 = (i__11031 + (1));
i__11031 = G__11037;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11032),iter__11029.call(null,cljs.core.chunk_rest.call(null,s__11030__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11032),null);
}
} else
{var vec__11036 = cljs.core.first.call(null,s__11030__$2);var k = cljs.core.nth.call(null,vec__11036,(0),null);var v = cljs.core.nth.call(null,vec__11036,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__11029.call(null,cljs.core.rest.call(null,s__11030__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4278__auto__ = (function iter__11046(s__11047){return (new cljs.core.LazySeq(null,(function (){var s__11047__$1 = s__11047;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11047__$1);if(temp__4126__auto__)
{var s__11047__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11047__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__11047__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__11049 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__11048 = (0);while(true){
if((i__11048 < size__4277__auto__))
{var vec__11052 = cljs.core._nth.call(null,c__4276__auto__,i__11048);var k = cljs.core.nth.call(null,vec__11052,(0),null);var v = cljs.core.nth.call(null,vec__11052,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__11049,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__11054 = (i__11048 + (1));
i__11048 = G__11054;
continue;
}
} else
{{
var G__11055 = (i__11048 + (1));
i__11048 = G__11055;
continue;
}
}
} else
{{
var G__11056 = (i__11048 + (1));
i__11048 = G__11056;
continue;
}
}
} else
{{
var G__11057 = (i__11048 + (1));
i__11048 = G__11057;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11049),iter__11046.call(null,cljs.core.chunk_rest.call(null,s__11047__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11049),null);
}
} else
{var vec__11053 = cljs.core.first.call(null,s__11047__$2);var k = cljs.core.nth.call(null,vec__11053,(0),null);var v = cljs.core.nth.call(null,vec__11053,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__11046.call(null,cljs.core.rest.call(null,s__11047__$2)));
} else
{{
var G__11058 = cljs.core.rest.call(null,s__11047__$2);
s__11047__$1 = G__11058;
continue;
}
}
} else
{{
var G__11059 = cljs.core.rest.call(null,s__11047__$2);
s__11047__$1 = G__11059;
continue;
}
}
} else
{{
var G__11060 = cljs.core.rest.call(null,s__11047__$2);
s__11047__$1 = G__11060;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___11083 = schema.utils.use_fn_validation;var output_schema11061_11084 = schema.core.Any;var input_schema11062_11085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker11063_11086 = schema.core.checker.call(null,input_schema11062_11085);var output_checker11064_11087 = schema.core.checker.call(null,output_schema11061_11084);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___11083,output_schema11061_11084,input_schema11062_11085,input_checker11063_11086,output_checker11064_11087){
return (function compose_schemata(G__11065,G__11066){var validate__7745__auto__ = true;if(validate__7745__auto__)
{var args__7746__auto___11088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11065,G__11066], null);var temp__4126__auto___11089 = input_checker11063_11086.call(null,args__7746__auto___11088);if(cljs.core.truth_(temp__4126__auto___11089))
{var error__7747__auto___11090 = temp__4126__auto___11089;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7747__auto___11090)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11062_11085,new cljs.core.Keyword(null,"value","value",305978217),args__7746__auto___11088,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11090], null));
} else
{}
} else
{}
var o__7748__auto__ = (function (){var G__11077 = G__11065;var vec__11079 = G__11077;var i2 = cljs.core.nth.call(null,vec__11079,(0),null);var o2 = cljs.core.nth.call(null,vec__11079,(1),null);var G__11078 = G__11066;var vec__11080 = G__11078;var i1 = cljs.core.nth.call(null,vec__11080,(0),null);var o1 = cljs.core.nth.call(null,vec__11080,(1),null);var G__11077__$1 = G__11077;var G__11078__$1 = G__11078;while(true){
var vec__11081 = G__11077__$1;var i2__$1 = cljs.core.nth.call(null,vec__11081,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__11081,(1),null);var vec__11082 = G__11078__$1;var i1__$1 = cljs.core.nth.call(null,vec__11082,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__11082,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__7745__auto__)
{var temp__4126__auto___11091 = output_checker11064_11087.call(null,o__7748__auto__);if(cljs.core.truth_(temp__4126__auto___11091))
{var error__7747__auto___11092 = temp__4126__auto___11091;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7747__auto___11092)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11061_11084,new cljs.core.Keyword(null,"value","value",305978217),o__7748__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11092], null));
} else
{}
} else
{}
return o__7748__auto__;
});})(ufv___11083,output_schema11061_11084,input_schema11062_11085,input_checker11063_11086,output_checker11064_11087))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema11061_11084,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11062_11085], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___11171 = schema.utils.use_fn_validation;var output_schema11093_11172 = schema.core.Any;var input_schema11094_11173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker11095_11174 = schema.core.checker.call(null,input_schema11094_11173);var output_checker11096_11175 = schema.core.checker.call(null,output_schema11093_11172);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175){
return (function split_schema(G__11097,G__11098){var validate__7745__auto__ = ufv___11171.get_cell();if(cljs.core.truth_(validate__7745__auto__))
{var args__7746__auto___11176 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11097,G__11098], null);var temp__4126__auto___11177 = input_checker11095_11174.call(null,args__7746__auto___11176);if(cljs.core.truth_(temp__4126__auto___11177))
{var error__7747__auto___11178 = temp__4126__auto___11177;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7747__auto___11178)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11094_11173,new cljs.core.Keyword(null,"value","value",305978217),args__7746__auto___11176,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11178], null));
} else
{}
} else
{}
var o__7748__auto__ = (function (){var s = G__11097;var ks = G__11098;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4278__auto__ = ((function (ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175){
return (function iter__11135(s__11136){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175){
return (function (){var s__11136__$1 = s__11136;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11136__$1);if(temp__4126__auto__)
{var s__11136__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11136__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__11136__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__11138 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__11137 = (0);while(true){
if((i__11137 < size__4277__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4276__auto__,i__11137);cljs.core.chunk_append.call(null,b__11138,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4278__auto__ = ((function (i__11137,in_QMARK_,c__4276__auto__,size__4277__auto__,b__11138,s__11136__$2,temp__4126__auto__,ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175){
return (function iter__11155(s__11156){return (new cljs.core.LazySeq(null,((function (i__11137,in_QMARK_,c__4276__auto__,size__4277__auto__,b__11138,s__11136__$2,temp__4126__auto__,ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175){
return (function (){var s__11156__$1 = s__11156;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11156__$1);if(temp__4126__auto____$1)
{var s__11156__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11156__$2))
{var c__4276__auto____$1 = cljs.core.chunk_first.call(null,s__11156__$2);var size__4277__auto____$1 = cljs.core.count.call(null,c__4276__auto____$1);var b__11158 = cljs.core.chunk_buffer.call(null,size__4277__auto____$1);if((function (){var i__11157 = (0);while(true){
if((i__11157 < size__4277__auto____$1))
{var vec__11161 = cljs.core._nth.call(null,c__4276__auto____$1,i__11157);var k = cljs.core.nth.call(null,vec__11161,(0),null);var v = cljs.core.nth.call(null,vec__11161,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__11158,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__11179 = (i__11157 + (1));
i__11157 = G__11179;
continue;
}
} else
{{
var G__11180 = (i__11157 + (1));
i__11157 = G__11180;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11158),iter__11155.call(null,cljs.core.chunk_rest.call(null,s__11156__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11158),null);
}
} else
{var vec__11162 = cljs.core.first.call(null,s__11156__$2);var k = cljs.core.nth.call(null,vec__11162,(0),null);var v = cljs.core.nth.call(null,vec__11162,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11155.call(null,cljs.core.rest.call(null,s__11156__$2)));
} else
{{
var G__11181 = cljs.core.rest.call(null,s__11156__$2);
s__11156__$1 = G__11181;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__11137,in_QMARK_,c__4276__auto__,size__4277__auto__,b__11138,s__11136__$2,temp__4126__auto__,ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175))
,null,null));
});})(i__11137,in_QMARK_,c__4276__auto__,size__4277__auto__,b__11138,s__11136__$2,temp__4126__auto__,ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175))
;return iter__4278__auto__.call(null,s);
})()));
{
var G__11182 = (i__11137 + (1));
i__11137 = G__11182;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11138),iter__11135.call(null,cljs.core.chunk_rest.call(null,s__11136__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11138),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__11136__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4278__auto__ = ((function (in_QMARK_,s__11136__$2,temp__4126__auto__,ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175){
return (function iter__11163(s__11164){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__11136__$2,temp__4126__auto__,ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175){
return (function (){var s__11164__$1 = s__11164;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11164__$1);if(temp__4126__auto____$1)
{var s__11164__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11164__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__11164__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__11166 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__11165 = (0);while(true){
if((i__11165 < size__4277__auto__))
{var vec__11169 = cljs.core._nth.call(null,c__4276__auto__,i__11165);var k = cljs.core.nth.call(null,vec__11169,(0),null);var v = cljs.core.nth.call(null,vec__11169,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__11166,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__11183 = (i__11165 + (1));
i__11165 = G__11183;
continue;
}
} else
{{
var G__11184 = (i__11165 + (1));
i__11165 = G__11184;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11166),iter__11163.call(null,cljs.core.chunk_rest.call(null,s__11164__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11166),null);
}
} else
{var vec__11170 = cljs.core.first.call(null,s__11164__$2);var k = cljs.core.nth.call(null,vec__11170,(0),null);var v = cljs.core.nth.call(null,vec__11170,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11163.call(null,cljs.core.rest.call(null,s__11164__$2)));
} else
{{
var G__11185 = cljs.core.rest.call(null,s__11164__$2);
s__11164__$1 = G__11185;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__11136__$2,temp__4126__auto__,ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175))
,null,null));
});})(in_QMARK_,s__11136__$2,temp__4126__auto__,ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175))
;return iter__4278__auto__.call(null,s);
})()),iter__11135.call(null,cljs.core.rest.call(null,s__11136__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175))
,null,null));
});})(ks__$1,validate__7745__auto__,ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175))
;return iter__4278__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__7745__auto__))
{var temp__4126__auto___11186 = output_checker11096_11175.call(null,o__7748__auto__);if(cljs.core.truth_(temp__4126__auto___11186))
{var error__7747__auto___11187 = temp__4126__auto___11186;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7747__auto___11187)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11093_11172,new cljs.core.Keyword(null,"value","value",305978217),o__7748__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11187], null));
} else
{}
} else
{}
return o__7748__auto__;
});})(ufv___11171,output_schema11093_11172,input_schema11094_11173,input_checker11095_11174,output_checker11096_11175))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema11093_11172,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11094_11173], null)));
var ufv___11218 = schema.utils.use_fn_validation;var output_schema11188_11219 = plumbing.fnk.schema.GraphIOSchemata;var input_schema11189_11220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker11190_11221 = schema.core.checker.call(null,input_schema11189_11220);var output_checker11191_11222 = schema.core.checker.call(null,output_schema11188_11219);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___11218,output_schema11188_11219,input_schema11189_11220,input_checker11190_11221,output_checker11191_11222){
return (function sequence_schemata(G__11192,G__11193){var validate__7745__auto__ = ufv___11218.get_cell();if(cljs.core.truth_(validate__7745__auto__))
{var args__7746__auto___11223 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11192,G__11193], null);var temp__4126__auto___11224 = input_checker11190_11221.call(null,args__7746__auto___11223);if(cljs.core.truth_(temp__4126__auto___11224))
{var error__7747__auto___11225 = temp__4126__auto___11224;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7747__auto___11225)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11189_11220,new cljs.core.Keyword(null,"value","value",305978217),args__7746__auto___11223,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11225], null));
} else
{}
} else
{}
var o__7748__auto__ = (function (){var G__11209 = G__11192;var vec__11211 = G__11209;var i1 = cljs.core.nth.call(null,vec__11211,(0),null);var o1 = cljs.core.nth.call(null,vec__11211,(1),null);var G__11210 = G__11193;var vec__11212 = G__11210;var k = cljs.core.nth.call(null,vec__11212,(0),null);var vec__11213 = cljs.core.nth.call(null,vec__11212,(1),null);var i2 = cljs.core.nth.call(null,vec__11213,(0),null);var o2 = cljs.core.nth.call(null,vec__11213,(1),null);var G__11209__$1 = G__11209;var G__11210__$1 = G__11210;while(true){
var vec__11214 = G__11209__$1;var i1__$1 = cljs.core.nth.call(null,vec__11214,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__11214,(1),null);var vec__11215 = G__11210__$1;var k__$1 = cljs.core.nth.call(null,vec__11215,(0),null);var vec__11216 = cljs.core.nth.call(null,vec__11215,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__11216,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__11216,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__11217 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__11217,(0),null);var unused = cljs.core.nth.call(null,vec__11217,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__7745__auto__))
{var temp__4126__auto___11226 = output_checker11191_11222.call(null,o__7748__auto__);if(cljs.core.truth_(temp__4126__auto___11226))
{var error__7747__auto___11227 = temp__4126__auto___11226;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7747__auto___11227)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11188_11219,new cljs.core.Keyword(null,"value","value",305978217),o__7748__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11227], null));
} else
{}
} else
{}
return o__7748__auto__;
});})(ufv___11218,output_schema11188_11219,input_schema11189_11220,input_checker11190_11221,output_checker11191_11222))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema11188_11219,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11189_11220], null)));

//# sourceMappingURL=schema.js.map