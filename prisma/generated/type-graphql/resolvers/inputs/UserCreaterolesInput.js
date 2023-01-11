"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreaterolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ROLE_1 = require("../../enums/ROLE");
let UserCreaterolesInput = class UserCreaterolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreaterolesInput.prototype, "set", void 0);
UserCreaterolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreaterolesInput", {
        isAbstract: true
    })
], UserCreaterolesInput);
exports.UserCreaterolesInput = UserCreaterolesInput;
