"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdatefollowerIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserUpdatefollowerIdsInput = class UserUpdatefollowerIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdatefollowerIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdatefollowerIdsInput.prototype, "push", void 0);
UserUpdatefollowerIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdatefollowerIdsInput", {
        isAbstract: true
    })
], UserUpdatefollowerIdsInput);
exports.UserUpdatefollowerIdsInput = UserUpdatefollowerIdsInput;
