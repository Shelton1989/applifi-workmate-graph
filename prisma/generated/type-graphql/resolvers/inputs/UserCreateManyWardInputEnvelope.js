"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateManyWardInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyWardInput_1 = require("../inputs/UserCreateManyWardInput");
let UserCreateManyWardInputEnvelope = class UserCreateManyWardInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateManyWardInput_1.UserCreateManyWardInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateManyWardInputEnvelope.prototype, "data", void 0);
UserCreateManyWardInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateManyWardInputEnvelope", {
        isAbstract: true
    })
], UserCreateManyWardInputEnvelope);
exports.UserCreateManyWardInputEnvelope = UserCreateManyWardInputEnvelope;
