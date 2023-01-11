"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateOrConnectWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutUsersInput_1 = require("../inputs/TenantCreateWithoutUsersInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateOrConnectWithoutUsersInput = class TenantCreateOrConnectWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateOrConnectWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutUsersInput_1.TenantCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutUsersInput_1.TenantCreateWithoutUsersInput)
], TenantCreateOrConnectWithoutUsersInput.prototype, "create", void 0);
TenantCreateOrConnectWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateOrConnectWithoutUsersInput", {
        isAbstract: true
    })
], TenantCreateOrConnectWithoutUsersInput);
exports.TenantCreateOrConnectWithoutUsersInput = TenantCreateOrConnectWithoutUsersInput;
