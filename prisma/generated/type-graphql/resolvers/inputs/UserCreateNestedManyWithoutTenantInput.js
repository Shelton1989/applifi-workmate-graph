"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyTenantInputEnvelope_1 = require("../inputs/UserCreateManyTenantInputEnvelope");
const UserCreateOrConnectWithoutTenantInput_1 = require("../inputs/UserCreateOrConnectWithoutTenantInput");
const UserCreateWithoutTenantInput_1 = require("../inputs/UserCreateWithoutTenantInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutTenantInput = class UserCreateNestedManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutTenantInput_1.UserCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutTenantInput_1.UserCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateManyTenantInputEnvelope_1.UserCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateManyTenantInputEnvelope_1.UserCreateManyTenantInputEnvelope)
], UserCreateNestedManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutTenantInput.prototype, "connect", void 0);
UserCreateNestedManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutTenantInput", {
        isAbstract: true
    })
], UserCreateNestedManyWithoutTenantInput);
exports.UserCreateNestedManyWithoutTenantInput = UserCreateNestedManyWithoutTenantInput;
