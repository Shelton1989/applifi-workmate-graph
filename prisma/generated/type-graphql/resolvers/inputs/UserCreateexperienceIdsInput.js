"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateexperienceIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserCreateexperienceIdsInput = class UserCreateexperienceIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateexperienceIdsInput.prototype, "set", void 0);
UserCreateexperienceIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateexperienceIdsInput", {
        isAbstract: true
    })
], UserCreateexperienceIdsInput);
exports.UserCreateexperienceIdsInput = UserCreateexperienceIdsInput;
