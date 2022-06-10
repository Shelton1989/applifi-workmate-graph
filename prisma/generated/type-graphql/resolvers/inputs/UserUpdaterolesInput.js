"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdaterolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ROLE_1 = require("../../enums/ROLE");
let UserUpdaterolesInput = class UserUpdaterolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdaterolesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdaterolesInput.prototype, "push", void 0);
UserUpdaterolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdaterolesInput", {
        isAbstract: true
    })
], UserUpdaterolesInput);
exports.UserUpdaterolesInput = UserUpdaterolesInput;
