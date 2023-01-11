"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTenantInput_1 = require("../inputs/UserCreateWithoutTenantInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutTenantInput = class UserCreateOrConnectWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTenantInput_1.UserCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTenantInput_1.UserCreateWithoutTenantInput)
], UserCreateOrConnectWithoutTenantInput.prototype, "create", void 0);
UserCreateOrConnectWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutTenantInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutTenantInput);
exports.UserCreateOrConnectWithoutTenantInput = UserCreateOrConnectWithoutTenantInput;
