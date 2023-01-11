"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateexperienceIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserUpdateexperienceIdsInput = class UserUpdateexperienceIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateexperienceIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateexperienceIdsInput.prototype, "push", void 0);
UserUpdateexperienceIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateexperienceIdsInput", {
        isAbstract: true
    })
], UserUpdateexperienceIdsInput);
exports.UserUpdateexperienceIdsInput = UserUpdateexperienceIdsInput;
