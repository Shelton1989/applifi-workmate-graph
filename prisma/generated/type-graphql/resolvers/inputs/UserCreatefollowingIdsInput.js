"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreatefollowingIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserCreatefollowingIdsInput = class UserCreatefollowingIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreatefollowingIdsInput.prototype, "set", void 0);
UserCreatefollowingIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreatefollowingIdsInput", {
        isAbstract: true
    })
], UserCreatefollowingIdsInput);
exports.UserCreatefollowingIdsInput = UserCreatefollowingIdsInput;
