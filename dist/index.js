"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var x=c(function(R,f){
function p(e,r,a,i,s){var n,u,t,o;for(n=a.data,u=a.accessors[0],t=s,o=0;o<e;o++){if(u(n,t)>r)return o;t+=i}return-1}f.exports=p
});var v=c(function(m,d){
var O=require('@stdlib/array-base-arraylike2object/dist'),G=x();function T(e,r,a,i,s){var n,u,t;if(e<=0)return-1;if(u=O(a),u.accessorProtocol)return G(e,r,u,i,s);for(n=s,t=0;t<e;t++){if(a[n]>r)return t;n+=i}return-1}d.exports=T
});var y=c(function(w,q){
var b=require('@stdlib/strided-base-stride2offset/dist'),h=v();function l(e,r,a,i){return h(e,r,a,i,b(e,i))}q.exports=l
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=y(),k=v();j(g,"ndarray",k);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
