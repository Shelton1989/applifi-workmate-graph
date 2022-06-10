"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreatefollowerIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserCreatefollowerIdsInput = class UserCreatefollowerIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreatefollowerIdsInput.prototype, "set", void 0);
UserCreatefollowerIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreatefollowerIdsInput", {
        isAbstract: true
    })
], UserCreatefollowerIdsInput);
exports.UserCreatefollowerIdsInput = UserCreatefollowerIdsInput;
