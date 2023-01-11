"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateNestedOneWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutUsersInput_1 = require("../inputs/TenantCreateOrConnectWithoutUsersInput");
const TenantCreateWithoutUsersInput_1 = require("../inputs/TenantCreateWithoutUsersInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateNestedOneWithoutUsersInput = class TenantCreateNestedOneWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutUsersInput_1.TenantCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutUsersInput_1.TenantCreateWithoutUsersInput)
], TenantCreateNestedOneWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutUsersInput_1.TenantCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutUsersInput_1.TenantCreateOrConnectWithoutUsersInput)
], TenantCreateNestedOneWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateNestedOneWithoutUsersInput.prototype, "connect", void 0);
TenantCreateNestedOneWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateNestedOneWithoutUsersInput", {
        isAbstract: true
    })
], TenantCreateNestedOneWithoutUsersInput);
exports.TenantCreateNestedOneWithoutUsersInput = TenantCreateNestedOneWithoutUsersInput;
