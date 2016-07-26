"use strict";var __decorate=this&&this.__decorate||function(t,e,n,r){var a,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(o=(i<3?a(o):i>3?a(e,n,o):a(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},core_1=require("@angular/core"),DonutComponent=function(){function t(){}return t.prototype.ngOnInit=function(){function t(){var t=l.domain();return t.map(function(t){return{label:t,value:Math.random()}})}function e(t){function e(t){return t.startAngle+(t.endAngle-t.startAngle)/2}var r=n.select(".slices").selectAll("path.slice").data(o(t),s);r.enter().insert("path").style("fill",function(t){return l(t.data.label)}).attr("class","slice"),r.transition().duration(1e3).attrTween("d",function(t){this._current=this._current||t;var e=d3.interpolate(this._current,t);return this._current=e(0),function(t){return c(e(t))}}),r.exit().remove();var a=n.select(".labels").selectAll("text").data(o(t),s);a.enter().append("text").attr("dy",".35em").text(function(t){return t.data.label}),a.transition().duration(1e3).attrTween("transform",function(t){this._current=this._current||t;var n=d3.interpolate(this._current,t);return this._current=n(0),function(t){var r=n(t),a=u.centroid(r);return a[0]=i*(e(r)<Math.PI?1:-1),"translate("+a+")"}}).styleTween("text-anchor",function(t){this._current=this._current||t;var n=d3.interpolate(this._current,t);return this._current=n(0),function(t){var r=n(t);return e(r)<Math.PI?"start":"end"}}),a.exit().remove();var d=n.select(".lines").selectAll("polyline").data(o(t),s);d.enter().append("polyline"),d.transition().duration(1e3).attrTween("points",function(t){this._current=this._current||t;var n=d3.interpolate(this._current,t);return this._current=n(0),function(t){var r=n(t),a=u.centroid(r);return a[0]=.95*i*(e(r)<Math.PI?1:-1),[c.centroid(r),u.centroid(r),a]}}),d.exit().remove()}var n=d3.select(".donut").append("svg").append("g");n.append("g").attr("class","slices"),n.append("g").attr("class","labels"),n.append("g").attr("class","lines");var r=960,a=450,i=Math.min(r,a)/2,o=d3.pie().sort(null).value(function(t){return t.value}),c=d3.arc().outerRadius(.8*i).innerRadius(.4*i),u=d3.arc().innerRadius(.9*i).outerRadius(.9*i);n.attr("transform","translate("+r/2+","+a/2+")");var s=function(t){return t.data.label},l=d3.scaleOrdinal().domain(["Lorem ipsum","dolor sit","amet","consectetur","adipisicing","elit","sed","do","eiusmod","tempor","incididunt"]).range(["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56","#d0743c","#ff8c00"]);e(t()),d3.select(".randomize").on("click",function(){e(t())}),e(t())},t=__decorate([core_1.Component({selector:"donut-cmp",templateUrl:"graphs/templates/donut.html"}),__metadata("design:paramtypes",[])],t)}();exports.DonutComponent=DonutComponent;