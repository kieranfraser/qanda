"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_1 = require("../../models/user");
var question_1 = require("../../models/question");
var answer_1 = require("../../models/answer");
var DashboardService = (function () {
    //ToDo: These keys need to be moved to server side
    function DashboardService() {
    }
    /**
     * Create a new user
     * @param value
     */
    DashboardService.prototype.createNewUser = function (user) {
        firebase.database().ref('users/' + user.userid).set(user);
    };
    /**
     * Helper function to create a new user from a JSON object
     * (such as the snapshot.val() returned from firebase.
     * @param object
       */
    DashboardService.prototype.userFromJSON = function (object) {
        var user = new user_1.User('', [], [], [], [], '', '');
        user.userid = object["userid"];
        if (object["classes"] != null) {
            user.classes = object["classes"];
        }
        if (object["questions"] != null) {
            user.questions = object["questions"];
        }
        if (object["notifications"] != null) {
            user.notifications = object["notifications"];
        }
        user.auth = object["auth"];
        user.anonymous = object["anonymous"];
        return user;
    };
    DashboardService.prototype.questionFromJSON = function (object) {
        var question = new question_1.Question("", "", "", "", [], [], "", "", "", "", "", "", []);
        if (object != null) {
            question.id = object['id'];
            question.classid = object['classid'];
            question.question = object['question'];
            question.summary = object['summary'];
            question.choices = object['choices'];
            var answerArray = object['answers'];
            if (answerArray != null) {
                console.log("answer array", answerArray);
                for (var answer in answerArray) {
                    console.log(answerArray[answer]);
                    question.answers.push(this.answerFromJSON(answerArray[answer]));
                }
            }
            else {
                question.answers = [];
            }
            question.user = object['user'];
            question.date = object['date'];
            question.type = object['type'];
            question.anonymous = object['anonymous'];
            question.username = object['username'];
            question.picture = object['picture'];
            question.tags = object['tags'];
        }
        return question;
    };
    DashboardService.prototype.answerFromJSON = function (object) {
        var answer = new answer_1.Answer("", "", "", "", "", "", "");
        if (object != null) {
            answer.id = object['id'];
            answer.anonymous = object['anonymous'];
            answer.answer = object['answer'];
            answer.date = object['date'];
            answer.picture = object['picture'];
            answer.user = object['user'];
            answer.username = object['username'];
        }
        return answer;
    };
    DashboardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
