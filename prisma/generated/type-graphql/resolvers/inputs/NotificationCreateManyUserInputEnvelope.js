"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyUserInput_1 = require("../inputs/NotificationCreateManyUserInput");
let NotificationCreateManyUserInputEnvelope = class NotificationCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateManyUserInput_1.NotificationCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateManyUserInputEnvelope.prototype, "data", void 0);
NotificationCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], NotificationCreateManyUserInputEnvelope);
exports.NotificationCreateManyUserInputEnvelope = NotificationCreateManyUserInputEnvelope;
