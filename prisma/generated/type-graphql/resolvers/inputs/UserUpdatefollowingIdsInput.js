"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdatefollowingIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserUpdatefollowingIdsInput = class UserUpdatefollowingIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdatefollowingIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdatefollowingIdsInput.prototype, "push", void 0);
UserUpdatefollowingIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdatefollowingIdsInput", {
        isAbstract: true
    })
], UserUpdatefollowingIdsInput);
exports.UserUpdatefollowingIdsInput = UserUpdatefollowingIdsInput;
