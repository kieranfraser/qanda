"use strict";var __decorate=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}},core_1=require("@angular/core"),question_feed_component_1=require("./question-feed.component"),questionfeed_service_1=require("../services/questionfeed.service"),ng2_bootstrap_1=require("ng2-bootstrap/ng2-bootstrap"),answer_input_component_1=require("./answer-input.component"),donut_component_1=require("../../graphs/components/donut.component"),AnswerComponent=function(){function e(e,t,n){this._parent=e,this._questionFeedService=t,this.ref=n,this.isCollapsedAnswer=!0,this.isCollapsedStats=!0}return e.prototype.ngOnInit=function(){},e.prototype.ngOnDestroy=function(){this.ref.detach()},__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"question",void 0),e=__decorate([core_1.Component({selector:"answer-cmp",templateUrl:"question-feed/templates/answer.html",providers:[questionfeed_service_1.QuestionFeedService],directives:[ng2_bootstrap_1.CollapseDirective,answer_input_component_1.AnswerInputComponent,donut_component_1.DonutComponent]}),__param(0,core_1.Inject(core_1.forwardRef(function(){return question_feed_component_1.QuestionFeedComponent}))),__metadata("design:paramtypes",[question_feed_component_1.QuestionFeedComponent,questionfeed_service_1.QuestionFeedService,core_1.ChangeDetectorRef])],e)}();exports.AnswerComponent=AnswerComponent;