"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateManyTenantInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyTenantInput_1 = require("../inputs/UserCreateManyTenantInput");
let UserCreateManyTenantInputEnvelope = class UserCreateManyTenantInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateManyTenantInput_1.UserCreateManyTenantInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateManyTenantInputEnvelope.prototype, "data", void 0);
UserCreateManyTenantInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateManyTenantInputEnvelope", {
        isAbstract: true
    })
], UserCreateManyTenantInputEnvelope);
exports.UserCreateManyTenantInputEnvelope = UserCreateManyTenantInputEnvelope;
