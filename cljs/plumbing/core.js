// Compiled by ClojureScript 0.0-2311
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__11505__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__11505 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__11505__delegate.call(this,m,k,f,x1,x2,xs);};
G__11505.cljs$lang$maxFixedArity = 5;
G__11505.cljs$lang$applyTo = (function (arglist__11506){
var m = cljs.core.first(arglist__11506);
arglist__11506 = cljs.core.next(arglist__11506);
var k = cljs.core.first(arglist__11506);
arglist__11506 = cljs.core.next(arglist__11506);
var f = cljs.core.first(arglist__11506);
arglist__11506 = cljs.core.next(arglist__11506);
var x1 = cljs.core.first(arglist__11506);
arglist__11506 = cljs.core.next(arglist__11506);
var x2 = cljs.core.first(arglist__11506);
var xs = cljs.core.rest(arglist__11506);
return G__11505__delegate(m,k,f,x1,x2,xs);
});
G__11505.cljs$core$IFn$_invoke$arity$variadic = G__11505__delegate;
return G__11505;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__9246__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11515_11521 = cljs.core.seq.call(null,m);var chunk__11516_11522 = null;var count__11517_11523 = (0);var i__11518_11524 = (0);while(true){
if((i__11518_11524 < count__11517_11523))
{var vec__11519_11525 = cljs.core._nth.call(null,chunk__11516_11522,i__11518_11524);var k_11526 = cljs.core.nth.call(null,vec__11519_11525,(0),null);var v_11527 = cljs.core.nth.call(null,vec__11519_11525,(1),null);var m11514_11528 = cljs.core.deref.call(null,m_atom__9246__auto__);cljs.core.reset_BANG_.call(null,m_atom__9246__auto__,cljs.core.assoc_BANG_.call(null,m11514_11528,k_11526,f.call(null,v_11527)));
{
var G__11529 = seq__11515_11521;
var G__11530 = chunk__11516_11522;
var G__11531 = count__11517_11523;
var G__11532 = (i__11518_11524 + (1));
seq__11515_11521 = G__11529;
chunk__11516_11522 = G__11530;
count__11517_11523 = G__11531;
i__11518_11524 = G__11532;
continue;
}
} else
{var temp__4126__auto___11533 = cljs.core.seq.call(null,seq__11515_11521);if(temp__4126__auto___11533)
{var seq__11515_11534__$1 = temp__4126__auto___11533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11515_11534__$1))
{var c__4309__auto___11535 = cljs.core.chunk_first.call(null,seq__11515_11534__$1);{
var G__11536 = cljs.core.chunk_rest.call(null,seq__11515_11534__$1);
var G__11537 = c__4309__auto___11535;
var G__11538 = cljs.core.count.call(null,c__4309__auto___11535);
var G__11539 = (0);
seq__11515_11521 = G__11536;
chunk__11516_11522 = G__11537;
count__11517_11523 = G__11538;
i__11518_11524 = G__11539;
continue;
}
} else
{var vec__11520_11540 = cljs.core.first.call(null,seq__11515_11534__$1);var k_11541 = cljs.core.nth.call(null,vec__11520_11540,(0),null);var v_11542 = cljs.core.nth.call(null,vec__11520_11540,(1),null);var m11514_11543 = cljs.core.deref.call(null,m_atom__9246__auto__);cljs.core.reset_BANG_.call(null,m_atom__9246__auto__,cljs.core.assoc_BANG_.call(null,m11514_11543,k_11541,f.call(null,v_11542)));
{
var G__11544 = cljs.core.next.call(null,seq__11515_11534__$1);
var G__11545 = null;
var G__11546 = (0);
var G__11547 = (0);
seq__11515_11521 = G__11544;
chunk__11516_11522 = G__11545;
count__11517_11523 = G__11546;
i__11518_11524 = G__11547;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9246__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__9246__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11556_11562 = cljs.core.seq.call(null,m);var chunk__11557_11563 = null;var count__11558_11564 = (0);var i__11559_11565 = (0);while(true){
if((i__11559_11565 < count__11558_11564))
{var vec__11560_11566 = cljs.core._nth.call(null,chunk__11557_11563,i__11559_11565);var k_11567 = cljs.core.nth.call(null,vec__11560_11566,(0),null);var v_11568 = cljs.core.nth.call(null,vec__11560_11566,(1),null);var m11555_11569 = cljs.core.deref.call(null,m_atom__9246__auto__);cljs.core.reset_BANG_.call(null,m_atom__9246__auto__,cljs.core.assoc_BANG_.call(null,m11555_11569,f.call(null,k_11567),v_11568));
{
var G__11570 = seq__11556_11562;
var G__11571 = chunk__11557_11563;
var G__11572 = count__11558_11564;
var G__11573 = (i__11559_11565 + (1));
seq__11556_11562 = G__11570;
chunk__11557_11563 = G__11571;
count__11558_11564 = G__11572;
i__11559_11565 = G__11573;
continue;
}
} else
{var temp__4126__auto___11574 = cljs.core.seq.call(null,seq__11556_11562);if(temp__4126__auto___11574)
{var seq__11556_11575__$1 = temp__4126__auto___11574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11556_11575__$1))
{var c__4309__auto___11576 = cljs.core.chunk_first.call(null,seq__11556_11575__$1);{
var G__11577 = cljs.core.chunk_rest.call(null,seq__11556_11575__$1);
var G__11578 = c__4309__auto___11576;
var G__11579 = cljs.core.count.call(null,c__4309__auto___11576);
var G__11580 = (0);
seq__11556_11562 = G__11577;
chunk__11557_11563 = G__11578;
count__11558_11564 = G__11579;
i__11559_11565 = G__11580;
continue;
}
} else
{var vec__11561_11581 = cljs.core.first.call(null,seq__11556_11575__$1);var k_11582 = cljs.core.nth.call(null,vec__11561_11581,(0),null);var v_11583 = cljs.core.nth.call(null,vec__11561_11581,(1),null);var m11555_11584 = cljs.core.deref.call(null,m_atom__9246__auto__);cljs.core.reset_BANG_.call(null,m_atom__9246__auto__,cljs.core.assoc_BANG_.call(null,m11555_11584,f.call(null,k_11582),v_11583));
{
var G__11585 = cljs.core.next.call(null,seq__11556_11575__$1);
var G__11586 = null;
var G__11587 = (0);
var G__11588 = (0);
seq__11556_11562 = G__11585;
chunk__11557_11563 = G__11586;
count__11558_11564 = G__11587;
i__11559_11565 = G__11588;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9246__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__9246__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11595_11599 = cljs.core.seq.call(null,ks);var chunk__11596_11600 = null;var count__11597_11601 = (0);var i__11598_11602 = (0);while(true){
if((i__11598_11602 < count__11597_11601))
{var k_11603 = cljs.core._nth.call(null,chunk__11596_11600,i__11598_11602);var m11594_11604 = cljs.core.deref.call(null,m_atom__9246__auto__);cljs.core.reset_BANG_.call(null,m_atom__9246__auto__,cljs.core.assoc_BANG_.call(null,m11594_11604,k_11603,f.call(null,k_11603)));
{
var G__11605 = seq__11595_11599;
var G__11606 = chunk__11596_11600;
var G__11607 = count__11597_11601;
var G__11608 = (i__11598_11602 + (1));
seq__11595_11599 = G__11605;
chunk__11596_11600 = G__11606;
count__11597_11601 = G__11607;
i__11598_11602 = G__11608;
continue;
}
} else
{var temp__4126__auto___11609 = cljs.core.seq.call(null,seq__11595_11599);if(temp__4126__auto___11609)
{var seq__11595_11610__$1 = temp__4126__auto___11609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11595_11610__$1))
{var c__4309__auto___11611 = cljs.core.chunk_first.call(null,seq__11595_11610__$1);{
var G__11612 = cljs.core.chunk_rest.call(null,seq__11595_11610__$1);
var G__11613 = c__4309__auto___11611;
var G__11614 = cljs.core.count.call(null,c__4309__auto___11611);
var G__11615 = (0);
seq__11595_11599 = G__11612;
chunk__11596_11600 = G__11613;
count__11597_11601 = G__11614;
i__11598_11602 = G__11615;
continue;
}
} else
{var k_11616 = cljs.core.first.call(null,seq__11595_11610__$1);var m11594_11617 = cljs.core.deref.call(null,m_atom__9246__auto__);cljs.core.reset_BANG_.call(null,m_atom__9246__auto__,cljs.core.assoc_BANG_.call(null,m11594_11617,k_11616,f.call(null,k_11616)));
{
var G__11618 = cljs.core.next.call(null,seq__11595_11610__$1);
var G__11619 = null;
var G__11620 = (0);
var G__11621 = (0);
seq__11595_11599 = G__11618;
chunk__11596_11600 = G__11619;
count__11597_11601 = G__11620;
i__11598_11602 = G__11621;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9246__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__9246__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11628_11632 = cljs.core.seq.call(null,vs);var chunk__11629_11633 = null;var count__11630_11634 = (0);var i__11631_11635 = (0);while(true){
if((i__11631_11635 < count__11630_11634))
{var v_11636 = cljs.core._nth.call(null,chunk__11629_11633,i__11631_11635);var m11627_11637 = cljs.core.deref.call(null,m_atom__9246__auto__);cljs.core.reset_BANG_.call(null,m_atom__9246__auto__,cljs.core.assoc_BANG_.call(null,m11627_11637,f.call(null,v_11636),v_11636));
{
var G__11638 = seq__11628_11632;
var G__11639 = chunk__11629_11633;
var G__11640 = count__11630_11634;
var G__11641 = (i__11631_11635 + (1));
seq__11628_11632 = G__11638;
chunk__11629_11633 = G__11639;
count__11630_11634 = G__11640;
i__11631_11635 = G__11641;
continue;
}
} else
{var temp__4126__auto___11642 = cljs.core.seq.call(null,seq__11628_11632);if(temp__4126__auto___11642)
{var seq__11628_11643__$1 = temp__4126__auto___11642;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11628_11643__$1))
{var c__4309__auto___11644 = cljs.core.chunk_first.call(null,seq__11628_11643__$1);{
var G__11645 = cljs.core.chunk_rest.call(null,seq__11628_11643__$1);
var G__11646 = c__4309__auto___11644;
var G__11647 = cljs.core.count.call(null,c__4309__auto___11644);
var G__11648 = (0);
seq__11628_11632 = G__11645;
chunk__11629_11633 = G__11646;
count__11630_11634 = G__11647;
i__11631_11635 = G__11648;
continue;
}
} else
{var v_11649 = cljs.core.first.call(null,seq__11628_11643__$1);var m11627_11650 = cljs.core.deref.call(null,m_atom__9246__auto__);cljs.core.reset_BANG_.call(null,m_atom__9246__auto__,cljs.core.assoc_BANG_.call(null,m11627_11650,f.call(null,v_11649),v_11649));
{
var G__11651 = cljs.core.next.call(null,seq__11628_11643__$1);
var G__11652 = null;
var G__11653 = (0);
var G__11654 = (0);
seq__11628_11632 = G__11651;
chunk__11629_11633 = G__11652;
count__11630_11634 = G__11653;
i__11631_11635 = G__11654;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9246__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__11655){var vec__11657 = p__11655;var k = cljs.core.nth.call(null,vec__11657,(0),null);var ks = cljs.core.nthnext.call(null,vec__11657,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3541__auto__ = ks;if(and__3541__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3541__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__9246__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11666_11672 = cljs.core.seq.call(null,x);var chunk__11667_11673 = null;var count__11668_11674 = (0);var i__11669_11675 = (0);while(true){
if((i__11669_11675 < count__11668_11674))
{var vec__11670_11676 = cljs.core._nth.call(null,chunk__11667_11673,i__11669_11675);var k_11677 = cljs.core.nth.call(null,vec__11670_11676,(0),null);var v_11678 = cljs.core.nth.call(null,vec__11670_11676,(1),null);var m11665_11679 = cljs.core.deref.call(null,m_atom__9246__auto__);cljs.core.reset_BANG_.call(null,m_atom__9246__auto__,cljs.core.assoc_BANG_.call(null,m11665_11679,((typeof k_11677 === 'string')?cljs.core.keyword.call(null,k_11677):k_11677),keywordize_map.call(null,v_11678)));
{
var G__11680 = seq__11666_11672;
var G__11681 = chunk__11667_11673;
var G__11682 = count__11668_11674;
var G__11683 = (i__11669_11675 + (1));
seq__11666_11672 = G__11680;
chunk__11667_11673 = G__11681;
count__11668_11674 = G__11682;
i__11669_11675 = G__11683;
continue;
}
} else
{var temp__4126__auto___11684 = cljs.core.seq.call(null,seq__11666_11672);if(temp__4126__auto___11684)
{var seq__11666_11685__$1 = temp__4126__auto___11684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11666_11685__$1))
{var c__4309__auto___11686 = cljs.core.chunk_first.call(null,seq__11666_11685__$1);{
var G__11687 = cljs.core.chunk_rest.call(null,seq__11666_11685__$1);
var G__11688 = c__4309__auto___11686;
var G__11689 = cljs.core.count.call(null,c__4309__auto___11686);
var G__11690 = (0);
seq__11666_11672 = G__11687;
chunk__11667_11673 = G__11688;
count__11668_11674 = G__11689;
i__11669_11675 = G__11690;
continue;
}
} else
{var vec__11671_11691 = cljs.core.first.call(null,seq__11666_11685__$1);var k_11692 = cljs.core.nth.call(null,vec__11671_11691,(0),null);var v_11693 = cljs.core.nth.call(null,vec__11671_11691,(1),null);var m11665_11694 = cljs.core.deref.call(null,m_atom__9246__auto__);cljs.core.reset_BANG_.call(null,m_atom__9246__auto__,cljs.core.assoc_BANG_.call(null,m11665_11694,((typeof k_11692 === 'string')?cljs.core.keyword.call(null,k_11692):k_11692),keywordize_map.call(null,v_11693)));
{
var G__11695 = cljs.core.next.call(null,seq__11666_11685__$1);
var G__11696 = null;
var G__11697 = (0);
var G__11698 = (0);
seq__11666_11672 = G__11695;
chunk__11667_11673 = G__11696;
count__11668_11674 = G__11697;
i__11669_11675 = G__11698;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9246__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__9315__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__9315__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__11699 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__11700 = cljs.core.next.call(null,ks);
m = G__11699;
ks = G__11700;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3553__auto__ = m;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4278__auto__ = (function iter__11709(s__11710){return (new cljs.core.LazySeq(null,(function (){var s__11710__$1 = s__11710;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11710__$1);if(temp__4126__auto__)
{var s__11710__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11710__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__11710__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__11712 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__11711 = (0);while(true){
if((i__11711 < size__4277__auto__))
{var vec__11715 = cljs.core._nth.call(null,c__4276__auto__,i__11711);var k = cljs.core.nth.call(null,vec__11715,(0),null);var v = cljs.core.nth.call(null,vec__11715,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__11712,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__11717 = (i__11711 + (1));
i__11711 = G__11717;
continue;
}
} else
{{
var G__11718 = (i__11711 + (1));
i__11711 = G__11718;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11712),iter__11709.call(null,cljs.core.chunk_rest.call(null,s__11710__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11712),null);
}
} else
{var vec__11716 = cljs.core.first.call(null,s__11710__$2);var k = cljs.core.nth.call(null,vec__11716,(0),null);var v = cljs.core.nth.call(null,vec__11716,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11709.call(null,cljs.core.rest.call(null,s__11710__$2)));
} else
{{
var G__11719 = cljs.core.rest.call(null,s__11710__$2);
s__11710__$1 = G__11719;
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
});return iter__4278__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__11720){
var m = cljs.core.first(arglist__11720);
var kvs = cljs.core.rest(arglist__11720);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__11721){
var m = cljs.core.first(arglist__11721);
arglist__11721 = cljs.core.next(arglist__11721);
var key_seq = cljs.core.first(arglist__11721);
arglist__11721 = cljs.core.next(arglist__11721);
var f = cljs.core.first(arglist__11721);
var args = cljs.core.rest(arglist__11721);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4278__auto__ = ((function (s){
return (function iter__11726(s__11727){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__11727__$1 = s__11727;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11727__$1);if(temp__4126__auto__)
{var s__11727__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11727__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__11727__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__11729 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__11728 = (0);while(true){
if((i__11728 < size__4277__auto__))
{var x = cljs.core._nth.call(null,c__4276__auto__,i__11728);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__11729,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__11730 = (i__11728 + (1));
i__11728 = G__11730;
continue;
}
} else
{{
var G__11731 = (i__11728 + (1));
i__11728 = G__11731;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11729),iter__11726.call(null,cljs.core.chunk_rest.call(null,s__11727__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11729),null);
}
} else
{var x = cljs.core.first.call(null,s__11727__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__11726.call(null,cljs.core.rest.call(null,s__11727__$2)));
} else
{{
var G__11732 = cljs.core.rest.call(null,s__11727__$2);
s__11727__$1 = G__11732;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4278__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__11733){
var colls = cljs.core.seq(arglist__11733);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__11734__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__11735 = conj_when.call(null,coll,x);
var G__11736 = cljs.core.first.call(null,xs);
var G__11737 = cljs.core.next.call(null,xs);
coll = G__11735;
x = G__11736;
xs = G__11737;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__11734 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11734__delegate.call(this,coll,x,xs);};
G__11734.cljs$lang$maxFixedArity = 2;
G__11734.cljs$lang$applyTo = (function (arglist__11738){
var coll = cljs.core.first(arglist__11738);
arglist__11738 = cljs.core.next(arglist__11738);
var x = cljs.core.first(arglist__11738);
var xs = cljs.core.rest(arglist__11738);
return G__11734__delegate(coll,x,xs);
});
G__11734.cljs$core$IFn$_invoke$arity$variadic = G__11734__delegate;
return G__11734;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__11740__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__11739_SHARP_){return cljs.core.apply.call(null,f,p1__11739_SHARP_,args);
}));
};
var G__11740 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11740__delegate.call(this,a,f,args);};
G__11740.cljs$lang$maxFixedArity = 2;
G__11740.cljs$lang$applyTo = (function (arglist__11741){
var a = cljs.core.first(arglist__11741);
arglist__11741 = cljs.core.next(arglist__11741);
var f = cljs.core.first(arglist__11741);
var args = cljs.core.rest(arglist__11741);
return G__11740__delegate(a,f,args);
});
G__11740.cljs$core$IFn$_invoke$arity$variadic = G__11740__delegate;
return G__11740;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__11742__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__11742 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11742__delegate.call(this,f,arg,args);};
G__11742.cljs$lang$maxFixedArity = 2;
G__11742.cljs$lang$applyTo = (function (arglist__11743){
var f = cljs.core.first(arglist__11743);
arglist__11743 = cljs.core.next(arglist__11743);
var arg = cljs.core.first(arglist__11743);
var args = cljs.core.rest(arglist__11743);
return G__11742__delegate(f,arg,args);
});
G__11742.cljs$core$IFn$_invoke$arity$variadic = G__11742__delegate;
return G__11742;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map