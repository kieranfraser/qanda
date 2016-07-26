"use strict";var __decorate=this&&this.__decorate||function(e,t,o,i){var s,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(e,t){return function(o,i){t(o,i,e)}},core_1=require("@angular/core"),question_1=require("../../models/question"),dashboard_component_1=require("../../dashboard/components/dashboard.component"),question_input_service_1=require("../services/question-input.service"),QuestionInputComponent=function(){function e(e,t){this._parent=e,this._questionInputService=t,this.types=["Free-text","Multi-choice"],this.today=new Date,this.questionModel=new question_1.Question("",this.selectedClass,"","",[],[],JSON.parse(localStorage.getItem("profile")).user_id,this.today.toString(),this.types[0],"",JSON.parse(localStorage.getItem("profile")).name,JSON.parse(localStorage.getItem("profile")).picture,[]),this.choiceOne="",this.choiceTwo="",this.choiceThree="",this.choiceFour="",this.questionTags=[],this.submitted=!1}return e.prototype.onSubmit=function(){this.submitted=!0,this.today=new Date,this.questionModel.classid=this.selectedClass,this.questionModel.tags=this.questionTags,"Multi-choice"===this.questionModel.type&&(this.questionModel.choices=[this.choiceOne,this.choiceTwo,this.choiceThree,this.choiceFour]),this._questionInputService.createNewQuestion(this.questionModel),this.questionModel=new question_1.Question("",this.selectedClass,"","",[],[],JSON.parse(localStorage.getItem("profile")).user_id,this.today.toString(),this.types[0],"",JSON.parse(localStorage.getItem("profile")).name,JSON.parse(localStorage.getItem("profile")).picture,[])},__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"selectedClass",void 0),e=__decorate([core_1.Component({selector:"question-input-cmp",templateUrl:"question-input/templates/question_input.html",providers:[question_input_service_1.QuestionInputService]}),__param(0,core_1.Inject(core_1.forwardRef(function(){return dashboard_component_1.DashboardComponent}))),__metadata("design:paramtypes",[dashboard_component_1.DashboardComponent,question_input_service_1.QuestionInputService])],e)}();exports.QuestionInputComponent=QuestionInputComponent;